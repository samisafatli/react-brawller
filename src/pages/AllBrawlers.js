import { useState } from 'react'
import BrawlerList from '../components/brawlers/BrawlerList'

const brawlerURL = 'https://brawlers-api-heroku.herokuapp.com/api/brawlers'

const AllBrawlersPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedBrawlers, setLoadedBrawlers] = useState([])

  useState(() => {
    setIsLoading(true)
    fetch(brawlerURL).then(response => {
      return response.json()
    }).then(data => {
      setIsLoading(false)
      setLoadedBrawlers(data.docs)
    })
  }, [])

  if(isLoading){
    return(
    <section>
      <p>Loading...</p>
    </section>)
  }

  return (
    <section>
      <h1>All Brawlers</h1>
      <BrawlerList brawlers={loadedBrawlers}/>
    </section>
  );
}

export default AllBrawlersPage;