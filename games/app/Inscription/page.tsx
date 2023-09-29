// components/register.js

'use client'

import Image from 'next/image';
import Link from 'next/link';
import Registerform from '../../components/site/registerform';
import Navbar from '@/components/site/navbar';


export default function Register() {
  
  /*
  async function handleNewRegistration(formData : Any) {

    "use server";

    const fullname = formData.getAll('fullname');
    const email = formData.getAll('email');
    const password = formData.getAll('password');
    const city = formData.getAll('city');

    console.log(`Fullname : ${fullname} - Email : ${email} - Password : ${password} - City : ${city}`);

    const data = {'fullname' : {fullname}, 'email' : {email}, 'password' : {password}, 'city' : {city}}

  } 
*/

  return (

    <main>

        <Navbar />
        
        <Registerform />

    </main>
  );
}
