from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = (
        "nom",
        "type_evenement",
        "date_evenement",
        "telephone",
        "created_at"
    )
    search_fields = ("nom", "telephone", "email")
