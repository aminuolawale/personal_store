from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, ProductInputSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from utils.utils import upload_images


class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Product.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = ProductInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        product = Product.objects.filter(id=serializer.data.get("id")).first()
        response_data = ProductSerializer(product)
        return Response(response_data.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        processed_images = self.handle_images()
        user = self.request.user
        serializer.save(owner=user, **processed_images)

    def perform_update(self, serializer):
        processed_images = self.handle_images()
        serializer.save(**processed_images)

    def get_queryset(self):
        """ """
        return self.queryset.filter(owner=self.request.user)

    def handle_images(self):
        processed_images = {}
        main_image = self.request.data.get("main_image")
        if main_image:
            main_image = upload_images([main_image])[0]
            processed_images.update(main_image=main_image)
        images = self.request.data.get("images", [])
        images = upload_images(images)
        processed_images.update(images=images)
        return processed_images
