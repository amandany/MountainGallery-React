import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import './mountain.css';
import pic from '../../img/minipic.png';
import picEmpty from '../../img/minipicEmpty.png';
import back from '../../img/backsvg.svg';
import open from '../../img/opensvg.svg';
import openFull from '../../img/openfull.svg'


const Mount = ({img, title, text, history}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="mountContainer" style={{backgroundImage: `url(${img})`}}>
            <div className="buttonContainer">
                <button className="button buttonBack" onClick={() => {
                    history.push('/')
                }}>
                    <img src={back} alt="close"/>
                </button>
                <div className="circle">
                    <div className="circleFilled"></div>
                    <div className="circleEmpty"></div>
                    <div className="circleEmpty"></div>
                </div>
                <button className="button" onClick={() => setVisible(!visible)}>
                    { visible === true ? <img src={openFull} alt="open"/> : <img src={open} alt="open"/> }
                </button>
            </div>
            {visible === false &&
                <div className="box">
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="imgEnumeration">
                    <img src={pic} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                    <img src={picEmpty} alt="mountain"/>
                </div>
            </div>
            }
        </div>
    )
}

export default withRouter(Mount);