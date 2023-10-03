
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from './navbar';

// Import Redux components

import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";


export default function Signinform () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch<AppDispatch>();
  
    const onClickLogin = async () => {

        if (password !== '') {

            const user = {
                email: username,
                password: password
            }

            const result = await fetch(`${process.env.backendserver}/users/signin`, {
                method : 'POST', 
                headers : {'Content-Type':'application/json'}, 
                body : JSON.stringify(user)
            })

            const datareceived = await result.json();

            if (datareceived == 'Accès autorisé') {

                    dispatch(logIn(username));

            } else {
                
                setError(datareceived);

            }
            
            }
         
        }

  
    const onClickLogout = () => {
  
      dispatch(logOut());
  
    }
  

  return (
    <main>

    <form 
    className="bg-grey-lighter  flex flex-col"
    >
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                
            <a className="no-underline border-b border-blue text-blue" href="../">

            <Image src = '/logo.png' width={100} height={100} alt='Logo Kovalys Connect' />

            </a>

                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Se connecter</h1>

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4 email forminput"
                        name="email"
                        placeholder="Adresse Email" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 password"
                        name="password"
                        placeholder="Mot de passe" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required/>

                    <p className='error'> {error} </p>

                    <button
                        type="button"
                        className="w-full text-center py-3 rounded my-1 btn1"
                        onClick={(e) => onClickLogin()}

                    >Se connecter</button>

                </div>

            </div>
        </form>

    </main>
  );
}
