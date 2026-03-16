import React from 'react'

const FormGroup = ({label ,placeholder ,value,onChange, type = "text", autoComplete}) => {
  return (
    <div className='form-group'>
      <label htmlFor={label}>{label}:</label>
      <input 
        value={value} 
        onChange={onChange}
        autoComplete={autoComplete}
        type={type} id={label} placeholder={placeholder} />
    </div>
  )
}

export default FormGroup
