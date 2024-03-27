import { useState } from "react"

const tittle = 'Give feedback'
const statsTittle = 'Statistics'
const positiveTittle = 'positive'
const allTittle = 'all'
const averageTittle = 'average'
const nofeedback = 'No feedback given'
let qty = 0

const Header = ({ tittle }) => <h1>{tittle}</h1>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Content = ({ click, statistics, allClicks, allPositives, average }) => {
  return (
    <>
      <Header tittle={statistics} />
      {qty === 0 ? 
        <p>{nofeedback}</p>
        :
        <table>
          <tbody>
            {click?.map((clicks) => {
              return (
                <tr key={clicks.name}>
                  <th style={{textAlign: 'left'}}>{clicks.name}</th>
                  <td>{clicks.cant}</td>
                </tr>
              )
            })}
            <tr>
              <th style={{textAlign: 'left'}}>{allTittle}</th>
              <td>{allClicks}</td>
            </tr>
            <tr>
              <th style={{textAlign: 'left'}}>{averageTittle}</th>
              <td>{average}</td>
            </tr>
            <tr>
              <th style={{textAlign: 'left'}}>{positiveTittle}</th>
              <td>{`${allPositives}%`}</td>
            </tr>
          </tbody>
        </table>
      }
    </>
  )
}

const App = () => {
  const [click, setClick] = useState([{ name: 'good', cant: 0 }, { name: 'neutral', cant: 0 }, { name: 'bad', cant: 0 }])
  const [allClicks, setAllClicks] = useState(0)
  const [allPositives, setAllPositives] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClick = (e, index) => {
    e.preventDefault()
    const actualState = click
    const actualClick = actualState[index]
    const newClick = {
      ...actualClick,
      cant: actualClick.cant + 1
    }
    actualState[index] = newClick

    setClick([...actualState])
    setAllClicks(qty += 1)
    setAverage((actualState[0].cant - actualState[2].cant)/qty)
    setAllPositives((actualState[0].cant/qty)*100)
  }
  
  return (
    <>
      <Header tittle={tittle} />
      {click?.map((buttonClicks, index) => {
        return <Button key={buttonClicks.name} handleClick={(e) => handleClick(e, index)} text={buttonClicks.name}/>
      })}
      <Content click={click} statistics={statsTittle} allClicks={allClicks} allPositives={allPositives} average={average} />
    </>
  )
}

export default App