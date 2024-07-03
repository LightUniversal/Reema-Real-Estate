import React, { useState } from 'react'
import { auth } from "../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEnvelope } from "react-icons/fa"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




  return (
    <div>
        <form>
            <div className="email">
                <label htmlFor="email">Email <FaEnvelope /> </label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' />
            </div>
            <div className="submit">
                <button type="submit" className=' px-4 py-3 bg-blue-400 text-white'>
                    Submit 
                </button>
            </div>
        </form>
    </div>
  )
}

export default Login