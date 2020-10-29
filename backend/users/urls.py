from django.urls import path
from .views import SignupView, UserView, ProfileView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register("", UserView, "users")

urlpatterns = [
    path("signup/", SignupView.as_view(), name='signup'),
    path("profile/", ProfileView.as_view(), name='profile'),

]


urlpatterns += router.urls
