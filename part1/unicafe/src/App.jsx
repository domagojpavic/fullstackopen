import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if ( good === 0 && neutral === 0 && bad === 0 ) {
    return (
      <>
        <h1>statistics</h1>
        <p>
          No feedback given
        </p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <p>
        good {good}<br/>
        neutral {neutral}<br/>
        bad {bad}<br />
        all {good + neutral + bad} <br/>
        average {(good - bad) / (good + neutral + bad)} <br/>
        positive {good / (good + neutral + bad) * 100} %
      </p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
