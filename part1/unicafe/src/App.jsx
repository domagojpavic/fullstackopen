import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    return (
      setGood(good + 1)
    )
  }
  const handleNeutral = () => {
    return (
      setNeutral(neutral + 1)
    )
  }
  const handleBad = () => {
    return (
      setBad(bad + 1)
    )
  }

  return (
    <div>

    <h1>give feedback</h1>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}>neutral</button>
    <button onClick={handleBad}>bad</button>
    

    <h1>statistics</h1>
    <p>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br />
      all {good + neutral + bad} <br/>
      average {(good - bad) / (good + neutral + bad)} <br/>
      positive {good / (good + neutral + bad) * 100} %
    </p>
    </div>
  )
}

export default App
