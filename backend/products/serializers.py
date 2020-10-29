from rest_framework import serializers
from users.serializers import UserSerializer
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    images = serializers.ListField(serializers.DictField())

    class Meta:
        model = Product
        fields = "__all__"
