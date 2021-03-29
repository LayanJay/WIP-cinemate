// import React, { useState, useEffect } from "react"
// import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp"

// function ScrollToTop({ showBelow }) {
//   const [show, setShow] = useState(showBelow ? false : true)

//   const handleScroll = () => {
//     if (window.pageYOffset > showBelow) {
//       if (!show) setShow(true)
//     } else {
//       if (show) setShow(false)
//     }
//   }

//   const handleClick = () => {
//     window[`scrollTo`]({ top: 0, behavior: `smooth` })
//   }

//   useEffect(() => {
//     if (showBelow) {
//       window.addEventListener("scroll", handleScroll)
//       return () => window.removeEventListener("scroll", handleScroll)
//     }
//   })
//   return (
//     <div>
//       {show && (
//         <button
//           onClick={handleClick}
//           className="fixed bottom-8 right-6 z-50 bg-blue-600 text-white hover:bg-blue-900 transition ease-in rounded-3xl shadow-xl p-3 focus:outline-none"
//         >
//           <FaArrowUp size="1.5em" />
//         </button>
//       )}
//     </div>
//   )
// }

// export default ScrollToTop
