"use client"

import React, { useRef } from 'react';
import AudioPlayer from './audio';

export default function Button(props) {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className={props.className} onClick={playAudio}>
      <AudioPlayer audioSrc={props.soundfile} audioRef={audioRef} />
    </div>
  );
}
