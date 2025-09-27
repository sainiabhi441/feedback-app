




// import React, { useState, useContext, useEffect } from 'react';
// import Card from './Shared/Card';
// import Button from './Shared/button';
// import RatingSelect from './RatingSelect';
// import FeedbackContext from '../Context/FeedbackContext';

// function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [rating, setRating] = useState(10);
//   const [btnDisabled, setBtnDisabled] = useState(true);
//   const [message, setMessage] = useState('');
//   const { addFeedback, feedbackEdit, updateFeedback, clearEdit } = useContext(FeedbackContext);

//   useEffect(() => {
//     if (feedbackEdit.edit === true) {
//       setBtnDisabled(false);
//       setText(feedbackEdit.item.text);
//       setRating(feedbackEdit.item.rating);
//     }
//   }, [feedbackEdit]);

//   const handleTextChange = (e) => {
//     const inputText = e.target.value;
//     setText(inputText);
//     if (inputText.trim().length >= 10) {
//       setBtnDisabled(false);
//       setMessage('');
//     } else {
//       setBtnDisabled(true);
//       setMessage('Review must be at least 10 characters');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (text.trim().length >= 10) {
//       const newFeedback = { text, rating };

//       if (feedbackEdit.edit === true) {
//         updateFeedback(feedbackEdit.item.id, newFeedback);
//       } else {
//         addFeedback(newFeedback);
//         clearEdit();  // Clear edit mode after adding new feedback
//       }

//       setText('');
//       setRating(10);
//       setBtnDisabled(true);
//       setMessage('');
//     }
//   };

//   return (
//     <Card>
//       <form onSubmit={handleSubmit}>
//         <RatingSelect select={setRating} selected={rating} />
//         <div className="input-group">
//           <input
//             type="text"
//             value={text}
//             placeholder="Write a review"
//             onChange={handleTextChange}
//           />
//           <Button type="submit" isDisabled={btnDisabled}>
//             Send
//           </Button>
//         </div>
//         {message && <div className="message">{message}</div>}
//       </form>
//     </Card>
//   );
// }

// export default FeedbackForm;









import React, { useState, useContext, useEffect } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);   // ⭐ default 0 rakha
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback, clearEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit?.edit === true && feedbackEdit.item) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text || "");
      setRating(feedbackEdit.item.rating || 0); // edit mode me rating set hoga
    }
  }, [feedbackEdit]);

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
      const newFeedback = { text, rating };

      if (feedbackEdit?.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      // ⭐ Reset form
      setText('');
      setRating(0);  // rating reset ho gaya
      setBtnDisabled(true);
      setMessage('');
      clearEdit();
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px'}}>
          How would you rate your service with us?
      </h2>
        {/* RatingSelect ko selected={rating} bhejna jaruri hai */}
        <RatingSelect select={setRating} selected={rating} />

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
