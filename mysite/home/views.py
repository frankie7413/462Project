from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views import generic
from django.utils import timezone

# from django.shortcuts import get_object_or_404, render, render_to_response
# from django.template import RequestContext
# from django.http import HttpResponseRedirect
# from django.core.urlresolvers import reverse
# from django.views import generic
# from django.utils import timezone


from .models import Major, Course

class IndexView(generic.ListView):
    template_name = 'home/index.html'
    context_object_name = 'major_list'

    def get_queryset(self):
    	return Major.objects.all()



# def index(request):
#    return render_to_response('home/index.html', context_instance=RequestContext(request))





# Create your views here.
# from django.shortcuts import render_to_response
# from django.template import RequestContext
 
# def index(request):
#     return render_to_response('home/index.html', context_instance=RequestContext(request))