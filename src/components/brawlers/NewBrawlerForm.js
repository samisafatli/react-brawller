import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewBrawlerForm.module.css'

const NewBrawlerForm = props => {
  const nameInputRef = useRef()
  const imageInputRef = useRef()
  const typeInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredname = nameInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredType = typeInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const brawlerData = {
      name: enteredname,
      image: enteredImage,
      type: enteredType,
      description: enteredDescription,
    }
    props.onAddBrawler(brawlerData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Brawler Name</label>
          <input type='text' required id='name' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Brawler Image</label>
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='type'>Type</label>
          <input type='text' required id='type' ref={typeInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Brawler</button>
        </div>
      </form>
    </Card>
  )
}

export default NewBrawlerForm
