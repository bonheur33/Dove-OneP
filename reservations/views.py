from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Reservation

@csrf_exempt
def create_reservation(request):
    if request.method == "POST":
        data = json.loads(request.body)

        Reservation.objects.create(
            nom=data["nom"],
            email=data["email"],
            telephone=data["telephone"],
            type_evenement=data["type_evenement"],
            date_evenement=data["date_evenement"],
            message=data.get("message", "")
        )

        return JsonResponse({"status": "ok"})

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)
