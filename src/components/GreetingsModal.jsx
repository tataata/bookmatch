import { Link } from 'wouter';
const GreetingsModal  = () => {
    return (
        <>
        <div className="w-full h-screen flex items-center justify-center bg-stone">
            <div className="w-[770px] h-[600px] absolute top-[190px] rounded-3xl border border-beige bg-white flex flex-col justify-center items-center gap-3">

            <div className="text-center text-rose-600 text-6xl font-semibold font-'Poppins' leading-10">
                 You&apos;re ready!
                </div>

                <div className="text-center text-red text-2xl font-medium font-['Poppins'] mt-6 mb-4">
                Everything is set up, thank you!
                </div>
                <div className="flex items-center gap-4 mb-2">
                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#E13244"/>
                    </svg>
                    <div className="text-black w-96 text-xl font-bold font-'Lora' leading-8">
                Swipe Right 
                <span className="font-medium"> to like the book, get more details and save it in your library</span>
                </div>
                </div>
               
                <div className="flex items-center gap-4 mb-2">
                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#E13244"/>
                    </svg>
                <div className="text-black w-96 text-xl font-bold font-'Lora' leading-8">
                Swipe Left
                <span className="font-medium"> to skip to the next book</span>
                </div>
                </div>

                <div className="flex items-center gap-4 mb-1">
                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#E13244"/>
                    </svg>
                <div className="text-black w-96 text-xl font-medium font-'Lora' leading-8">
                Tap
                <span className="font-bold"> Info</span>
                <span className="font-medium"> for additional information about the book without swiping</span>
                </div>
                </div>

                <Link href="/discovering" className="px-36 py-4 bg-blue mt-6 rounded-full flex justify-center items-center gap-2.5 hover:bg-red active:bg-red active:ring active:ring-yellow">
                <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                continue
                </div>
                </Link>
            </div>
            </div>
        </>
    );
};

export default GreetingsModal;
