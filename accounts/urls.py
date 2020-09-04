from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('apis/auth', include('knox.urls')),
    path('apis/auth/register', RegisterAPI.as_view()),
    path('apis/auth/login', LoginAPI.as_view()),
    path('apis/auth/user', UserAPI.as_view()),
    path('apis/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]
