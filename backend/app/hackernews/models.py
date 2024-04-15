from django.db import models


class HackerNews(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    rating = models.IntegerField(default=0)
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comments(models.Model):
    hacker_new = models.ForeignKey(HackerNews, on_delete=models.CASCADE, null=False, related_name='comments')
    content = models.TextField(blank=True)
    parent = models.ForeignKey('self', on_delete=models.PROTECT, null=True, blank=True, related_name='replies')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
