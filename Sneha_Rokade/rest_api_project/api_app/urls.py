from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home),
    path('students/', views.student_list),
]