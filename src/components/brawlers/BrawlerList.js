import BrawlerItem from './BrawlerItem'
import classes from './BrawlerList.module.css'

const BrawlerList = props => {
  console.log(`####${JSON.stringify(props)}`)
  return (
    <div>
      <ul className={classes.list}>
        {props.brawlers.map(brawler => (
          <BrawlerItem
            key={brawler.id}
            id={brawler.id}
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
