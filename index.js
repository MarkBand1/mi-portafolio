//const element = document.createElement('h1')
//element.innerText = 'Hello React';
//const container = document.getElementById('root')
//container.appendChild(element)
//reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";


const user = {
    firstName: 'Marco',
    lastName: 'Banda',
    avatar: 'C:\Users\Marco Antonio\Documents\Mi Portafolio\mi-portafolio\src\assets\images\mastervatar.png'
}

function getName(user){ //el método getName usa cómo parámetro "user"
  return `${user.firstName} ${user.lastName}` //usa acentos franceses, no son comillas o apostrófes 

}

function getGreeting(user){
  if(user){
     return<h1> Hola {getName(user)} !</h1>
  }
  return <h1>Hola Extraño!</h1>
}

const name = 'Marco'


const element = (
      <div>        
          <h1>{getGreeting(user)}</h1>
          <img src={user.avatar} />
      </div>    
          
)
//const element = <img src={user.avatar}/>  
const container = document.getElementById('root')

ReactDOM.render(element, container)
//ReactDOM.render(___Qué elemento va a renderear, ___dónde lo va a hacer)
