import React, { useEffect } from 'react';

const AudioPlayer = ({ audioSrc, audioRef }) => {
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
