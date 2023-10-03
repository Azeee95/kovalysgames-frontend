// components/register.js

'use client'

import Image from 'next/image';
import Link from 'next/link';
import Signupform from '../../components/site/signupform';
import Navbar from '@/components/site/navbar';
import Footer from '@/components/site/footer';


export default function Register() {
  

  return (

    <main>

        <Navbar />

        <Signupform />

        <Footer />

    </main>
  );
}
