import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackState from './components/FeedbackState';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './components/pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackState feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />}/>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
