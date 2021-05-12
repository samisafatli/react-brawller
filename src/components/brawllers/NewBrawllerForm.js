import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewBrawllerForm.module.css'

const NewBrawllerForm = () => {
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

    const brawllerData = {
      name: enteredname,
      image: enteredImage,
      type: enteredType,
      description: enteredDescription,
    }
    console.log(brawllerData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Brawller Name</label>
          <input type='text' required id='name' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Brawller Image</label>
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='type'>Type</label>
          <input type='text' required id='type' ref={typeInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Brawller</button>
        </div>
      </form>
    </Card>
  )
}

export default NewBrawllerForm
