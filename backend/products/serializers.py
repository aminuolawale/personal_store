from rest_framework import serializers
from users.serializers import UserSerializer
from .models import Product


class ProductInputSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    main_image = serializers.DictField(write_only=True)
    images = serializers.ListField(serializers.DictField(), required=False, )

    class Meta:
        model = Product
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Product
        fields = "__all__"
