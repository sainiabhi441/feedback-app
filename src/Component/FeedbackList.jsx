// import FeedBackItem from './FeedbackItem';
// import PropTypes from 'prop-types';
// import { motion, AnimatePresence } from 'framer-motion';

// function FeedBackList({ feedback, handleDelete }) {
//     if (!feedback || feedback.length === 0) {
//         return <p>No Feedback Yet</p>;
//     }

//     return (
//         <div className='feedback-list'>
//             <AnimatePresence>
//                 {feedback.map((item) => (
//                     <motion.div
//                         key={item.id}
//                         intial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opecity: 0 }}>
//                         <FeedBackItem
//                             item={item}
//                             handleDelete={handleDelete}
//                         />
//                     </motion.div>

//                 ))}
//             </AnimatePresence>
//         </div>
//     );
// }

// FeedBackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//                 .isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         }),
//     ).isRequired,
//     handleDelete: PropTypes.func.isRequired,
// };

// export default FeedBackList;






import FeedBackItem from './FeedbackItem';
// import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedBackList({  handleDelete }) {
    const {feedback}=useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedBackItem
                            item={item}
                            handleDelete={handleDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}




export default FeedBackList;
