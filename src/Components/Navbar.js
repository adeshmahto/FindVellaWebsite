import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons'

import styled from 'styled-components';


import { SidebarData } from './SidebarData'




function Navbar() {

    const [user,setUser]=useState([])

    // const getUser=()=>{
    //     axios.get('/users').then((response)=>{
    //         setUser(response.data)

    //     },()=>{

    //     })
    // }

    // useEffect(()=>{
    //     getUser()
    // },[])


    const [sidebar, setSidebar] = useState(false);

    const[search,setSearch]=useState([]); // hook
   

   let c=null;
   if(search=="watch" || search=="Watch" || search=="WATCH" || search=="watchs"|| search=="WATCHS"){
    c="/watch"
   }else if(search=="shirt" ||search=="t-shirt" || search=="T-shirt" || search=="T-SHIRT" ||search=="TSHIRT"||search=="t-shirts"){
    c="/shirt"
   }else {
    c="/noproduct"
   }
//   const u=user.length>0?user[user.length-1].name:" no name";

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Heading> <a href='/'>Shop</a> </Heading>
                    <SearchBar>
                        <form action={c} method='get'>
                        <SearchInput  placeholder='Search here' onChange={(e)=>{
                            setSearch(e.target.value)
                        }} ></SearchInput>
                        <SearchButton >Search</SearchButton>
                        </form>

                       

                    </SearchBar>
        

                  
                      
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>


                    <ul className='nav-menu-items' onClick={showSidebar}>

                        <li classNmae='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>

                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icons}
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

const Heading = styled.h1`
color:black;
box-shodow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
border:1px solid whitesmoke;
border-radius:15px;
padding:2px;
margin-left:60px;
margin-top:10px;

cursor:pointer;
a{
  text-decoration:none;
  color:white;
}

&:hover{
  border:1px solid rgba(249,249,249,0.1);
  transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
}

@media screen and (max-width:385px) {

margin-left:-25px;
margin-top:10px;
  
   
   }



`
const SearchBar = styled.div`
display:flex;
align-items:center;
border:2px solid black;

`
const SearchInput = styled.input`

width:300px;
height:3vh;
margin-left: 400px;
border-radius:5px 0 0 5px;
padding:2px;
`
const SearchButton = styled.button`
height:4vh;
margin:1px;
border-radius:0 5px 5px 0;
margin-top:2px;
`

const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
margin:10px 0 10px 520px;
`