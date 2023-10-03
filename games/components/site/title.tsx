import React, { useRef, useState } from 'react';
import AudioPlayer from './audio';


export default function Title(props: any) {
    
    
    return (

      <h1 className={'level-title'}> {props.titletext} </h1>

    );
  }
  
  