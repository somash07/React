import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


function App(){
    return(
      <div className='container'>
        <div className='photo-Box'>
          <Photo/>
        </div>
        <Description/>
        <div className='skills'>
          <Skills name='css' color='green' emoji='😀'/>
          <Skills name='html' color='green' emoji='😀'/>
          <Skills name='Js' color='yellow' emoji='🙂‍↕️'/>
          <Skills name='php' color='yellow' emoji='🙂‍↕️'/>
          <Skills name='sql' color='blue' emoji='🤓'/>
          <Skills name='react' color='red' emoji='🥸'/>
          <Skills name='nodeJs' color='red' emoji='🥸'/>
        </div>
      </div>
    )
}

function Photo(){
  return <img src= "phuto.jpeg" alt="profile-pic" />
}

const Description=()=>{
  return (
    <div className='desc'>
      <h2 align="center">Somash Manandhar</h2>
      <p>i am currently learning react.. ncacdbcd bdcjbdc abdcdcdcjkd dckdbcdbhbc dncbdchdbcdc dbcdbcdhbcdhbc</p>
    </div>
  )
}

const Skills=(props)=>{
  return(<div className='skill-container' style={{backgroundColor:props.color}}>
        <p>{props.name} {props.emoji}</p>
    </div>)
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)