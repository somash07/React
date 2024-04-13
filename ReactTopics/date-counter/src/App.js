import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const decreaseCount = () => {
    setCount((c) => c - step)
  }

  const increaseCount = () => {
    setCount((c) => c + step)
  }

  const increaseStep = () => {
    setStep((c) => c + 1)
  }

  const decreaseStep = () => {
    setStep((c) => c - 1)
  }

  function handleForm(e) {
    e.preventDefault();
  }
  const date = new Date('April 12 2024');
  date.setDate(date.getDate() + count)
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='step-bar'>
          <input type='range' min='0' max='10' value={step} onChange={(e) => setStep(e.target.value)}></input>
          <p>Step: {step}</p>
        </div>
        <div className='count-bar'>
          <button className='btn' onClick={decreaseCount}>-</button>
          <form onSubmit={handleForm}>
            <input type='text' value={count} onChange={
              (e) => {
                setCount(Number(e.target.value))
              }
            }></input>
          </form>
          <button className='btn' onClick={increaseCount}>+</button>
        </div>
        <div className='date-day'>
          <p>
            {(count === 0)
              ? 'Today is '
              : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `
            }
            {date.toDateString()}
          </p>
        </div>

        {(count !== 0 || step !== 1) ?
          <button className='btn' onClick={() => {
            setCount(0)
            setStep(1)
          }}>Reset</button>: null
        }
      </div>
    </div>
  )
}



