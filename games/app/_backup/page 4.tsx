"use client"

import Image from 'next/image'
import Button from './button'
import AudioPlayer from './audio';
import Title from './title';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [titleText, setTitleText] = useState('Appuyez sur une touche pour commencer');
  const [userPattern, setUserPattern] = useState([]);
  // const [keyPressed, setKeyPressed] = useState(null);
  const [computerPattern, setComputerPattern] = useState([]);
  const [firsttime, setFirstTime] = useState(true);
  const [gameStatus, setGameStatus] = useState(true)

  const [nbClick, setNbClick] = useState(0);

  let sequenceLenght = 5;

  const buttonsData = [
    { number: 1, className: 'btngreen', soundfile: '/sounds/green.mp3'},
    { number: 2, className: 'btnred', soundfile: '/sounds/red.mp3'},
    { number: 3, className: 'btnyellow', soundfile: '/sounds/yellow.mp3' },
    { number: 4, className: 'btnblue', soundfile: '/sounds/blue.mp3'},
  ];

  // Fonction NextSequence pour identifier le bouton sur lequel l'ordinateur clique

  const nextSequence = () => {

    let randomBtn = (buttonsData[Math.floor(Math.random() * 4)].className);

    setComputerPattern([...computerPattern, randomBtn]);
    // setUserPattern([]);

    setTitleText('Niveau : ' + computerPattern.length);
    setNbClick(0);
    setUserPattern([]);

  }

  // Fonction pour démarrer le jeu

  console.log('Computer Pattern : ' + computerPattern);

  const clickedButtons = (name) => {

    setUserPattern([...userPattern, name]);
    setNbClick(nbClick + 1)

    if (nbClick+1 == computerPattern.length) {

      setTimeout (() => {

        nextSequence();

      }, 300 )

    } 

   
  } 

  console.log( "Nombre de clicks : " + nbClick);

  console.log('User Pattern : ' + userPattern);


  const buttons = buttonsData.map(data => {
    return <Button 
    className= {data.className} 
    soundfile={data.soundfile}
    clickedButtons = {clickedButtons}
    firsttime = {firsttime}

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

  return (
    <main>
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400&family=Press+Start+2P&display=swap" rel="stylesheet"></link>

      </head>

    <div className='headerlogo bgcolor1'>

      <img src = './logolongblanc.png' className='logolongblanc' />

      <p className='seconnecter'> Comment jouer ? </p>
      <p className='sinscrire'> S'inscrire </p>
      <p className='seconnecter'> Se connecter  </p>

    </div>

      <header className={'header'} >

      {title}

      </header>

    <div className={"btn-container"}>

    {buttons}

    </div>

    </main>


  )
}
