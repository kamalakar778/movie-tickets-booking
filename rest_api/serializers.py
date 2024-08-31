from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

# authentication/serializers.py

from rest_framework import serializers


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = "__all__"

class SeatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seats
        fields = "__all__"

class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields=('id','username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            # email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        # user = authenticate(**data)
        # if user and user.is_active:
        #     return user
        # raise serializers.ValidationError("incorrect creds")
        username = data.get('username')
        password = data.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user and user.is_active:
            return data
        
        raise serializers.ValidationError("Incorrect credentials")
    