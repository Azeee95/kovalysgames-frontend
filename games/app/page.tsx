import Image from 'next/image'
import Button from './button'

export default function Home() {

  const buttonsData = [
    { number: 1, className: 'btngreen', itemName: 'item1'},
    { number: 2, className: 'btnred', itemName: 'item2'},
    { number: 3, className: 'btnyellow', itemName: 'item3' },
    { number: 4, className: 'btnblue', itemName: 'item4' },
  ];
 
  const buttons = buttonsData.map(data => {
    return <Button className= {data.className} />;
  });


  return (
    <main>
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400&family=Press+Start+2P&display=swap" rel="stylesheet"></link>

      </head>

      <header className={'header'} >

        <h1 className={'level-title'}>Press A Key to Start</h1>

      </header>

    <div className={"container"}>

    {buttons}

    </div>

    </main>


  )
}
