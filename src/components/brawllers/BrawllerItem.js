import React from 'react'
import classes from './BrawllerItem.module.css'
import Card from '../ui/Card'

const BrawllerItem = props =>  {
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
          <div className={ actions }><button>To Favorite</button></div>
        </Card>
      </li>
    </div>
  )
}

export default BrawllerItem
