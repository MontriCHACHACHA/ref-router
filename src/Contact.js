import React from "react";
import "./Menu.js";
import Menu from "./Menu.js";


export function Contact() {
  return (
    <>
    <Menu />
    <>
      <div className='card'>
        <Avatar/>
        <div className='data'>
        <Intro/>
        </div>
      </div>
    </>
    </>
  );
}

function Avatar() {
  return  <center><img className='avatar' src='IMG_1083.JPG' width={300} alt='My Avatar'/></center>;
}

function Intro() {
  return (
    <center><div>
      <h1>นายมนตรี ชะนวนกลาง</h1>
      <p>
        นักศึกษา คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศเพื่อการสื่อสาร
        มหาวิทยาลัยอุบลราชธานี งานอดิเรกชอบเล่นเกม อ่านการ์ตูน นอน
      </p>
    </div>
    </center>
  );
}

export default Contact;