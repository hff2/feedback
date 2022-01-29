import { useState,useEffect } from "react";
import Card from "./shared/Card"

function FeedbackForm() {
    const [text,setText] = useState('')

    const handleTextChange = (e) =>{
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>您如何評價我們的服務？</h2>
                {/* @todo - 分數選項 */}
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )}

export default FeedbackForm;
