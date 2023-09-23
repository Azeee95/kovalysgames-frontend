import Image from 'next/image'

export default function Button(props) {

    const classList = [props.itemName, props.className];


    return (
      <div className = {props.className}>
        
      <div type="button"></div>

      </div>
  
    )
  }
  