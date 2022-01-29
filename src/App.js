import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';

import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('確定刪除選項?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
