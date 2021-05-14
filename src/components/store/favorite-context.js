import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBrawler) => {},
  removeFavorite: (brawlerId) => {},
  itemIsFavorite: (brawlerId) => {},
})

export const FavoritesContextProvider = props => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteBrawler) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteBrawler)
    })
  }
  const removeFavoriteHandler = (brawlerId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(brawler => brawler.id !== brawlerId)
    })
  }
  const itemIsFavoriteHandler = (brawlerId) => {
    return userFavorites.some(brawler => brawler.id === brawlerId)
  }
  
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }

  return(
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext