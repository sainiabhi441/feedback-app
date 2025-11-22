

import React , { useState, useContext, useEffect }  from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext';






function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);  // कोई default rating नहीं (null)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [resetRating, setResetRating] = useState(false);  // reset flag

  const { addFeedback, feedbackEdit, updateFeedback, clearEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit?.edit === true && feedbackEdit.item) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text || '');
      setRating(feedbackEdit.item.rating || null);
    }
  }, [feedbackEdit]);

  useEffect(() => {
    if (resetRating) {
      setResetRating(false);  // reset flag को clear करो ताकि next reset काम करे
    }
  }, [resetRating]);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage('');
    } else {
      setBtnDisabled(true);
      setMessage('Review must be at least 10 characters');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      if (rating === null) {
        setMessage('Please select a rating');
        return;
      }

      const newFeedback = { text, rating };

      if (feedbackEdit?.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      // Reset form
      setText('');
      setRating(null);
      setBtnDisabled(true);
      setMessage('');
      clearEdit();

      // Trigger reset in RatingSelect
      setResetRating(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
          How would you rate your service with us?
        </h2>
        <RatingSelect select={setRating} selected={rating} reset={resetRating} />

        <div className="input-group">
          <input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
