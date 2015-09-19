from django.contrib import admin

# Register your models here.
from .models import Major, Course

class CourseInline(admin.TabularInline):
    model = Course
    extra = 3

class MajorAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Major',               {'fields': ['major_text']})
    ]
    inlines = [CourseInline]
    search_fields = ['major_text']

admin.site.register(Major, MajorAdmin)
