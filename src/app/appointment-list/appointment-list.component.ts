import { Component } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  appointmentTitle: string = '';
  appointmentDate: Date = new Date();
  appointments: Appointment[] = [];
  saveAppointment() {
    if (this.appointmentTitle.trim().length && this.appointmentDate) {
      let newAppointment : Appointment = {
        id: Date.now(),
        title: this.appointmentTitle,
        date: this.appointmentDate,
      };

      this.appointments.push(newAppointment);
      this.appointmentTitle = '';
      this.appointmentDate = new Date();
      alert(newAppointment.title);
    }
  }
}
