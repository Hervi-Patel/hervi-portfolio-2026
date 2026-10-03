from django.shortcuts import render
from .models import Contact

def home(request):

    if request.method == "POST":

        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

    return render(request, 'portfolio/index.html')