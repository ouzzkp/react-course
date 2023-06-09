import React from 'react'

const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
    let wrapperClass = "form-group" //bootstrap
    if (error && error.length > 0) {
        wrapperClass += " has-error" //bootstrap
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>
                <div className='field'>
                    <input type='text'
                        name={name}
                        className='form-control'
                        placeholder={placeHolder}
                        value={value}
                        onChange={onChange}
                    />
                    {error && <div className='alert alert-danger'>{error}</div>}
                </div>
            </label>
        </div>
    )
}

export default TextInput