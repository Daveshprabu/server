// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Layout from './Layout'; 
// import Counter from './Container';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contacts" element={<Contact />} /> 
//           <Route path="count" element={<Counter />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react'
import Example from './Effect'


export default function App() {
  return (
    <div>
      <Example/>
    </div>  
    )
}

