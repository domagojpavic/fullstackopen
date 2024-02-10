import { useState } from 'react'

const Button = (props) => {
  const {handleClick, text} = props
  return (
    <button onClick={handleClick}>{text}</button>
    )
}

const StatisticsLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <>
        {text} {value} % <br />
      </>
    )
  }
  return (
    <>
      {text} {value} <br />
    </>
  )
}

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
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} />
        <StatisticsLine text="positive" value={good / (good + neutral + bad) * 100} />
      </p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
