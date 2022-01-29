import { useState,useEffect } from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating] = useState(10)

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 8){
            setMessage('請填入至少八個字')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            // click button 後，送出此物件
            const newFeedback = {
                text,
                rating,
            };

            handleAdd(newFeedback);

            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>您如何評價我們的服務？</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )}

export default FeedbackForm;
