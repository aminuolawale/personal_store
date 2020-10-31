from rest_framework.routers import DefaultRouter
from .views import PublicProductsView

router = DefaultRouter()
router.register("", PublicProductsView, "public_products")


urlpatterns = router.urls
