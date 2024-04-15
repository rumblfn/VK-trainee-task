from django.contrib import admin

from .models import HackerNews
from .models import Comments

admin.site.register(HackerNews)
admin.site.register(Comments)
