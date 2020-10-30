from rest_framework import viewsets, permissions
from .serializers import ProductSerializer
from .models import Product
from utils.utils import upload_images


class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Product.objects.all()

    def perform_create(self, serializer):
        images = self.request.data.get("images", [])
        images = upload_images(images)
        user = self.request.user
        serializer.save(owner=user, images=images)

    def perform_update(self, serializer):
        images = self.request.data.get("images", [])
        images = upload_images(images)
        serializer.save(images=images)

    def get_queryset(self):
        """ """
        return self.queryset.filter(owner=self.request.user)
