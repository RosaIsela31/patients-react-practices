import React, { Fragment } from 'react'
import Form from './Form';

const Patients = () => {
  return ( 
    <Fragment>
      <h1>Patient management</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form />
          </div>
          <div className='one-half column'>
            2
          </div>
        </div>
      </div>
    </Fragment>
   );
}
 
export default Patients;