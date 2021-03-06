from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class Address(models.Model):
    owner = models.CharField(max_length=100, blank=True)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    country = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.street}, {self.city}, {self.state}, {self.country}"


class User(AbstractUser):
    profile_picture = models.URLField()
    full_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=30, unique=True)
    phone = models.CharField(max_length=20)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["full_name", "phone", "username"]

    def update_user(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)
        self.save()
        return self

    def __str__(self):
        return self.full_name
