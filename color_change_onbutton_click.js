import {useState} from 'react';

export default function MyApp() {
  const [color,setColor]=useState('');
  const diffcolors=['button-red','button-blue','button-green'];
  const [count,setCount]=useState(0);
  function handleClick(){
    if (count>=diffcolors.length-1){
      setCount(()=>0);
    }
    else{
      setCount(()=>count+1);
    }
    
    setColor(diffcolors[count]);
    // setColor('black');
  }
  return (
    <div>
      <h1 className={color}>Welcome to my app</h1>
      
      <button onClick={handleClick}>I'm a button</button>
    </div>
  );
}
