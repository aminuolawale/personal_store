# Generated by Django 3.1.2 on 2020-11-01 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20201029_2018'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='main_image',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]