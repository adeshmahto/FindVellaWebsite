import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";




//array of objects
export const  SidebarData =[

    {
        title:'Home',
        path :'/',
        icons :<AiIcons.AiFillHome/>,
        cName:'nav-text',
    },
    {
        title:'MyOrder',
        path :'/order',
        icons :<FaIcons.FaCartPlus/>,
        cName:'nav-text',
    },
    {
        title:'AddProduct',
        path :'/addproduct',
        icons :<IoIcons.IoIosAdd/>,
        cName:'nav-text',
    },
    
    {
        title:'Products',
        path :'/product',
        icons :<FaIcons.FaCartPlus/>,
        cName:'nav-text',
    },
    
    {
        title:'Login',
        path :'/login',
        icons :<IoIcons.IoMdPeople/>,
        cName:'nav-text',
    },
    
    {
        title:'Messages',
        path :'/messages',
        icons :<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text',
    },
    
    {
        title:'Support',
        path :'/support',
        icons :<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text',
    },
    
    

]


