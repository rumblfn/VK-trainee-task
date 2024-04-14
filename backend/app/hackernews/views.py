from rest_framework import generics

from .models import HackerNews
from .serializers import HackerNewsSerializer


class HackerNewsAPIList(generics.ListAPIView):
    queryset = HackerNews.objects.all().order_by('-id')[:100]
    serializer_class = HackerNewsSerializer


class HackerNewAPI(generics.RetrieveAPIView):
    queryset = HackerNews.objects.all()
    serializer_class = HackerNewsSerializer
    lookup_field = 'id'
