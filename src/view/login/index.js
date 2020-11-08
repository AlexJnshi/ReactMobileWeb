import React, { useState } from 'react'
import LoginBox from './loginbox'
import RegisterBox from './registerbox'
import Frame from '../../common/component/frame'

function Login(props) {
    const [deg, setDeg] = useState(0)
    return (
        <Frame>
            <div id="login_boxWrap">
                <div className="login_register"></div>
                <div className="login_register_box">
                    <div className="box" style={{
                        transform: `rotateY(${deg}deg)`
                    }}>
                        <LoginBox setDeg={setDeg} />
                        <RegisterBox setDeg={setDeg} />
                    </div>
                </div>
            </div>
        </Frame>
    );
}

export default Login;
