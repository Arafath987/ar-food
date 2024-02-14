from rest_framework import serializers
from .models import vendor

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = vendor
        fields = "__all__"

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password:
            instance.set_password(password)  # Ensure password is set correctly
        instance.save()
        return instance


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = vendor
        fields = ['Profile_picture','username','designation','phone_number','email']

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

class ChangePasswordSerializer(serializers.ModelSerializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    class Meta:
        model = vendor
        fields = ['old_password', 'new_password']