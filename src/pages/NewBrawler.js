import { useHistory } from 'react-router-dom'
import NewBrawlerForm from '../components/brawlers/NewBrawlerForm'

const NewBrawler = () => {
  const brawlerURL = 'https://brawlers-api-heroku.herokuapp.com/api/brawlers'
  
  const history = useHistory()

  const addBrawlerHandler = brawlerData => {
    fetch(brawlerURL, {
      method: 'POST',
      body: JSON.stringify(brawlerData),
      headers: { 'Content-Type': 'application/json'}
    }).then(() => history.replace('/'))
  }
  return (
    <section>
      <h1>NewBrawler Page :)</h1>
      <NewBrawlerForm onAddBrawler={addBrawlerHandler}/>
    </section>
  )
}

export default NewBrawler
