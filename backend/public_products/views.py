from rest_framework import viewsets, permissions
from products.serializers import ProductSerializer
from products.models import Product


class PublicProductsView(viewsets.ReadOnlyModelViewSet):
    """ """
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Product.objects.all()
