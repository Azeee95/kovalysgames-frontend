'use client'

import React, { useRef, useState } from 'react';
import AudioPlayer from './audio';

export default function Button(props) {
  const audioRef = useRef(null);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {

    if (!props.firsttime) {

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
