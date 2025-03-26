import jwt
from rest_framework.exceptions import AuthenticationFailed
from Vendor.models import vendor
from django.conf import settings

def authenticate_user(token):
    if not token:
        raise AuthenticationFailed('User is not authenticated')

    try:
        secret_key = settings.HASH_KEY
        payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        user_id = payload['id']
        User = vendor.objects.get(id=user_id)
        return User
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('User token has expired')
    except jwt.InvalidTokenError:
        raise AuthenticationFailed('Invalid token')
    except vendor.DoesNotExist:
        raise AuthenticationFailed('user not found')