// components/register.js

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from './navbar';
import countries from '../common/countries.json';
import Select from 'react-select'

export default function Signupform (props: any) {

const [newUser, setNewUser] = useState(false);

const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [country, setCountry] = useState('');
const [city, setCity] = useState('')
const [phonenumber, setPhonenumber] = useState('');

const cityOptions = [{}];

const handleCountrySelect = (e: any) => {

    console.log(e);

   const selectedCountry = countries.filter((f) => f.iso2 == e.value)
   let cities = selectedCountry[0].cities;

    cities.map((item) => {

        if (item !== '') {
    
            cityOptions.push({value: item, label: item});
    
        }
    
    })

    // setCountry(e.value);

}

const handleCitySelect = (e: any) => {

console.log(e)
// setCity(e.value);

}

const countryOptions = [{}];

countries.map((item) => {

    countryOptions.push({value: item.iso2, label: item.name})

})


  return (
    <main>

    <form action = {props.action} 
    className="bg-grey-lighter flex flex-col"
    onSubmit={(e) => { 
        console.log('Submited');
        setNewUser(true);

    }}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                
            <a className="no-underline border-b border-blue text-blue" href="../">

            <Image src = '/logo.png' width={100} height={100} alt='Logo Kovalys Connect' />

            </a>

                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">S&apos;inscrire</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 textzone1 inputform"
                        name="firstname"
                        placeholder="Prénom" 
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                        required/>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 textzone1 inputform"
                        name="lastname"
                        placeholder="Nom" 
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                        required/>

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4 inputform"
                        name="email"
                        placeholder="Adresse Email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 password inputform"
                        name="password"
                        placeholder="Mot de passe" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required/>

                    <div> 
                    
                    <Select options={countryOptions} onChange={(e) => handleCountrySelect(e)} className='block border border-grey-light w-full p-3 rounded mb-4 textzone1 inputform'/> 

                    </div>

                    <div> 

                    <Select onChange={(e) => handleCitySelect(e)} options={cityOptions} className='block border border-grey-light w-full p-3 rounded mb-4 textzone1 inputform'/>

                    </div>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 city inputform"
                        name="phonenumber"
                        placeholder="Numéro de téléphone" 
                        onChange={(e) => setPhonenumber(e.target.value)}
                        value={phonenumber}
                        required/>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded my-1 btn1"

                    >S&apos;inscrire</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        Le respect de votre vie privée est notre priorité. Consultez notre <span><a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Politiques de confidentialité
                        </a>  </span>
                        
                    </div>
                </div>

            </div>
        </form>

    </main>
  );
}
