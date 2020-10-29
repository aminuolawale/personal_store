from rest_framework.routers import DefaultRouter
from .views import ProductsView
router = DefaultRouter()


router.register("", ProductsView, "products")


urlpatterns = router.urls
