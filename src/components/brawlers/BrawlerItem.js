import React from 'react'
import classes from './BrawlerItem.module.css'
import Card from '../ui/Card'

const BrawlerItem = props =>  {
  const {item, image, content, actions} = classes
  console.log(props)
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
          <div className={ actions }><button>To Favorite</button></div>
        </Card>
      </li>
    </div>
  )
}

export default BrawlerItem
