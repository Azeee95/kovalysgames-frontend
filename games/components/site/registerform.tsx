// components/register.js

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CountrySelect from '../common/countries'
import Navbar from './navbar';


export default function Registerform (props) {

const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    

        fetch('http://localhost:3002/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

  }, [newUser])

  
  return (
    <main>

    <form action = {props.action} 
    className="bg-grey-lighter min-h-screen flex flex-col"
    onSubmit={(e) => { 
        console.log('Submited');
        setNewUser(true);

    }}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                
            <a className="no-underline border-b border-blue text-blue" href="../">

            <Image src = '/logo.png' width={100} height={100} alt='Logo Kovalys Connect' />

            </a>

                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">S'inscrire</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 textzone1 fullname"
                        name="fullname"
                        placeholder="Nom complet" required/>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 email"
                        name="email"
                        placeholder="Adresse Email" required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 password"
                        name="password"
                        placeholder="Mot de passe" required/>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 city"
                        name="city"
                        placeholder="Ville de résidence" required/>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded my-1 btn1"

                    >S'inscrire</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        Le respect de votre vie privée est notre priorité. Consultez notre <span><a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Politiques de confidentialité
                        </a>  </span>
                        
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Déjà inscrit ? <span><a className="no-underline border-b border-blue text-blue" href="../Connexion/">
                        Se connecter !
                    </a></span>

                </div>
            </div>
        </form>

    </main>
  );
}
