from rest_framework import serializers
from .models import User, Address


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    address = AddressSerializer(required=False)

    class Meta:
        model = User
        fields = "__all__"
        depth = 1


class UpdateUserSerializer(serializers.Serializer):
    full_name = serializers.CharField(required=False)
    username = serializers.CharField(required=False)
    address = serializers.DictField(required=False)
