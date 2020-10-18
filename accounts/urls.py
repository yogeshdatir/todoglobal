from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from allauth.account import views as allauth_views

urlpatterns = [
    path('apis/rest-auth/', include('rest_auth.urls')),
    path('apis/rest-auth/registration/', include('rest_auth.registration.urls')),
    path('apis/auth/register', RegisterAPI.as_view()),
    path('apis/auth/login', LoginAPI.as_view()),
    path('apis/auth/user', UserAPI.as_view()),
    path('apis/auth/logout', allauth_views.LogoutView.as_view(), name='allauth_logout'),
]
