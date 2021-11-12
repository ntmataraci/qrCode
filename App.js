import logo from './logo.svg';
import './App.css';
import { useQRCode } from 'next-qrcode';
import Content from './Content';
import {useState} from "react"

function App() {

const [data,setData]=useState("")
const getData = (myList) =>{
const x =`
Name: ${myList[0].name}
Quantity: ${myList[0].qty}
Material: ${myList[0].material} 
Heat Treatment: ${myList[0].treatment}
Date: ${myList[0].date} 
Message: ${myList[0].msg} 
`

setData(x)
  }

  console.log(data)
  const { inputRef } = useQRCode({
    text: data?data:"free",
  })


  return (
    <div className="App">
         <canvas ref={inputRef} />
     <Content getData={getData}/>
    </div>
  );
}

export default App;
