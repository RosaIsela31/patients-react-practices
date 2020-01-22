import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'

const Form = ({ createAppointment  }) => {

  const [ appointment, setAppointment  ] = useState({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
  })

  const [ error, setError ] = useState(false)

  // 1. Función que se ejecuta cada que el usuario escribe en un input 
  const handleChange = (e) => { 
    setAppointment({
      ...appointment,
      [e.target.name] : e.target.value
    })
  }

  // 2. Extraer los valores
  const {pet, owner, date, time, symptoms } = appointment;

  // 3. Cuando el usuario agrega el formulario 
  const submitAppointment = (e) => {
    e.preventDefault()

    // a. Validar (el trim sirve para eliminar los espacios en blanco que ingrese el usuario)
    if(pet.trim() === '' || owner.trim() === '' || date === '' || time === '' || symptoms === ''){
      setError(true)
      // Se agrega el return para que no se siga ejecutando el código ya que hay un error
      return;
    }

    // Eliminar el mensaje previo
    setError(false )
    
    // b. Asigmar un id
    appointment.id = uuid();

    // c. Crear la cita
    createAppointment(appointment)

    // d. Reiniciar el form
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    })
  }

  return ( 
    <Fragment>
      <h2>Crear Cita</h2>
      {
        error 
        ?
          <p className='alerta-error'>Todos los campos son obligatorios</p>
        :
          null
      }
      <form
        onSubmit={submitAppointment}
      >
        <label>Nombre mascota </label>
        <input 
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre de tu mascota'
          onChange={handleChange}
          value={pet}
        />
        <label>Nombre dueño </label>
        <input 
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre del dueño'
          onChange={handleChange}
          value={owner}
        />
        <label>Fecha</label>
        <input 
          type='date'
          name='date'
          className='u-full-width'
          onChange={handleChange}
          value={date}
        />
        <label>Hora</label>
        <input 
          type='time'
          name='time'
          className='u-full-width'
          onChange={handleChange}
          value={time}
        />
        <label>Síntomas</label>
        <textarea
          className='u-full-width'
          name='symptoms'
          onChange={handleChange}
          value={symptoms}
        >
        </textarea>
        <button
          type='submit'
          className='u-full-width button-primary'
        >
          Agregar CIta
        </button>
      </form>
    </Fragment> 
    );
}
 
export default Form;