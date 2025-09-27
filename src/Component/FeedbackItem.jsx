// import { useContext } from 'react';
// import Card from './Shared/Card';
// import { FaTimes, FaEdit } from 'react-icons/fa';  // Added FaEdit here
// import FeedbackContext from '../Context/FeedbackContext';

// function FeedbackItem({ item }) {
//   const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

//   return (
//     <Card>
//       <div className='num-display'>{item.rating}</div>
//       <button onClick={() => deleteFeedback(item.id)} className='close'>
//         <FaTimes color='purple' />
//       </button>
//       <button onClick={() => editFeedback(item)} className='edit'>
//         <FaEdit color='purple' />
//       </button>
//       <div className='text-display'>{item.text}</div>
//     </Card>
//   );
// }

// export default FeedbackItem;







import { useContext } from 'react';
import Card from './Shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      {/* Rating circle */}
      <div className="num-display">{item.rating ?? '-'}</div>

      {/* Delete button */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      {/* Edit button */}
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>

      {/* Feedback text */}
      <div className="text-display">{item.text || 'No feedback text'}</div>
    </Card>
  );
}

export default FeedbackItem;
