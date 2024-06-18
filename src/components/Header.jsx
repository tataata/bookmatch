import PropTypes from 'prop-types';
import HeaderWelcome from "./HeaderWelcome.jsx";
import HeaderQuiz from "./HeaderQuiz.jsx";
import HeaderMenu from "./HeaderMenu.jsx";

const Header = ({ type }) => {
  switch (type) {
      case 'welcome':
          return <HeaderWelcome />
      case 'quiz':
          return <HeaderQuiz />
      case 'menu':
          return <HeaderMenu />
  }
};

Header.propTypes = {
  type: PropTypes.oneOf(['welcome', 'quiz', 'menu']).isRequired,
};

export default Header;

// const Header = ({ type }) => {
//   return (
//     <div className="w-full h-24 bg-stone flex items-center justify-between px-20 relative">
//       <div className="flex items-center">
//         <Link href="/firstscreen" className="left-[80px] top-[12px] absolute">
//           <img className="w-[108px] h-[52px]" />
//           <div className="text-center text-black text-lg font-semibold font-['Poppins']">BookMatch</div>
//         </Link>
//       </div>
//       <div className="flex items-center gap-12">
//         <div className="flex items-center gap-8">
//           {type !== 'menu' && (
//             <Link href="/how-it-works" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">How it works</Link>
//           )}
//           {type !== 'menu' && (
//             <Link href="/pricing" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">Pricing</Link>
//           )}
//           {type === 'menu' && (
//             <>
//               <Link href="/discover" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">Discover</Link>
//               <Link href="/library" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">My Library</Link>
//               <Link href="/search" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">Search</Link>
//             </>
//           )}
//         </div>
//         <div className="flex items-center gap-6">
//           {type !== 'menu' ? (
//             <>
//               <Link href="/login" className="text-blue text-xl font-semibold font-['Poppins'] hover:text-red active:text-red">Log In</Link>
//               <Link href="/signup" className="bg-blue text-stone text-lg font-medium tracking-wide font-['Poppins'] px-7 py-2.5 rounded-3xl hover:bg-red active:bg-red active:ring active:ring-yellow">
//                 Sign Up
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link href="/notifications" className="w-10 h-10 left-0 top-[6px] absolute flex-col justify-start items-start inline-flex">
//                 <svg className="hover:stroke-red active:stroke-blue" width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   {/* Notification icon SVG */}
//                 </svg>
//               </Link>
//               <Link href="/profile">
//                 <img className="w-9 h-9 border-2 border-yellow hover:border-red active:border-blue rounded-full ml-12" src="src/images/Avatar.png" alt="Avatar" />
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// Header.propTypes = {
//   type: PropTypes.oneOf(['welcome', 'quiz', 'menu']).isRequired,
// };

// export default Header;
