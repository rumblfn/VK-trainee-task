from rest_framework import serializers

from hackernews.models import HackerNews
from hackernews.models import Comments


class HackerNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HackerNews
        fields = '__all__'


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'


class RootCommentSerializer(serializers.ModelSerializer):
    replies_count = serializers.SerializerMethodField()

    class Meta:
        model = Comments
        fields = '__all__'

    def get_replies_count(self, obj):
        return obj.replies.count()
