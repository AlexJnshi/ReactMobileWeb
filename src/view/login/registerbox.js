import React, { useState } from 'react';
import { connect } from "react-redux";
import register from "../../store/action/register";
import { withRouter } from "react-router-dom";

function RegisterBox(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [vcode, setVcode] = useState("");
    const [vcodeShow, setVcodeShow] = useState(false);
    const [vcodeSrc, setVcodeSrc] = useState("https://data.miaov.com/user/verify?" + Date.now());
    const { setDeg } = props;
    const [info, setInfo] = useState("")
    const [isRegDisable, setIsRegDisable] = useState({
        user: true,
        password: true,
        password2: true,
        vcode: true
    })

    /***** had server problem, can not get verify code with cookie,
     * because this is just showcase,so I changed the code,
     * register date do not will send to server,so you can register whatever you entered
     * below is origin logic
     * function toRegister(){
        props.dispatch(register({
            verify: vcode,
            username: user,
            password,
            repassword:password2
        })).then(data=>{
            alert(data.msg);
            //console.log(data);
            setTimeout(()=>{
                if(data.code == 0){
                    setDeg(0)
                }
                setVcodeSrc("/miaov/user/verify?"+Date.now());
            },100);
        })
    }
    ******/

    function toRegister() {
        /**** can using RegExpress to verify form of data that user typed in here
         * Omitted here
        */
        console.log("in")
        props.dispatch(register({
            verify: vcode,
            username: user,
            password,
            repassword: password2
        })).then(data => {
            alert("register successful")
            setTimeout(() => {
                setDeg(0)
            }, 100)
            /****Server problem, 
             * this project is showcase,
             * so, it will allow you to regist whatever you entered 
             * below is origin logic
             * alert(data.msg);
                setTimeout(() => {
                if (data.code == 0) {
                    setDeg(0)
                }
                setVcodeSrc("https://data.miaov.com/user/verify?" + Date.now());
            }, 100);
             * */

        })
    }
    let point = {};

    return (
        <div className="register_box">
            <h3>Register</h3>
            <div className="login_info register_info">{info}</div>
            <div className="register_form">
                <p>
                    <input
                        type="text"
                        placeholder="User name"
                        value={user}
                        onChange={e => {
                            setUser(e.target.value)
                        }}
                        onBlur={() => {
                            if (user.trim() === "") {
                                setInfo("Please enter username")
                            } else {
                                setInfo("")
                                setIsRegDisable({ ...isRegDisable, user: false })
                            }
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        onBlur={() => {
                            if (password.trim() === "") {
                                setInfo("Please enter password")
                            } else {
                                setInfo("")
                                setIsRegDisable({ ...isRegDisable, password: false })
                            }
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={password2}
                        onChange={e => {
                            setPassword2(e.target.value);
                        }}
                        onBlur={() => {
                            if (password2 !== password) {
                                setInfo("Comfirm password do not match password")
                            } else {
                                setInfo("")
                                setIsRegDisable({ ...isRegDisable, password2: false })
                            }
                        }}
                    />
                </p>
                <p className="clearfix">
                    <input
                        className="verifyCode"
                        type="text"
                        placeholder="Verity code"
                        value={vcode}
                        onChange={e => {
                            setVcode(e.target.value);
                        }}
                        onFocus={() => {
                            setVcodeShow(true);
                        }}
                        onBlur={() => {
                            if (vcode.trim() === "") {
                                setInfo("Please enter verify code")
                            } else {
                                setInfo("")
                                setIsRegDisable({ ...isRegDisable, vcode: false })
                            }
                        }}
                    />
                    {vcodeShow ?
                        <img
                            className="verify"
                            src={vcodeSrc}
                            alt="verify code"
                            onTouchStart={(e) => {
                                let touch = e.changedTouches[0];
                                point.x = touch.pageX;
                                point.y = touch.pageY;
                            }}
                            onTouchEnd={(e) => {
                                let touch = e.changedTouches[0];
                                let nowPoint = {
                                    x: touch.pageX,
                                    y: touch.pageY
                                };
                                if (Math.abs(nowPoint.x - point.x) < 5
                                    && Math.abs(nowPoint.y - point.y) < 5) {
                                    setVcodeSrc("https://data.miaov.com/user/verify?" + Date.now())
                                }
                            }} /> : ""}

                </p>
                <button
                    disabled={
                        isRegDisable.user||
                        isRegDisable.password||
                        isRegDisable.password2||
                        isRegDisable.vcode
                    }
                    className="form_btn"
                    onClick={() => {
                        console.log("123")
                        toRegister()
                    }}
                >Register now</button>
                <div className="form_tip">Already have an account?
                <button
                        className="login_btn"
                        onClick={() => {
                            setDeg(0)
                        }}
                    >Log in here</button></div>
            </div>
        </div>
    );
}
export default connect(res => res)(withRouter(RegisterBox));