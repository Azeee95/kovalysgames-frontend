import React, { useEffect } from 'react';

const AudioPlayer = ({ audioSrc, audioRef }: {audioSrc: any, audioRef: any}) => {
  useEffect(() => {
    if (audioSrc) {
      audioRef.current.src = audioSrc;
    }
  }, [audioSrc, audioRef]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayer;
