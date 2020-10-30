from rest_framework import generics
from rest_framework import permissions
from .serializers import UserSerializer, UpdateUserSerializer, UserInputSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Address
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.views import APIView
from utils.utils import upload_images

user_model = get_user_model()


class SignupView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        raw_data = request.data
        serializer = UserInputSerializer(data=raw_data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        profile_picture = data.get("profile_picture")
        if profile_picture:
            profile_picture = upload_images([profile_picture])[0]
            data.update(profile_picture=profile_picture)
        address = data.get("address")
        if address:
            address = Address.objects.create(**address)
            data.update(address=address)
        user = user_model.objects.create_user(**data)
        address.owner = user.id
        address.save()
        serializer = UserSerializer(user)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# protect this endpoint. a must

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    queryset = user_model.objects.all()


class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        user = user_model.objects.filter(
            username=request.user.username).first()
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        raw_data = request.data
        serializer = UpdateUserSerializer(data=raw_data)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        profile_picture = data.get("profile_picture")
        if profile_picture:
            profile_picture = upload_images([profile_picture])[0]
            data.update(profile_picture=profile_picture)
        address = data.get("address")
        if address:
            old_address = Address.objects.filter(
                id=request.user.address.id).first()
            print("the old address", old_address)
            old_address.delete()
            address = Address.objects.create(owner=request.user.id, **address)
            data.update(address=address)
        user = request.user.update_user(**data)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
