import { useState } from 'react'
import TitleComponent from './components/TitleComponent';
import Button from './components/ButtonComponent';
import StatisticLine from './components/StatisticsComponent'

import './App.css'

function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good+neutral+bad;
  const average=((good-bad)/all)
  const positive = (good*100)/all;

  return (
    <div>
      <TitleComponent title={"Give Feedback"} />
      <div>
        <Button state={good} setState={setGood} text={"Good"} />
        <Button state={neutral} setState={setNeutral} text={"Neutral"} />
        <Button state={bad} setState={setBad} text={"Bad"} />
      </div>
      <TitleComponent title={"Statistics"} />
      <div>
        <StatisticLine text={"good"} state={good} />
        <StatisticLine text={"neutral"} state={neutral} />
        <StatisticLine text={"bad"} state={bad} />
        <StatisticLine text={"all"} state={all} />
        <StatisticLine text={"average"} state={average} />
        <StatisticLine text={"positive"} state={positive} />
      </div>
    </div>
  );
}

export default App
