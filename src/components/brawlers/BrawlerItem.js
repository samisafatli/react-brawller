import React, { useContext } from 'react'
import classes from './BrawlerItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../store/favorite-context'

const BrawlerItem = props =>  {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        image: props.image,
        name: props.name,
        type: props.type,
        description: props.description,
      })
    }
  }

  const {item, image, content, actions} = classes

  return (
    <div>
      <li className={ item }>
        <Card>
          <div className={ image }><img src={props.image} alt={props.name}/></div>
          <div className={ content }>
            <h3>{props.name}</h3>
            <p>{props.type}</p>
            <p>{props.description}</p>
          </div>
          <div className={ actions }>
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? 'Remove From Favorites' : 'Add Favorite'}
            </button>
          </div>
        </Card>
      </li>
    </div>
  )
}

export default BrawlerItem
