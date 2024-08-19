from django.urls import path
from . import views

urlpatterns = [
    path('/bg<int:bg_id>', views.bg_calendar, name='bg_calendar'),  # Example URL pattern
]