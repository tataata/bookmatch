import { useEffect } from 'react';
import { useLocation } from 'wouter';

const Discovering = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation('/bookswipe'); // Replace '/next-screen' with your target route
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [setLocation]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-black text-6xl font-semibold font-['Poppins'] mt-4">
        Discovering Books...
      </div>
      <div className="relative flex items-center justify-center mt-72">
        <div className="w-80 h-80 rounded-full border border-beige bg-beige bg-opacity-90 absolute animate-ping-slow"></div>
        <div className="w-52 h-52 rounded-full border border-beige bg-beige absolute animate-ping-slow delay-700"></div>
        <div className="w-36 h-36 flex items-center justify-center rounded-full border-4 border-blue bg-stone absolute">
        <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
              d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z"
              stroke="#E13244"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Discovering;
