import React from 'react';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person">
            <p onClick={props.click}>I am  {props.name} and i am {props.age} Years Old</p>
            <p>{props.childern}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>       
    )
};
export default person;