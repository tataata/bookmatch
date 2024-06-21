import { useState } from 'react';
import { Link } from 'wouter';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

const validateEmail = (event) => {
  setEmail(event.target.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(event.target.value)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }
};

const [password, setPassword] = useState('');
const [passwordError, setPasswordError] = useState('');

const validatePassword = (event) => {
  setPassword(event.target.value);
  if (event.target.value.length < 8) {
    setPasswordError('Password must be at least 8 characters long');
  } else {
    setPasswordError('');
  }
};

  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone">
      <div className="w-[760px] h-auto bg-white rounded-3xl border border-beige p-6 absolute top-[100px]">
      <div className="text-center mt-3 text-red text-4xl font-medium font-['Poppins']">Sign Up</div>
        <div className="text-center mt-5 mb-6">
          <span className="text-3xl font-regular font-['Poppins']">Welcome to </span>
          <span className="text-3xl font-semibold font-['Poppins']">BookMatch</span>
          <span className="text-3xl font-regular font-['Poppins']">!</span>
        </div>

        <form className="mx-32 space-y-4">
        <div className="mt-4 text-center">
        <Link href="/genres" className="text-black flex items-center gap-1 text-base font-medium absolute top-[36px] right-[30px] font-['Poppins'] hover:text-red">
          Skip
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_42_3302)">
          <path d="M2.8125 9H14.625M10.6875 13.5L15.1875 9L10.6875 4.5" stroke="#151515" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
          </g>
          <defs>
          <clipPath id="clip0_42_3302">
          <rect width="18" height="18" fill="white" transform="matrix(0 1 -1 0 18 0)"/>
          </clipPath>
          </defs>
          </svg>
          </Link>
        </div>

          <div>
            <label className="block text-black text-lg font-medium font-['Poppins'] mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full h-14 rounded-lg border border-black px-4 text-base font-normal font-['Lora'] placeholder-neutral-900/50 bg-stone focus:bg-white focus:outline-none focus:border-blue focus:ring-1
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red invalid:text-red
              focus:invalid:border-red focus:invalid:ring-red"
              placeholder="bookmatch@gmail.com"
              value={email}
              onChange={validateEmail}
            />
             {emailError && <div className="error-message text-red text-sm mt-1">{emailError}</div>}
          </div>

          <div>
            <label className="block text-black text-lg font-medium font-['Poppins'] mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              minLength="8"
              className="w-full h-14 bg-stone-100 rounded-lg border border-black px-4 text-base font-normal font-['Lora'] placeholder-neutral-900/50  bg-stone focus:bg-white focus:outline-none focus:border-blue focus:ring-1 
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red invalid:text-red
              focus:invalid:border-red focus:invalid:ring-red"
              placeholder="Password (8+ characters)"
              value={password}
              onChange={validatePassword}
            />
              {passwordError && <div className="error-message text-red text-sm mt-1">{passwordError}</div>}
          </div>
          </form>

          <div className="flex justify-center mt-5">
          <Link href="/welcomemodal" className="w-[460px] h-16 flex justify-center items-center  bg-blue rounded-full  text-stone text-2xl font-medium font-['Poppins'] capitalize  hover:bg-red active:bg-red active:ring active:ring-yellow">Continue</Link>
          </div>

          <div className="mt-4 ms-32">
              <span className="text-black text-lg font-normal font-['Poppins']">Already have an account?</span>
              <Link href="/login" className="text-blue text-lg font-semibold font-['Poppins'] underline ml-2 hover:text-red active:text-red ">Log In</Link>
            </div>

        <div className="my-8 text-center text-neutral-900/40 text-lg font-medium font-['Poppins']">OR</div>
        <div className="mb-6 text-center text-neutral-900/60 text-sm font-regular font-['Poppins'] leading-normal">
          By continuing I agree with the <Link href="/privacy-policy" className="text-neutral-900/80 underline hover:text-blue active:text-blue">Privacy Policy</Link>,
          <br />
          <Link href="/terms-conditions" className="text-neutral-900/80 underline hover:text-blue active:text-blue">Terms & Conditions</Link>
        </div>

        <div className="flex justify-center">
        <button className="w-[460px] h-16 flex items-center justify-center gap-2.5 bg-white rounded-full border border-black text-black text-lg font-medium font-['Poppins'] mb-4 hover:bg-neutral-900/20 active:bg-neutral-900/20">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.825 10.837H20.1V10.7996H12V14.3996H17.0864C16.3443 16.4953 14.3504 17.9996 12 17.9996C9.01785 17.9996 6.6 15.5818 6.6 12.5996C6.6 9.61746 9.01785 7.19961 12 7.19961C13.3766 7.19961 14.6289 7.71891 15.5825 8.56716L18.1281 6.02151C16.5207 4.52346 14.3706 3.59961 12 3.59961C7.02975 3.59961 3 7.62936 3 12.5996C3 17.5699 7.02975 21.5996 12 21.5996C16.9703 21.5996 21 17.5699 21 12.5996C21 11.9962 20.9379 11.4071 20.825 10.837Z" fill="#FFC107"/>
        <path d="M4.03809 8.41056L6.99504 10.5791C7.79514 8.59821 9.73284 7.19961 12.0004 7.19961C13.3769 7.19961 14.6293 7.71891 15.5828 8.56716L18.1285 6.02151C16.5211 4.52346 14.371 3.59961 12.0004 3.59961C8.54349 3.59961 5.54559 5.55126 4.03809 8.41056Z" fill="#FF3D00"/>
        <path d="M11.9996 21.5995C14.3243 21.5995 16.4366 20.7099 18.0336 19.2631L15.2481 16.906C14.3141 17.6163 13.1729 18.0005 11.9996 17.9995C9.65866 17.9995 7.671 16.5069 6.9222 14.4238L3.9873 16.6851C5.4768 19.5997 8.50171 21.5995 11.9996 21.5995Z" fill="#4CAF50"/>
        <path d="M20.825 10.8372H20.1V10.7998H12V14.3998H17.0864C16.7314 15.3972 16.092 16.2687 15.2472 16.9068L15.2486 16.9059L18.0341 19.263C17.837 19.4421 21 17.0998 21 12.5998C21 11.9964 20.9379 11.4073 20.825 10.8372Z" fill="#1976D2"/>
        </svg>
          Continue with Google
        </button>
        </div>

        <div className="flex justify-center">
        <button className="w-[460px] h-16 bg-black flex items-center justify-center gap-2.5 rounded-full border border-black text-stone text-lg font-medium font-['Poppins'] mb-4 hover:opacity-60 active:opacity-60">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4979 19.3179C16.5287 20.215 15.4705 20.0734 14.4518 19.6485C13.3738 19.2141 12.3848 19.1952 11.2475 19.6485C9.82335 20.2339 9.07173 20.064 8.2212 19.3179C3.39496 14.568 4.10702 7.33445 9.586 7.07004C10.9211 7.13614 11.8508 7.76884 12.6321 7.8255C13.7991 7.59886 14.9166 6.94728 16.1627 7.03227C17.6561 7.14559 18.7836 7.71218 19.5253 8.73205C16.4397 10.4979 17.1715 14.3791 20 15.4651C19.4363 16.8816 18.7044 18.2886 17.488 19.3274L17.4979 19.3179ZM12.5332 7.01338C12.3848 4.90754 14.1749 3.16998 16.232 3C16.5188 5.43636 13.9177 7.24946 12.5332 7.01338Z" fill="#F7F4F3"/>
        </svg>
          Continue with Apple
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
