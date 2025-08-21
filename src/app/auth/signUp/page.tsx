import Link from 'next/link'
import { Poppins } from 'next/font/google'
import {SignUpForm} from "../../../auth/components/signUpForm"

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})








export default function SignUp(){
    return(
        <div>
<div className="w-full h-dvh bg-white lg:w-[400px] lg:flex lg:m-auto">
            <div lang="en" className={poppins.className} >
                            
            {/* Logo */}

            <div className='h-max w-full flex justify-center'>
                <img className='w-2/5 mt-[5%] ' src="/logo.png" alt="Logo" />
            </div>
            
            {/* sign up section and login page link */}
            
            <div className='h-max w-full flex flex-col justify-center mt-[5%] text-center'>
                <h1 className='text-5xl font-bold'>Sign up</h1>
                <p className='mt-[7%]'>Have an account? <Link href="/auth/signIn">Sign in</Link></p>
            </div>

            {/* User data field like email and ... */}

            <div className='h-max w-full mt-[7%]'>

                {/* signUp Form component  */}

                <SignUpForm />

            </div>

            {/* or countinu with */}

            <div className='h-max w-full flex justify-center mt-7'>
                <div className='h-max w-4/5 flex items-center gap-2 '>
                    <hr className=" flex-grow border-t text-black" />
                    <span className="text-black text_shadow">OR</span>
                    <hr className=" flex-grow border-t text-black" />
                </div>
            </div>

            {/* Sign in with google or facebook */}

            <div className='h-max w-full flex flex-col items-center pt-7'>
                <button className='flex shadow items-center gap-2 pl-2 w-4/5 h-12 border border-gray-300 rounded-md'>
                    <svg className='w-6' viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
                    <p className='text-black text-md' >Sign up with google</p>
                </button>
                <button className='flex shadow items-center gap-2 pl-2 w-4/5 h-12 border border-gray-300 rounded-md mt-7'>
                    <svg className='w-6' viewBox="38.657999999999994 12.828 207.085 207.085" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" fill="#3c5a9a"></path></g></svg>
                    <p className='text-black text-md theme' >Sign up with facebook</p>
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}