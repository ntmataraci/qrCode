import React, { useState, useRef } from "react";
import style from "./Content.module.css"
const Content = (props) => {
  
const [myList,setMyList]=useState([])
const submitHandler=(e)=>{
e.preventDefault()
const datas=  
[{
name:e.target[0].value,
qty:e.target[1].value,
material:e.target[2].value,
treatment:e.target[3].value,
date:e.target[4].value,
msg:e.target[5].value
}]
  setMyList([datas])
for (let i=0;i<5;i++){
  e.target[i].value=""
}

props.getData(datas)
}



  return (
    <>
     
      <form onSubmit={submitHandler}>
      <div className={style.main}>
     <div className={style.row}><div className={style.left}> Name :</div><div className={style.right}><input type="text" ></input></div></div>
     <div className={style.row}><div className={style.left}> Quantity :</div><div className={style.right}><input type="text" ></input></div></div>
     <div className={style.row}><div className={style.left}>  Material :</div><div className={style.right}><input type="text" ></input></div></div>
     <div className={style.row}><div className={style.left}>  Treatment:</div><div className={style.right}><input type="text" ></input></div></div>
     <div className={style.row}><div className={style.left}>  Date: </div><div className={style.right}><input type="date" ></input></div></div>
     <div className={style.row}><div className={style.left}>  Message: </div><div className={style.right}><textarea></textarea></div></div>
      <br />
     <input type="submit" value="send" />
     </div>
      </form>


    {/* {myList.map((item,idx) => <p key={idx}> {React.createElement("input",{type:"text",value:item})} </p> )} */}


    </>
  );
};

export default Content;
