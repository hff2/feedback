import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackState from './components/FeedbackState';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }

  const deleteFeedback = (id) => {
    if (window.confirm('確定刪除選項?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackState feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
