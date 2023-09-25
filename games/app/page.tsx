"use client"

import Image from 'next/image'
import Button from './button'
import AudioPlayer from './audio';
import Title from './title';

import React, { useState } from 'react'

export default function Home() {

  let level = 0;

  const buttonsData = [
    { number: 1, className: 'btngreen', itemName: 'item1', soundfile: '/sounds/green.mp3'},
    { number: 2, className: 'btnred', itemName: 'item2', soundfile: '/sounds/red.mp3'},
    { number: 3, className: 'btnyellow', itemName: 'item3', soundfile: '/sounds/yellow.mp3' },
    { number: 4, className: 'btnblue', itemName: 'item4', soundfile: '/sounds/blue.mp3'},
  ];
 
  let userPattern = [];

  const buttons = buttonsData.map(data => {
    return <Button 
    className= {data.className} 
    soundfile={data.soundfile}
    onClick={() => handleButtonClick(data.className)} // Passer la fonction ici }
    
    />; 
  });



  const [titleText, setTitleText] = useState('Appuyez sur une touche pour commencer');

  const handleButtonClick = (buttonClassName) => {
    // Mettez à jour le texte du titre en fonction de la classe du bouton cliqué

    setTitleText(`Bouton ${buttonClassName} cliqué. Level ${level}`);

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
