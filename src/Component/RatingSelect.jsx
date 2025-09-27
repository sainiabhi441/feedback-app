// import { useState, useContext, useEffect } from 'react';
// import FeedbackContext from '../Context/FeedbackContext';

// function RatingSelect({ select }) {
//   const [selected, setSelected] = useState(10);
//   const { feedbackEdit } = useContext(FeedbackContext);

//   useEffect(() => {
//     setSelected(feedbackEdit.item.rating);
//   }, [feedbackEdit]);

//   const handleChange = (e) => {
//     const value = Number(e.currentTarget.value);
//     setSelected(value);  // update local state immediately
//     select(value);        // propagate selection up to parent
//   };

//   return (
//     <ul className='rating'>
//       {[...Array(10)].map((_, i) => (
//         <li key={i + 1}>
//           <input
//             type="radio"
//             id={`num${i + 1}`}              // ✅ fix
//             name="rating"
//             value={i + 1}
//             onChange={handleChange}
//             checked={selected === i + 1}
//           />
//           <label htmlFor={`num${i + 1}`}>{i + 1}</label>   {/* ✅ fix */}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default RatingSelect;




import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    // Safe check so that red underline / error na aaye
    if(feedbackEdit.edit ===true && feedbackEdit.item.rating){
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    const value = Number(e.currentTarget.value);
    setSelected(value);   // local state update
    select(value);        // parent ko notify karo
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
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
