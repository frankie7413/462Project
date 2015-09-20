from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.IndexView.as_view(), name='index'),
	# url(r'^submitFeedback/', views.IndexView.as_view(), name='submitFeedback'),
	# url(r'^profPage/', views.IndexView.as_view(), name='profPage'),
	# url(r'^login/', views.IndexView.as_view(), name='login'),
	# url(r'^signUp/', views.IndexView.as_view(), name='signUp'),
]

#url(r'^polls/', include('polls.urls')),
#url(r'^$', 'home.views.index'),
#url(r'^$', views.index),