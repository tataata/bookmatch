
import { Link } from 'wouter';
const WelcomeModal  = () => {
    return (
        <>
        <div className="w-full h-screen flex items-center justify-center bg-stone">
            <div className="w-[780px] h-[530px] absolute top-[210px] rounded-3xl border border-beige bg-white flex flex-col justify-center items-center ">
                <div className="text-center w-[580px] text-red text-7xl font-semibold font-['Poppins'] leading-tight">
                    Glad to see you with us!
                </div>
                <div className="mt-5 mb-6 text-center text-black text-3xl font-medium font-['Lora']">
                    Let your journey begin
                </div>

                <Link href="/genres" className="px-36 py-4 bg-blue mt-6 rounded-full flex justify-center items-center gap-2.5 hover:bg-red active:bg-red active:ring active:ring-yellow">
                <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                continue
                </div>
                </Link>
            </div>
            </div>
        </>
    );
};

export default WelcomeModal;
