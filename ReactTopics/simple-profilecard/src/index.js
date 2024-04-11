import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const skillNames=[
  {
    name: "web Design",
    level: "advanced",
    color: "green",
    // emoji: "💪"
  },
  {
    name: "react",
    level: "begineer",
    color: "red",
    // emoji: "😿"
  },
  {
    name: "git and github",
    level: "intermediate",
    // emoji: "😸",
    color: "yellow",
  },
  {
    name: "php",
    level: "advanced",
    color: "green",
    // emoji: "💪"
  },
  {
    name: "js",
    level: "intermediate",
    color: "yellow",
    // emoji: "😸"
  },
  {
    name: "C++",
    level: "advanced",
    color: "green",
    // emoji: "💪"
  },
  {
    name: "nodejs",
    level: "intermediate",
    color: "yellow",
    // emoji: "😸"
  }
]

function App(){
    return(
      <div className='container'>
        <div className='photo-Box'>
          <Photo/>
        </div>
        <Description/>
        <ul className="skills">
        {skillNames.map((skill)=> <Skills skillSet={skill}/>)}
        </ul>
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

const Skills=({skillSet})=>{
  let emoji='😸';
  if(skillSet.level=='advanced'){
    emoji='💪'
  }
  else{
    emoji='😿'
  }
  return(<li className='skill-container' style={{backgroundColor:skillSet.color}}>
        <p>{skillSet.name} {emoji!=null ?emoji: '' }</p>
    </li>)
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)