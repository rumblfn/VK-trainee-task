from rest_framework import serializers

from hackernews.models import HackerNews


class HackerNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HackerNews
        fields = '__all__'
