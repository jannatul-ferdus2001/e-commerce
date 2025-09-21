import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch } from 'react-redux'
import { allproduct } from '../components/slice/productSlice'

const Contact = () => {
    let dispatch = useDispatch()
    let [text, setText] = useState('')
    let handleInput = (e) =>{
        setText(e.target.value);
        
    }

    let handleSubmit = () =>{
     dispatch(allproduct(text))
    }
  return (
    <div className="">
        <Container>
 <input onChange={handleInput} type="text" />
        <button onClick={handleSubmit}>Submitt</button>
    
        </Container>
       </div>
  )
}

export default Contact