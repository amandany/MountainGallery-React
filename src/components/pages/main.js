import React from 'react';
import back1 from '../../img/back1.png';
import './main.css';
import pic1 from '../../img/pic1.png';
import pic2 from '../../img/pic2.png';
import pic3 from '../../img/pic3.png';
import pic4 from '../../img/pic4.png';
import pic5 from '../../img/pic5.png';
import pic6 from '../../img/pic6.png';
import pic7 from '../../img/pic7.png';
import pic8 from '../../img/pic8.png';
import {withRouter} from "react-router-dom";

const Main = ({history}) => {
    return (
        <div className="container">

            <div className="backImg">
                <img src={back1} alt="background"/>
            </div>

            <div className="listImg">
                <div className="mount1">
                    <img src={pic1} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/1') }}>Лявочорр</button>
                </div>
                <div className="mount2">
                    <img src={pic2} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/2') }}>Часначорр</button>
                </div>
                <div className="mount3">
                    <img src={pic3} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/3') }}>Кукисвумчорр</button>
                </div>
                <div className="mount4">
                    <img src={pic4} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/4') }}>Ферсмана</button>
                </div>
                <div className="mount5">
                    <img src={pic5} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/5') }}>Юдычвумчорр</button>
                </div>
                <div className="mount6">
                    <img src={pic6} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/6') }}>Тахтарвумчорр</button>
                </div>
                <div className="mount7">
                    <img src={pic7} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/7') }}>Вудъяврчорр</button>
                </div>
                <div className="mount8">
                    <img src={pic8} alt="mountain"/>
                    <button type="button" onClick={() => { history.push('/8') }}>Айкуайвенчорр</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Main);