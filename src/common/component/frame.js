import React, { useState,useEffect,useRef } from 'react'
import { useInnerHeight } from "../hooks/index"
import BScroll from 'better-scroll'
import Header from './header'
import Menu from './menu'
import '../css/reset.css'
import '../css/common.css'
import '../css/login.css'

export default function Frame(props) {
    console.log(props)
    const [showMenu, setShowMenu] = useState(false);
    const innerHeight = useInnerHeight();
    const wrap = useRef(null);
    let {pullUp,getData} = props

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function hideMenu() {
        setShowMenu(false)
    }

    useEffect(()=>{
        window.pageScroll = new BScroll(wrap.current,{
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)work_a(\s|$)/ 
            },
            pullUpLoad: pullUp?{threshold:200}:false
        });

        window.pageScroll.on("pullingUp",()=>{
            getData().then(res=>{
                if(res){
                    window.pageScroll.finishPullUp();
                    window.pageScroll.refresh();
                } else {
                    window.pageScroll.closePullUp();
                }
               
            });
        })
        
    },[])

    return (
        <div>
            <Header
                toggleMenu={toggleMenu}
            />
            <Menu 
                hideMenu={hideMenu}
            />
            <div
                id='main'
                style={{ transform: `translateX(${showMenu ? 4.5 : 0}rem)`, height: innerHeight }}
                
                onTouchStart={hideMenu}
            >
                <div 
                    className="pageWrap" 
                    ref = {wrap}
                >
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}