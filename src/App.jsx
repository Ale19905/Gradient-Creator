import { useState,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [copied, setCopied] = useState(false)
  let colorsArr = ['black', 'black']

  const input1 = useRef()
  const input2 = useRef()
  
  let input = useRef()
  const [direction, setDirection] = useState('right')

  const arr = [
    {
      direction: 'top left',
      src: 'arrow_top_left.png',
      width:30,
      height:30
      
    },
    {
      direction: 'top',
      src: 'arrow_top.png',
      width:30,
      height:30
    },
    {
      direction: 'top right',
      src: 'arrow_top_right.png',
      width:30,
      height:30
    },
    {
      direction: 'left',
      src: 'arrow_left.png',
      width:20,
      height:20
    },
    {
    
    },
    {
      direction: 'right',
      src: 'arrow_right.png',
      width:18,
      height:18
    },
    {
      direction: 'bottom left',
      src: 'arrow_down_left.png',
      width:23,
      height:23
    },
    {
      direction: 'bottom',
      src: 'arrow_down.png',
      width:18,
      height:18
    },
    {
      direction: 'bottom right',
      src: 'arrow_down_right.png',
      width:22,
      height:22
    }
  ];
  
  
  const cant_btns = ['','']
  const [realcolors, SetRealcolors] = useState()

  useEffect(() => {
    setCopied(false);

  }, [color1, color2, direction])
 
  const handleColor = () => {
    setColor1(input1.current.value)
    setColor2(input2.current.value)
    console.log(input1);
    
    
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`linear-gradient(to right, ${color1}, ${color2})`).then(() => {
      setCopied(true)
    })
  }

  const handleDirection = (item) => {
    setDirection(item.direction);
    
 } 
 const handleError = (e) => {
  e.target.src = ''; // Puedes poner aquí la ruta de una imagen de respaldo si quieres
  e.target.alt = 'Imagen no encontrada'; // Opcionalmente, puedes cambiar el texto alternativo
  e.target.style.display = 'none'; // Ocultar la imagen
};

  return (
    <>
      <div className='container'> 
        
      <h1>Create your Gradient</h1>
      
      <div className='container-stuff'>

        {/*
        
        <div className='container-inputs'>
            <ul>
              {cant_btns.map((item, index) => (
                 <li key={index}>
                    <h3>Color: {index}</h3>
                    <input ref={input} type="color" onChange={() => handleColor(index)} />
                  
                 </li>
              ))}
            </ul>
            
        */}
            <div className='container-colors'>
              <div>
                <h3>Color 1:</h3>
                <input ref={input1} type="color" onChange={handleColor}/>
              </div>
              
              <div>
                <h3>Color 2:</h3>
                <input ref={input2} type="color"  onChange={handleColor}/>
              </div>
            
           
            
            <ul className='container-direction'>
                {arr.map((item,index) => (
                    <li key={index}>
                        <button className='btn-direction' disabled={!item.direction} onClick={() => handleDirection(item)}>
                          <img disabled={item == ''} src={item.src} alt={item.direction} width={item.width} height={item.height} className='direction_img' handleError={handleError} />
                        </button>
                    </li>

                ))}
            </ul>


              
       
        
           
            
        </div>
          
      
        <div className='div-final'>
          <div className='gradiente' style={{backgroundImage: `linear-gradient(to ${direction},  ${color1}, ${color2}`}}>
          
          </div>

          
        </div>
      </div>
      
      </div>
      
      <div className='answer'>
        <h3>Codigo CSS: </h3>
        
        <div className='div-code'>
          <p className='code'>linear-gradient(to {direction}, {color1}, {color2})</p>
          <button className='btn' onClick={handleCopy}>{copied 
            ? <img src="check.png" alt="copied" width={30} height={30} /> 
            : <img src="copy.png" alt="copy" width={30} height={30} /> }</button>
        </div>
      </div>
    </>
  )
}

export default App
