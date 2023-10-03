'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Navbar from "@/components/site/navbar";
import Loginform from "@/components/site/signinform";
import Footer from "@/components/site/footer";

export default function Login() {

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

        <Navbar />

        <Loginform />

        <Footer />

      </main>
    )
  }
  