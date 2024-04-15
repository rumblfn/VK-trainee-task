"""
URL configuration for admin project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from hackernews.views import HackerNewsAPIList, HackerNewsDetailedAPI, CommentsAPIList, RepliesAPIList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v0/hackernew/<id>/', HackerNewsDetailedAPI.as_view()),
    path('api/v0/hackernewslist/', HackerNewsAPIList.as_view()),
    path('api/v0/comments/<int:hacker_new>/', CommentsAPIList.as_view()),
    path('api/v0/replies/<int:parent>/', RepliesAPIList.as_view()),
]
