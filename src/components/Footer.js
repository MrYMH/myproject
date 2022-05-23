import  React, { useState} from 'react'
import Modal from './Modal'


const Footer = () =>{
    const[modal , setmodal] = useState(false);

    const toggle=()=>{
        setmodal(!modal);
    }
    return(
        <div className='footer'>
            <footer>
                <div className='text'>
                    <p>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span>Frontend Mentor</span></a>. 
                    Coded by <a href="https://www.linkedin.com/in/youssef-hemdan-449543234/" target='_blank'> <span>Youssef Mohamed Hemdan</span></a>.
                    </p>
                </div>
                <button className='rules' onClick={toggle}>
                    rules
                </button>
            </footer>
            {
                modal?
                <Modal toggle={toggle}/>
                :null
            }
        </div>
    )
}

export default Footer;


/*
 <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>



   <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
*/