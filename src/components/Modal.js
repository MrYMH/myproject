import React from 'react'
import ReactDOM from 'react-dom'
import close from '../images/icon-close.svg'
import rules from '../images/image-rules.svg'


const Modal = ({toggle}) =>{
    return(
        ReactDOM.createPortal(

            <div className='modal-container'>
                <div className='modal-box'>
                    <div className='modal--header'>
                        <h1>rules</h1>
                        <button onClick={toggle}>
                            <img src={close} alt='close' srcSet=''/>
                        </button>
                    </div>
                    <img src={rules} alt='' srcSet='' />
                </div>
            </div>,


        document.getElementById('modal')
        )
    )
}

export default Modal;