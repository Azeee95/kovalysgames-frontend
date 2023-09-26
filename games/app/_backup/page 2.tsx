"use client"

import Image from 'next/image'
import Button from './button'
import AudioPlayer from './audio';
import Title from './title';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [titleText, setTitleText] = useState('Appuyez sur une touche pour commencer');
  const [level, setLevel] = useState(0);
  const [userPattern, setUserPattern] = useState([]);
  const [keyPressed, setKeyPressed] = useState(null);
  const [computerPattern, setComputerPattern] = useState([]);
  const [firsttime, setFirstTime] = useState(true);
  const [newSequenceStart, setNewSequenceStart] = useState(false);

  let nbClick = 0;

  const createComputerSequence = () => {
    const randomBtn = buttonsData[Math.floor(Math.random() * 4)].className;
    setComputerPattern((prevComputerPattern) => [...prevComputerPattern, randomBtn]);
    setTitleText(`Niveau ${(computerPattern.length + 1)}`);
    nbClick = 0;
    setNewSequenceStart(true);
  };
  
  const nextSequence = () => {
    console.log("Début d'une nouvelle séquence");
    createComputerSequence();
  };

  /*
  const nextSequence = () => {

    console.log("Début d'une nouvelle séquence");
    setNewSequenceStart(true);

    setTitleText(`Niveau ${(computerPattern.length+1)}`);

    let randomBtn = (buttonsData[Math.floor(Math.random() * 4)].className);
  
    // Utilisez une fonction pour mettre à jour l'état basé sur l'état actuel
    setComputerPattern((prevComputerPattern) => [...prevComputerPattern, randomBtn]);

  }; */

  console.log('New sequence ? ' + newSequenceStart);
  console.log('Computer Pattern : ' + computerPattern);

  const buttonsData = [
    { number: 1, className: 'btngreen', itemName: 'item1', soundfile: '/sounds/green.mp3'},
    { number: 2, className: 'btnred', itemName: 'item2', soundfile: '/sounds/red.mp3'},
    { number: 3, className: 'btnyellow', itemName: 'item3', soundfile: '/sounds/yellow.mp3' },
    { number: 4, className: 'btnblue', itemName: 'item4', soundfile: '/sounds/blue.mp3'},
  ];

  const buttons = buttonsData.map(data => {
    return <Button 
    className= {data.className} 
    soundfile={data.soundfile}
    onClick={() => handleButtonClick(data.className)}
    
    />; 
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      // La propriété event.key contient la touche enfoncée
      setKeyPressed(event.key);

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


  // ++ Appel de la fonction CheckAnswer

  const checkAnser = () => {

    console.log('Appel de check answer') 
    console.log('Computer Pattern : ' + computerPattern);
    console.log('User Pattern : ' + userPattern);

    for (let i = 0; i < computerPattern.length; i++) {

      if (computerPattern[i] !== userPattern[i]) {

        console.log('Echec')
        setNewSequenceStart(false)

      } else {

        console.log('Succes');

      }
    }
  

  }

  const handleButtonClick = (buttonClassName) => {
    if (!firsttime && newSequenceStart) {
      if (computerPattern[nbClick] === buttonClassName) {
        nbClick++;
        setUserPattern((prevUserPattern) => [...prevUserPattern, buttonClassName]);
      } else {
        console.log('Perdu');
        // Gérez la perte ici
      }
      if (nbClick === computerPattern.length) {
        createComputerSequence();
      }
    }
  };


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
