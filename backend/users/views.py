from rest_framework import generics
from rest_framework import permissions
from .serializers import UserSerializer, UpdateUserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Address
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.views import APIView

user_model = get_user_model()


class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        data = request.data
        print("the request data", data)
        address_data = data.pop("address")
        address = Address.objects.create(**address_data)
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        user = user_model.objects.create_user(
            address=address, **serializer.data)
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
        data = request.data
        print("the request", data)
        serializer = UpdateUserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        print("the request", serializer.data)
        user = request.user.update_user(**serializer.data)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
