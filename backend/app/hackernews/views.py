from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import HackerNews, Comments
from .serializers import HackerNewsSerializer, CommentsSerializer, RootCommentSerializer


class HackerNewsAPIList(generics.ListAPIView):
    queryset = HackerNews.objects.all().order_by('-id')[:100]
    serializer_class = HackerNewsSerializer


class HackerNewsAPI(generics.RetrieveAPIView):
    queryset = HackerNews.objects.all()
    serializer_class = HackerNewsSerializer
    lookup_field = 'id'


class HackerNewsCommentsInfo(APIView):
    def get(self, request, id):
        comments = Comments.objects.filter(hacker_new=id)
        total_comments_count = comments.count()
        root_comments = comments.filter(parent=None)

        return Response({
            'root_comments': RootCommentSerializer(root_comments, many=True).data,
            'total_comments_count': total_comments_count,
        })


class RepliesAPIList(APIView):
    def get(self, request, parent):
        comments = Comments.objects.filter(parent=parent)
        return Response(RootCommentSerializer(comments, many=True).data)


class CommentsAPIList(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    lookup_field = 'hacker_new'
