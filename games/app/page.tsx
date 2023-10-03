"use client"

import Image from 'next/image'
import Button from '../components/site/button'
import AudioPlayer from '../components/site/audio';
import Title from '../components/site/title';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Navbar from '../components/site/navbar';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Footer from '@/components/site/footer';

// Import Kovalys Connect components
import Login from '@/app/Connexion/page'
import Register from './Inscription/page';
import Signupform from '@/components/site/signupform';
import Signinform from '@/components/site/signinform';

// Import Redux components 

import { useAppSelector } from '@/redux/store'
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";


export default function Home() {

  const [titleText, setTitleText] = useState('Simon Game by Kovalys');
  const [userPattern, setUserPattern] = useState([]);
  const [computerPattern, setComputerPattern] = useState([]);
  const [firsttime, setFirstTime] = useState(true);
  const [gameOver, setGameOver] = useState(false)
  const [choosenBtn, setChoosenBtn] = useState('')

  const [nbClick, setNbClick] = useState(0);

  const buttonsData = [
    { number: 1, className: 'btngreen', soundfile: '/sounds/btngreen.mp3'},
    { number: 2, className: 'btnred', soundfile: '/sounds/btnred.mp3'},
    { number: 3, className: 'btnyellow', soundfile: '/sounds/btnyellow.mp3' },
    { number: 4, className: 'btnblue', soundfile: '/sounds/btnblue.mp3'},
  ];

  // Initialisation des fonctions Redux

  //const [username, setUsername] = useState('');

  const username = useAppSelector((state) => state.authReducer.value.username)
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  const [signup, SetSignup] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {

    dispatch(logIn(username));

  }

  const onClickLogout = () => {

    dispatch(logOut());

  }

  // Fonction NextSequence pour identifier le bouton sur lequel l'ordinateur clique

  const nextSequence = () => {

    let randomBtn = (buttonsData[Math.floor(Math.random() * 4)].className);

    setComputerPattern([...computerPattern, randomBtn]);
    // setUserPattern([]);

    setTitleText('Niveau : ' + computerPattern.length);
    setNbClick(0);
    setUserPattern([]);
    playSound(randomBtn);
    setChoosenBtn(randomBtn);

    setTimeout(() => {
      setChoosenBtn('');
      // Reste de votre code pour continuer la séquence
    }, 300);

  }

  const playSound = async (buttonClassName) => {
    const audio = new Audio(`/sounds/${buttonClassName}.mp3`);
    await audio.play();
  };

  // Fonction pour démarrer le jeu

  console.log('Computer Pattern : ' + computerPattern);

  const clickedButtons = (name) => {

    setUserPattern([...userPattern, name]);
    setNbClick(nbClick + 1)

    if (nbClick == ((computerPattern.length)-1)) {

      setTimeout (() => {

        nextSequence();

      }, 300 )

    } else {

      if (name !== computerPattern[nbClick]) {

       setTitleText('Game over');
       playSound('wrong')
       setGameOver(true);
       setComputerPattern([]);
       setFirstTime(true);
       
       setTimeout(() => { 
        
        setGameOver(false);
          
        }, 500);

      } 

    } 

   
  } 

  console.log( "Nombre de clicks : " + nbClick);

  console.log('User Pattern : ' + userPattern);


  const buttons = buttonsData.map((data, i) => {

    //const buttonClassName = `${data.className} ${choosenBtn === data.className ? 'pressed' : ''}`

    return <Button 
    className= {data.className} 
    soundfile={data.soundfile}
    clickedButtons = {clickedButtons}
    firsttime = {firsttime}
    choosenBtn = {choosenBtn}
    key = {i}

    />; 
  });

  // Démarrage du jeu quand le clavier est appuyé la première fois 

  useEffect(() => {
    const handleKeyDown = (event) => {
      // La propriété event.key contient la touche enfoncée
      // setKeyPressed(event.key);

      if (firsttime) { 

        console.log("Key pressed first time. Value : " + firsttime);

        setFirstTime(false);

        setTimeout(() => { 
        
        nextSequence();
          
        }, 300);

    }

    };

    // Ajouter un écouteur d'événement pour "keydown"
    window.addEventListener('keydown', handleKeyDown);

    // Supprimer l'écouteur lorsque le composant est démonté
    return () => {
          window.removeEventListener('keydown', handleKeyDown);
        
        };
            
  }, [firsttime]);

  let title = <Title titletext = {titleText} />

  const bodyClass = `${gameOver ? 'game-over' : ''}`

  const features = [
    {
      name: 'Êtape 1 : ',
      description:
        'Appuyez sur une touche pour commencer le jeu.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Êtape 2 : ',
      description: "Mémorisez la séquence de l'ordinateur. Si le bouton rouge clignotte, vous devez chosir ce bouton. Au prochain tour, il faudra appuyer sur le premier bouton de l'ordinateur et le suivant.",
      icon: LockClosedIcon,
    },
    {
      name: 'Êtape 3',
      description: "À chaque tour, reproduisez la séquence de l'ordinateur depuis le début du jeu. Si vous ratez la séquence, game over ! ",
      icon: ServerIcon,
    },
  ]

  return (

    <main className={bodyClass} >

    <Navbar />
    

    {/* Page principale pour le jeu - Apparaît uniquement si l'utilisateur est authentifié*/}

    {((isAuth == true) && 

    <div>

  
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              {title}

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className={"btn-container"}>

          {buttons}

          </div>
          
        </div>
      </div>
    </div>

    </div>

    )}

    {/*  Partie Formulaire Sign in*/}

    {(((isAuth == false) && (signup == false)) && 

    <div>
      
    <Signinform />
    
    </div>

    )}
    
    {(((isAuth == false) && (signup == false)) && 

    <p className='textebasformulaire'> Pas encore de compte ? <span onClick={(e) => 
        {
          SetSignup(true);
        
        }}> <a href = '#'> S&apos;inscrire </a> </span> </p>

    )}
    
    {/* Partie Sign up form */}

    {((signup == true) && 

    <div>

    <Signupform />

    </div>

    )}

    {((signup == true) && 

      <p className='textebasformulaire'> Déjà inscrit ? <span onClick={(e) => 
        {
          SetSignup(false);
        
        }}> <a href='#'> Se connecter ! </a> </span> </p>

    )}


    <Footer />

    </main>


  )
}
