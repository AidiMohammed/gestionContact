import React from 'react';
import classnames from 'classnames'

export default function InputGroup(props) 
{
    const {name,value,label,onChange,type,errors} = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value = {value} 
                name={name} 
                onChange = {onChange} 
                type= {type} 
                className= {classnames("form-control",{'is-invalid': errors})}/>
            <div className="invalid-feedback" >{errors}</div>
        </div>

    )
}
