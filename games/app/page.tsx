"use client"

import Image from 'next/image'
import Button from './button'
import AudioPlayer from './audio';
import Title from './title';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [titleText, setTitleText] = useState('Appuyez sur une touche pour commencer');
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


  const buttons = buttonsData.map(data => {

    //const buttonClassName = `${data.className} ${choosenBtn === data.className ? 'pressed' : ''}`

    return <Button 
    className= {data.className} 
    soundfile={data.soundfile}
    clickedButtons = {clickedButtons}
    firsttime = {firsttime}
    choosenBtn = {choosenBtn}
    key = {data.number}

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


  return (

    <main className={bodyClass} >

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
