import {useState} from 'react'

const cards=[
  {
    id: 1,
    question: 'what language is react based on?',
    'answer':'JavaSCript',
  },
  {
    id: 2,
    question: 'what are the building blocks of react app?',
    'answer':'components',
  },
  {
    id: 3,
    question: 'which company developed react?',
    'answer':'faceBook',
  },
  {
    id: 4,
    question: 'How to give components memory?',
    'answer':'useState hook',
  },
  {
    id: 5,
    question: 'how to pass data from parent to child components?',
    'answer':'props',
  },
  {
    id: 6,
    question: 'whats the name of the syntax we use to describe a UI in react?',
    'answer':'JSX',
  },
]

export default function App(){
  const [selectedId,setSelectedId]=useState(null)
  
   return (
    <div className='flashcards'>
      {cards.map((cardItem)=>(
        <div key={cardItem.id }  className={cardItem.id===selectedId?'selected':''}onClick={()=>{
          setSelectedId(cardItem.id!==selectedId?cardItem.id:null)
        }}>
          <p>{(cardItem.id===selectedId)?cardItem.answer: cardItem.question}</p>
        </div>
      ))}
    </div>
   )
} 
