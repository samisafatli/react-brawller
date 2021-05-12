import BrawllerItem from './BrawllerItem'
import classes from './BrawllerList.module.css'

const BrawllerList = props => {
  return (
    <div>
      <ul className={classes.list}>
        {props.brawllers.map(brawller => (
          <BrawllerItem
            key={brawller.id}
            id={brawller.id}
            image={brawller.image}
            name={brawller.name}
            type={brawller.type}
            description={brawller.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default BrawllerList
