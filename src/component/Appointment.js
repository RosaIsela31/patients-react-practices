import React from 'react'
import '../index.css'

const Appointment = ({ appointment, deleteAppointment }) => {
  return ( 
    <div className='cita'>
      <p>Mascota: <span>{appointment.pet}</span> </p>
      <p>Dueño: <span>{appointment.owner}</span> </p>
      <p>Fecha: <span>{appointment.date}</span> </p>
      <p>Hora: <span>{appointment.time}</span> </p>
      <p>Síntomas: <span>{appointment.symptoms}</span> </p>

      <button
        className='button eliminar u-full-width'
        onClick={() => deleteAppointment(appointment.id)}
      >Eliminar &times;</button>
    </div>
   );
}
 
export default Appointment;