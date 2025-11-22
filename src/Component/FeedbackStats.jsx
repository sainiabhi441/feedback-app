// import { useContext } from 'react';
// import FeedbackContext from '../Context/FeedbackContext';

// function FeedbackStats() {
//   const { feedback } = useContext(FeedbackContext);

//   if (!feedback || feedback.length === 0) {
//     return (
//       <div className="feedback-stats">
//         <h4>0 Reviews</h4>
//         <h4>Average Rating: 0</h4>
//       </div>
//     );
//   }

//   const total = feedback.reduce((acc, cur) => acc + cur.rating, 0);
//   const average = (total / feedback.length).toFixed(1);

//   return (
//     <div className="feedback-stats">
//       <h4>{feedback.length} Reviews</h4>
//       <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
//     </div>
//   );
// }

// export default FeedbackStats;







import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Reviews count
  const count = feedback.length;

  // Average rating
  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / count;

  average = average.toFixed(1).replace(/[.,]0$/, ""); // 1 decimal tak

  return (
    <div className="feedback-stats">
      <h4>{count} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
