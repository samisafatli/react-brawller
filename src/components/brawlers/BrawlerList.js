import BrawlerItem from './BrawlerItem'
import classes from './BrawlerList.module.css'

const BrawlerList = props => {
  return (
    <div>
      <ul className={classes.list}>
        {props.brawlers.map(brawler => (
          <BrawlerItem
            key={brawler._id}
            id={brawler._id}
            image={brawler.image}
            name={brawler.name}
            type={brawler.type}
            description={brawler.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default BrawlerList
