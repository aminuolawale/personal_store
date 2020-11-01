from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField, HStoreField


class Product(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField()
    main_image = models.CharField(max_length=255, blank=True)
    images = ArrayField(models.CharField(max_length=255),
                        blank=True, default=list)

    def __str__(self):
        return self.name
