// import React from 'react'


// import Card from '../Component/Shared/Card'

// function AboutPage() {
//     return (
//         <Card>
//             <div className='about'>
//                 <h1>About This Project</h1>
//                 <p>This is a React app to leave feedback for a product or service</p>
//                 <p>Version: 1.0.0</p>
//                 <p>
//                     <a href='/'>Back To Home</a>
//                 </p>
//             </div>
//         </Card>
//     )
// }

// export default AboutPage






// import React from 'react'
// import Card from '../Component/Shared/Card'
// import { Link } from 'react-router-dom'  // ✅ ये इम्पोर्ट ज़रूरी है

// function AboutPage() {
//     return (
//         <Card>
//             <div className='about'>
//                 <h1>About This Project</h1>
//                 <p>This is a React app to leave feedback for a product or service</p>
//                 <p>Version: 1.0.0</p>
//                 <p>
//                     <Link to='/'>Back To Home</Link> {/* ✅ React Router Link */}
//                 </p>
//             </div>
//         </Card>
//     )
// }

// export default AboutPage




// import React from 'react'
// import Card from '../Component/Shared/Card'
// import { Link } from 'react-router-dom'  // ✅ ये इम्पोर्ट ज़रूरी है

// function AboutPage() {
//     return (
//         <Card>
//             <div className='about'>
//                 <h1>About This Project</h1>
//                 <p>This is a React app to leave feedback for a product or service</p>
//                 <p>Version: 1.0.0</p>
//                 <p>
//                     <Link to='/' className='underline-link'>Back To Home</Link> {/* ✅ React Router Link with underline */}
//                 </p>
//             </div>
//         </Card>
//     )
// }

// export default AboutPage









import React from 'react';
import Card from '../Component/Shared/Card';
import { Link } from 'react-router-dom';

// function AboutPage() {
//     return (
//         <Card>
//             <div className='about'>
//                 <h1>About This Project</h1>
//                 <p>This is a React app to leave feedback for a product or service</p>
//                 <p>Version: 1.0.0</p>
//                 <p>
//                     <a href='/'>Back To Home</a>
//                 </p>

//                 {/* CSS directly inside the component */}
//                 <style>
//                     {`
//                         .about a {
//                             color: blue;
//                             text-decoration: none;
//                         }

//                         .about a:hover {
//                             text-decoration: underline;
//                         }
//                     `}
//                 </style>
//             </div>
//         </Card>
//     );
// }

// export default AboutPage;





function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to='/' style={{ color: 'blue', textDecoration: 'none' }}>Back To Home</Link>
                </p>
            </div>
        </Card>
    );
}

export default AboutPage;
