import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'
import { useBack } from "../hooks/index"
/**** server problem, can not check login state, have to change code, below is origin logic ****/
// import isLogin from "../../store/action/isLogin"
// import logout from "../../store/action/logout"


function Header(props) {
    const path = props.location.pathname;
    const toggleMenu = props.toggleMenu
    const back = useBack(props.history);
    const user = props.logIn
    const [isLogOutBtnShow,setIsLogOutBtnShow] = useState(false)

    /**** Had server problem, so I changed the code. 
     * The origin code should be: 
    useEffect(()=>{
        props.dispatch(isLogin());
    },[]);
    ****/

    /***** Check Login state before page render *****/
    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            props.dispatch({
                type: "LOGIN",
                user: sessionStorage.getItem("user")
            });
        }
    }, [])

    /**** right top conner icon, if login show user name, if not show login icon ****/
    function getUser() {
        if (path === "/login") {
            return ""
        }else if (user) {
            return (<span className="header-btn-right">
                <span
                    className="header-user"
                    onClick = {()=>{
                        setIsLogOutBtnShow(!isLogOutBtnShow);
                    }}
                >{user}</span>
                <span
                    className="header-logout-btn"
                    style={{
                        display:isLogOutBtnShow?"block":"none"
                    }} 
                    onClick={() => {
                        sessionStorage.setItem("user", "")
                        /***** Origin code 
                         * props.dispatch(logout());
                        */
                        props.dispatch({ type: "LOGOUT" })
                    }}
                >Log out</span></span>)
        }
        return <Link className="user" to="/login" />
    }

    return (
        <header id='header'>
            <nav className='menu'>
                {/**** show Back btn or menu btn, depends on browser path*/}
                {path === "/login" ? <span
                    className="header-btn-left iconfont icon-back"
                    onClick={() => {
                        back()
                    }}
                ></span> : <span
                    className="header-btn-left iconfont icon-hycaidan"
                    onClick={()=>{
                        toggleMenu()
                    }}
                ></span>}

            </nav>
            <h1 className='logo'>logo</h1>
            {getUser()}

        </header>
    )
}

export default connect(state => state)(withRouter(Header))