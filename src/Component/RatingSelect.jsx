

import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../Context/FeedbackContext';



function RatingSelect({ select, reset, selected }) {
  const [selectedRating, setSelectedRating] = useState(null);
  const { feedbackEdit } = useContext(FeedbackContext);

  // जब parent से selected value आए तो local state update करो
  useEffect(() => {
    setSelectedRating(selected);
  }, [selected]);

  // Edit mode में rating set करना
  useEffect(() => {
    if (feedbackEdit?.edit === true && feedbackEdit.item?.rating !== undefined) {
      setSelectedRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // Reset होने पर clear selected rating
  useEffect(() => {
    if (reset === true) {
      setSelectedRating(null);
    }
  }, [reset]);

  const handleChange = (e) => {
    const value = Number(e.currentTarget.value);
    setSelectedRating(value);
    if (select) {
      select(value);
    }
  };

  return (
    <ul className="rating">
      {[...Array(10)].map((_, i) => (
        <li key={i + 1}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selectedRating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
