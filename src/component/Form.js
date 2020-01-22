import React, { Fragment } from 'react'

const Form = () => {
  return ( 
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre mascota </label>
        <input 
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre de tu mascota'
        />
        <label>Nombre dueño </label>
        <input 
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre del dueño'
        />
        <label>Fecha</label>
        <input 
          type='date'
          name='date'
          className='u-full-width'
        />
        <label>Hora</label>
        <input 
          type='time'
          name='time'
          className='u-full-width'
        />
        <label>Síntomas</label>
        <textarea
          className='u-full-width'
          name='symptoms'
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