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

  let level = 0;
  let nbClick = 0;

  const buttonsData = [
    { number: 1, className: 'btngreen', itemName: 'item1', soundfile: '/sounds/green.mp3'},
    { number: 2, className: 'btnred', itemName: 'item2', soundfile: '/sounds/red.mp3'},
    { number: 3, className: 'btnyellow', itemName: 'item3', soundfile: '/sounds/yellow.mp3' },
    { number: 4, className: 'btnblue', itemName: 'item4', soundfile: '/sounds/blue.mp3'},
  ];

  // Fonction NextSequence pour identifier le bouton sur lequel l'ordinateur clique

  const nextSequence = () => {

    setTitleText('Niveau : ' + level);
    let randomBtn = (buttonsData[Math.floor(Math.random() * 4)].className);

    setComputerPattern([...computerPattern, randomBtn]);
    // setUserPattern([]);

    level++;

  }
  
  // Fonction pour démarrer le jeu

  const clickedButtons = (name) => {

    nbClick++;
    console.log( "Nombre de clicks : " + nbClick);

    setUserPattern([...userPattern, name]);

    if (nbClick == computerPattern.length) {

      if (checkAnswer()) {
            
        setTimeout(function () { 
            nextSequence();
        }, 1000);

        setUserPattern([]);
        nbClick = 0;

    } else {

      console.log('Perdu');

      setTimeout(function () { 
        location.reload();
    }, 1000);

    }
   
  } 

}

  console.log('Computer Pattern : ' + computerPattern);
  console.log('User Pattern : ' + userPattern);

  // Vérification de la réponse de l'utilisateur
  
  const checkAnswer = () => {

    for (var i = 0; i < computerPattern.length; i++) {

    if (computerPattern[i] == userPattern[i]) {

        console.log("[" + i + "] " + "+++++ Equal => " + " Game Status : " + gameStatus);    

    } else { 

        setGameStatus(false);
        console.log("[" + i + "] " + "--- Non Equal => " + " Game Status : " + gameStatus);

    }

} return gameStatus;

  }

  if (computerPattern.length > 0) {

    setTimeout(() => { 

      setTitleText('Niveau : ' + computerPattern.length);

      }, 300);

  }


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

    // Ajoutez un écouteur d'événement pour "keydown"
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
