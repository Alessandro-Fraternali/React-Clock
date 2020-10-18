import React from 'react'
function clock(props){
  const tempo = Date.now() + props.timezone * 3600 * 1000;
  const data = new Date(tempo);
  return <h1>In {props.country} è il { data.toLocaleDateString() + ' e sono le ' + data.toLocaleTimeString()}</h1>
}

export default clock; //Serve ad esportare la funzione
