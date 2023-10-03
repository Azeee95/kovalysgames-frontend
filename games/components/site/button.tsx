'use client'

import React, { useRef, useState, useEffect } from 'react';
import AudioPlayer from './audio';

export default function Button(props: any) {

 // const audioRef = useRef<null>(null)

 const audioRef = useRef <HTMLAudioElement>(null);
  
 const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {

    if (props.choosenBtn === props.className) {
      
      setIsPressed(true);

      setTimeout(() => {
        setIsPressed(false);
      }, 300);
    }
  }, [props.choosenBtn, props.className]);

  
  const handleClick = () => {

    if (!props.firsttime && audioRef.current !== null) {

      audioRef.current.play();
      setIsPressed(true);
  
      // Retire la classe .pressed après 300 millisecondes
      setTimeout(() => {
        setIsPressed(false);
      }, 300);
  
      props.clickedButtons(props.className);

    }
    
  };

  const buttonClassName = `${props.className} ${isPressed ? 'pressed' : ''}`;

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <AudioPlayer audioSrc={props.soundfile} audioRef={audioRef} />
    </div>
  );
}

