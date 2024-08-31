from typing import Any
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

    # authentication/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser

class Movies(models.Model):
    movie_id=models.AutoField(primary_key =True)
    name = models.CharField(max_length=100)
    image = models.ImageField()
    category = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    price = models.CharField(max_length=3)

class Seats(models.Model):
    movie_id=models.IntegerField()
    user_id=models.IntegerField()
    total=models.FloatField()

class Tickets(models.Model):
    movie_id=models.IntegerField()
    user_id=models.IntegerField()
    total=models.FloatField()


# class User(models.Model):
#     # user_id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=50, unique=True)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=128) 

#     def __str__(self):
#         return self.username

# class Order(models.Model):
#     Id = models.IntegerField(max_length=100)
#     Products_List = models.ForeignObject(Products, blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     status=models.BooleanField(default=False)
#     Subtotal=models.ForeignKey(Id, related_name=Id)

#     def __str__(self):
#         return self.Id

class UserManager(BaseUserManager):
    def create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError("Usrename should be provided")
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, password, **extra_fields)

class User(AbstractBaseUser):
    id= models.AutoField(primary_key=True)
    name=models.CharField(max_length=200)
    username=models.CharField(max_length=100, unique=True)
    email=models.EmailField(max_length=60)
    password=models.CharField(max_length=16)

    USERNAME_FIELD = 'username'

    objects = UserManager()
    
