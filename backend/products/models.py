from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField, HStoreField

# create categories, migrate and create new users


class Category(models.TextChoices):
    """ """
    COMPUTERS_AND_ACCESSORIES = "Computers and Accessories"
    PHONES_AND_GADGETS = "Phones and Gadgets"
    ELECTRONICS = "Electronics"
    CLOTHING_AND_FASHION = "Clothing and Fashion"
    HOME_AND_KITCHEN = "Home and Kitchen"
    KIDS_AND_TOYS = "Kids and Toys"
    OTHERS = "Others"


class Product(models.Model):
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField()
    category = models.CharField(
        max_length=100, choices=Category.choices, default=Category.OTHERS)
    main_image = models.CharField(max_length=255, blank=True)
    images = ArrayField(models.CharField(max_length=255),
                        blank=True, default=list)

    def __str__(self):
        return self.name
