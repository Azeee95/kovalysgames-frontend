
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CountrySelect from '../common/countries'
import Navbar from './navbar';
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";


export default function Loginform () {

    const [username, setUsername] = useState('');

    const dispatch = useDispatch<AppDispatch>();
  
    const onClickLogin = () => {
  
      dispatch(logIn(username));
  
  
    }
  
    const onClickLogout = () => {
  
      dispatch(logOut());
  
    }
  

  return (
    <main>

    <form 
    className="bg-grey-lighter min-h-screen flex flex-col"
    >
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                
            <a className="no-underline border-b border-blue text-blue" href="../">

            <Image src = '/logo.png' width={100} height={100} alt='Logo Kovalys Connect' />

            </a>

                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Se connecter</h1>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 email"
                        name="email"
                        placeholder="Adresse Email" 
                        onChange={(e) => setUsername(e.target.value)}
                        required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 password"
                        name="password"
                        placeholder="Mot de passe" required/>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded my-1 btn1"
                        onClick={onClickLogin}

                    >Se connecter</button>

                </div>

                <div className="text-grey-dark mt-6">
                    Pas encore de compte ? <span><a className="no-underline border-b border-blue text-blue" href="../Inscription/">
                        S'inscrire
                    </a></span>

                </div>
            </div>
        </form>

    </main>
  );
}
