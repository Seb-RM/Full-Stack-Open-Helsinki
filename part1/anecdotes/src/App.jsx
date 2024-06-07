import { useState } from 'react'

import './App.css'

const App = () => {
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const totalAnecdotes = anecdotes.length;

  const voteList = Array(totalAnecdotes).fill(0);

  const [votes, setVotes] = useState(voteList);

  const handleVote = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const votesCount = [...votes];
  votesCount.sort((a, b) => b - a);
  const mostVoted = votesCount[0];
  const mostVotedIndex = votes.findIndex((element) => element === mostVoted);
  console.log(mostVoted);
  console.log(mostVotedIndex);

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>{`has ${votes[selected]} votes`}</p>
      </div>
      <button onClick={handleVote}>vote</button>
      <button
        onClick={() => setSelected(Math.floor(Math.random() * totalAnecdotes))}>
        next anecdote
      </button>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotedIndex]}</p>
        <p>{`has ${votes[mostVotedIndex]} votes`}</p>
      </div>
    </>
  );
};

export default App;
