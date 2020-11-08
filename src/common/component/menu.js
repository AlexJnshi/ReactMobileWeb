import React from 'react'
import { NavLink } from 'react-router-dom'
import {navList } from '../../router/route_list'

export default function Menu(props){
    return (
        <nav id='menu'>
            {navList.map((item,index)=>{
                return (
                <NavLink 
                    className={item.className}
                    activeClassName={"active"}
                    to={item.path}
                    exact={item.exact}
                    key={index}
                    onTouchEnd={()=>{
                        props.hideMenu()
                    }}
                >{item.name}</NavLink>)
            })}
        </nav>
    )
}