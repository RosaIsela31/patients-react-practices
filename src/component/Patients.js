import React, { Fragment, useState, useEffect } from 'react'
import Form from './Form';
import Appointment from './Appointment'

const Patients = () => {
  // Citas en localstorage
  // parse analiza un string como json
  let initialAppointments = JSON.parse(localStorage.getItem('citas'))
  if(!initialAppointments){
    initialAppointments = []
  }

  // Agregando un estado para citas, esas citas se van a almacenar aquí, en el componente principal
  const [ allAppointment, setAllAppointment ] = useState(initialAppointments)
 
  // useEffect parra realizar ciertas operaciones cuándo el state cambia
  useEffect( () => {
    let initialAppointments = JSON.parse(localStorage.getItem('citas'))

    if(initialAppointments){
      //Stringify lo está convirtiendo a un arreglo porque es lo único que soporta localstorage
      localStorage.setItem('citas', JSON.stringify(allAppointment))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [allAppointment]);      

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

  // Mensaje condicional
  const title = allAppointment.length === 0 ? 'No hay citas' : 'Administra tus citas' 
  

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
            <h2>{title}</h2>
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