import React, { useState } from 'react'
import { connect } from 'react-redux'
import login from '../../store/action/login'
import user_img from '../../common/images/user_img.png'
import { withRouter } from "react-router-dom"
import { useBack } from '../../common/hooks'

function LoginBox(props) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [verifyCode, setVerifyCode] = useState("")
    const [verifyCodeShow, setVerifyCodeShow] = useState(false)
    /***** add Data.now() to provent cache *****/
    const [verifyCodeSrc, setVerifyCodeSrc] = useState("https://data.miaov.com/user/verify?" + Date.now())
    const back = useBack(props.history);
    const { setDeg } = props;
    const [info,setInfo]=useState("")
    const [isLoginDisable,setIsLoginDisable]=useState({user:true,password:true,verify:true})

    function toLogin() {
        props.dispatch(login({
            verify: verifyCode,
            username: user,
            password
        })).then(data => {
            /**** sessionStorage is used because server problem, can't check login state,
             * here login will success anyway 
             * I set user in sessionStorage to check login state. ****/
            alert("Login Successful")
            sessionStorage.setItem("user", user)
            setTimeout(() => {
                back()
            }, 1000)

  
            /***** original logic  *****/
            //if(data.code !== 0){  
            /***** login unsuccessful, alert reason(come from server) *****/
            //alert (data.msg)
            //setVcodeSrc("https://data.miaov.com/user/verify?"+Date.now());
            //}else{
            // alert (data.msg)
            // back();
            /***** login successful *****/
            //}
        })
    }

    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={user_img} alt="" />
                <figcaption>Please Login</figcaption>
                <div className="login_info">{info}</div>
            </figure>
            <div className="login_form">
                <p>
                    <input
                        type="text"
                        placeholder="User Name"
                        value={user}
                        onChange={e => {
                            setUser(e.target.value)
                        }}
                        onBlur={()=>{
                            if(user.trim()===""){
                                setInfo("Please enter username")
                            }else{
                                setInfo("")
                                setIsLoginDisable({...isLoginDisable,user:false})
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
                            setPassword(e.target.value)
                        }}
                        onBlur={()=>{
                            if(password.trim()===""){
                                setInfo("Please enter Password")
                            }else{
                                setInfo("")
                                setIsLoginDisable({...isLoginDisable,password:false})
                            }
                        }}
                    />
                </p>
                <p className=" clearfix">
                    <input
                        type="text"
                        className="verifyCode"
                        placeholder="Verify Code"
                        value={verifyCode}
                        onChange={e => {
                            setVerifyCode(e.target.value)
                        }}
                        onFocus={() => {
                            setVerifyCodeShow(true)
                        }}
                        onBlur={()=>{
                            if(verifyCode.trim()===""){
                                setInfo("Please enter Verify Code")
                            }else{
                                setInfo("")
                                setIsLoginDisable({...isLoginDisable,verify:false})
                            }
                        }}
                    />
                    {verifyCodeShow ?
                        <img
                            className="verify"
                            alt="verify code"
                            src={verifyCodeSrc}
                            onClick={() => {
                                setVerifyCodeSrc("https://data.miaov.com/user/verify?" + Date.now())
                            }}
                            onTouchStart={() => {
                                setVerifyCodeSrc("https://data.miaov.com/user/verify?" + Date.now())
                            }}
                        />
                        : ""}

                </p>
                <button
                    disabled={isLoginDisable.user||isLoginDisable.password||isLoginDisable.verify}
                    className="form_btn"
                    onClick={toLogin}
                >Login</button>
                <p className="form_tip">Do not have a account?
                    <button className="login_btn"
                        onClick={() => {
                            setDeg(-180)
                        }}
                    >Registe Now</button>
                </p>
            </div>
        </div>
    )

}

export default connect(res => res)(withRouter(LoginBox))