import React, { useContext } from 'react'
import FavoritesContext from '../components/store/favorite-context'
import BrawlerList from '../components/brawlers/BrawlerList'

const Favorites = () => {
  const context = useContext(FavoritesContext)
  
  let content;

  if (context.totalFavorites === 0) {
    content = <p>You got no favorites yet.</p>;
  } else {
    content = <BrawlerList brawlers={context.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default Favorites