import { useState } from 'react'

const noAnecdotes = 'No anecdotes to show'
const anecdotes = [
  { name: 'If it hurts, do it more often.', votes: 0},
  { name: 'Adding manpower to a late software project makes it later!', votes: 0},
  { name: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
  { name:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
  { name:'Premature optimization is the root of all evil.', votes: 0},
  { name:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
  { name:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0},
  { name:'The only way to go fast, is to go well.', votes: 0}
]
const text = { anecdotes: 'next anecdote', vote: 'vote', oftheDay: 'Anecdote of the day', mostVotes: 'Anecdote with most votes', noMostVoted: 'No one most voted'}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Header = ({ tittle }) => <h1>{tittle}</h1>

const Anecdote = ({ anecdoteSelected }) => {
  return (
    <>
      <p>{anecdoteSelected.name}</p>
      <p>{`Has: ${anecdoteSelected.votes} ${anecdoteSelected.votes === 1 ? 'vote' : 'votes'}`}</p>
    </>
  )
}

const Best = () => {
  const mostVoted = anecdotes.reduce((maxVoted, anecdote) => (anecdote.votes > maxVoted.votes) ? maxVoted = anecdote : maxVoted)
  return (
    <>
      {mostVoted.votes > 0 ?
        <>
          <p>{mostVoted.name}</p>
          <p>{`Has: ${mostVoted.votes} ${mostVoted.votes === 1 ? 'vote' : 'votes'}`}</p>
        </>
      :
        <p>{text.noMostVoted}</p>
      }
    </>
  )
}

const App = () => {
  const [selected, setSelected] = useState(null)
  const [vote, setVote] = useState(null)

  const handleClickRandom = (e) => {
    e.preventDefault()
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  const handleClickVote = (e, selected) => {
    e.preventDefault()
    if (selected !== undefined && selected !== null) {
      const actualState = anecdotes
      const actualClick = actualState[selected]
      const newVote = {
        ...actualClick,
        votes: actualClick.votes + 1
      }
      actualState[selected] = newVote
      
      setVote([...actualState])
    }
  }

  return (
    <>
      <Header tittle={text.oftheDay} />
      { selected === null ? <p>{noAnecdotes}</p> : <Anecdote anecdoteSelected={anecdotes[selected]} /> }
      <Button handleClick={(e) => handleClickVote(e, selected)} text={text.vote}/>
      <Button handleClick={(e) => handleClickRandom(e)} text={text.anecdotes}/>
      <Header tittle={text.mostVotes} />
      <Best />
    </>
  )
}

export default App
