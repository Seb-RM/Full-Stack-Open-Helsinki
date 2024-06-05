import { useState } from 'react'

import './App.css'

function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <TitleComponent />
      <TitleComponent />
    </div>
  );
}

export default App
