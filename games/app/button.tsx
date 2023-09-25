'use client'

import React, { useRef, useState } from 'react';
import AudioPlayer from './audio';

export default function Button(props) {
  const audioRef = useRef(null);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    audioRef.current.play();
    setIsPressed(true);

    // Retire la classe .pressed après 300 millisecondes
    setTimeout(() => {
      setIsPressed(false);
    }, 300);

    // Appelle la fonction onClick passée en prop depuis page.tsx
    if (props.onClick) {
        props.onClick();
      }

  };

  const buttonClassName = `${props.className} ${isPressed ? 'pressed' : ''}`;


  return (
    <div className={buttonClassName} onClick={handleClick}>
      <AudioPlayer audioSrc={props.soundfile} audioRef={audioRef} />
    </div>
  );
}
