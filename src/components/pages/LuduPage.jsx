// import React, { useState } from 'react';
// import '../../styles/Ludu.css'
// function Dice() {
//   const [face, setFace] = useState(1);
// 
//   const rollDice = () => {
//     const randomFace = Math.floor(Math.random() * 6) + 1;
//     setFace(randomFace);
//   };
// 
//   return (
//     <div className="dice">
//       <div className={`face face-${face}`}>
//         {face === 1 && <div className="dot center"></div>}
//         {face === 2 && (
//           <>
//             <div className="dot top-left"></div>
//             <div className="dot bottom-right"></div>
//           </>
//         )}
//         {face === 3 && (
//           <>
//             <div className="dot top-left"></div>
//             <div className="dot center"></div>
//             <div className="dot bottom-right"></div>
//           </>
//         )}
//         {face === 4 && (
//           <>
//             <div className="dot top-left"></div>
//             <div className="dot top-right"></div>
//             <div className="dot bottom-left"></div>
//             <div className="dot bottom-right"></div>
//           </>
//         )}
//         {face === 5 && (
//           <>
//             <div className="dot top-left"></div>
//             <div className="dot top-right"></div>
//             <div className="dot center"></div>
//             <div className="dot bottom-left"></div>
//             <div className="dot bottom-right"></div>
//           </>
//         )}
//         {face === 6 && (
//           <>
//             <div className="dot top-left"></div>
//             <div className="dot top-right"></div>
//             <div className="dot center-left"></div>
//             <div className="dot center-right"></div>
//             <div className="dot bottom-left"></div>
//             <div className="dot bottom-right"></div>
//           </>
//         )}
//       </div>
//       <button onClick={rollDice}>Roll Dice</button>
//     </div>
//   );
// }
// 
// export default Dice;
// 