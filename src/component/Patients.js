import React, { Fragment, useState } from 'react'
import Form from './Form';
import Appointment from './Appointment'

const Patients = () => {
  // Agregando un estado para citas, esas citas se van a almacenar aquí, en el componente principal
  const [ allAppointment, setAllAppointment ] = useState([])

  // Función que tome las citas actuales y agregué la nueva
  const createAppointment = (appoint) => { 
    setAllAppointment([
      ...allAppointment,
       appoint
    ])
  }

  // Función que elimina una cita por su id
  const deleteAppointment = (id) => {
    const newAppointment = allAppointment.filter(item =>  item.id !== id);
    setAllAppointment(newAppointment)
  }

  return ( 
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className='one-half column'>
            <h2>Administra tus citas</h2>
            {allAppointment.map(item => (
              <Appointment 
                key={item.id}
                appointment={item}
                deleteAppointment={deleteAppointment}
              />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
   );
}
 
export default Patients;