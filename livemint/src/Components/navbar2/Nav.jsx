import React, { useState } from 'react';
import {FaBars} from "react-icons/fa";
import {CgCloseO} from "react-icons/cg";
import {Link} from "react-router-dom";
import {NavbarData,navData1,navData2,navData3,navData4,navrightdata1,navrightdata2,navDataClothes3} from "./NavData"
import "./nav.css";
import {CgProfile} from "react-icons/cg";
import {GiAnticlockwiseRotation} from "react-icons/gi"
import {IoMdCart} from "react-icons/io";
import {MdAccountCircle} from "react-icons/md";
import {MdArrowForwardIos} from "react-icons/md";
import {MdArrowBackIosNew} from "react-icons/md";
import { FaSistrix } from "react-icons/fa";
import { BiBell } from "react-icons/bi";



const Nav = () => {
    const [menu,setMenu]=useState(false);
    const [clothes,setClothes]=useState(false);
    const [Shoes,setShoes]=useState(false);
    const [Beauty,setBeauty]=useState(false);
    const [Home,setHome]=useState(false);
    const [kids,setkids]=useState(false);
    const [Electronics,setElectronics]=useState(false);

    const showMenu=()=>{
        setMenu(!menu)
    }

    const [menuright1,setMenuright1]=useState(false);

    const showMenuright1=()=>{
        setMenuright1(!menuright1)
    }

    const [cartshow,setCartShow]=useState(false);
    const showCart=()=>{
        setCartShow(!cartshow)
    }

    const showClothes=()=>{
        setClothes(!clothes)
    }

    const showShoes=()=>{
        setShoes(!Shoes)
    }
    const showBeauty=()=>{
        setBeauty(!Beauty)
    }
    const showhome=()=>{
        setHome(!Home)
    }
    const showkids=()=>{
        setkids(!kids)
    }
    const showElectronics=()=>{
        setElectronics(!Electronics)
    }
  

// ................................................................3rdslide........................................


const [clothes3,setClothes3]=useState(false);
const [Shoes3,setShoes3]=useState(false);
const [Beauty3,setBeauty3]=useState(false);
const [Home3,setHome3]=useState(false);
const [kids3,setkids3]=useState(false);
const [Electronics3,setElectronics3]=useState(false);
const [mensClothes3,setmensclothes3]=useState(false);

const mensclotheshow3=()=>{
    setmensclothes3(!mensClothes3)
}

const showClothes3=()=>{
    setClothes3(!clothes3)
}

const showShoes3=()=>{
    setShoes3(!Shoes3)
}
const showBeauty3=()=>{
    setBeauty3(!Beauty3)
}
const showhome3=()=>{
    setHome3(!Home3)
}
const showkids3=()=>{
    setkids3(!kids3)
}
const showElectronics3=()=>{
    setElectronics3(!Electronics3)
}

  return (
      <div className='navBar2Main'>
         
 <div className='navBar2'>
 <div className='first'>
    <div className='navbar2slide' onClick={showMenu}>
      <Link to="#" className='menu-bars'>
          <FaBars />
      </Link>
      <strong> Explore</strong>
    </div>
    </div>
    <div className='second'>
    <div className='nav2Productlist'>
        <Link to="#">
            <div>
           <img src="https://images.livemint.com/static/livemint-logo-v2.svg"alt="mint" title="mint" width="145"></img>
             </div>
        </Link>
     
           
    </div> 
    </div> 

  <div className='third'>

    <div className='navbar2order' >
    <Link to="#" className='nav2-orderlogo'>
          <FaSistrix />
      </Link>
  
        
    </div>

    <div className='navbar2order' >
 
          <BiBell />

  
        
    </div>

    <div className='navbar2cart' onClick={showCart} >
    <Link to="#" className='nav2-cartlogo'>
          {/* <IoMdCart /> */}
      </Link>
    <span className='nav2cartlable' ><strong>e-paper</strong></span>
        
    </div>
    <div className='nav2endbox'>
    <div className='navbar2signup' onClick={showMenuright1}>
    <Link to="#" className='nav2-signuplogo'>
          <CgProfile />
      </Link>
    <span className='nav2signinlogo'>Sign in</span>
    
     
    </div>
    </div>

    </div>
 

  {/* ..........................left sliding part.................................. */}
    <nav className={menu ? "nav-menu active" : "nav-menu"} >
        

        <div className='nav-menu-items' onClick={showMenu}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        {/* <div className='slideLogo'>
        <img 
             src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg"
             alt="logo"
             /> 
            <h2>SHOP.COM</h2>   
        </div> */}
        {/* <div className='slideItems'>
            <h3>Categories</h3>
        </div> */}

        <div className='navData1'>
            {navData1.map((item,index)=>{
                return (
                   
                    <div key={index} className={item.className}>
                    <Link to={item.path}>{item.title}</Link>
                </div>
                )           
            })}
        </div>

        <div className='navData2'>
            {/* {navData2.map((item,index)=>{ */}
                {/* return ( */}
                <div className="nav2-text">
                       <strong>Top Sections</strong>
                      
                   </div>
                   <div className="nav2-text">
                       <span>NEWS</span>
                       <span onClick={showClothes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2-text">
                       <span>COMPANIES</span>
                       <span onClick={showShoes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2-text">
                       <span>TECHONOLOGY</span>
                       <span onClick={showBeauty}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2-text">
                       <span>MARKETS</span>
                       <span onClick={showhome}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2-text">
                       <span>MONEY</span>
                       <span onClick={showkids}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2-text">
                       <span>PHOTOS</span>
                       <span onClick={showElectronics}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2-text">
                       <span>MUTUAL FRIENDS</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>INSURANCE</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>LOUNGE</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>OPENION</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>BUDGET-2022</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>AUTO NEWS</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>SPORTS</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>INDUSTRY</span>
                      
                   </div>
                   <div className="nav2-text">
                       <span>VIDEOS</span>
                      
                   </div>
                   {/* <div className="nav2-text">
                       <span>Health & Nutrition</span>
                       <span onClick={showheanutri}> <MdArrowForwardIos/></span>
                   </div> */}
                {/* )            */}
            {/* })} */}

        </div>
        <hr></hr>
        <div className='slideItems'>
            <h3>Account</h3>
        </div>
        <div className='navData2'>
            {navData3.map((item,index)=>{
                return (
                    <div key={index} className={item.className}>
                          <span onClick={showMenu} className="navicon3">{item.icon}</span>
                       <span>{item.title}</span>
                     
                   </div>
               
                )           
            })}

        </div>
        <hr></hr>

        <div className='slideItems'>
            <h3>Explore Mint</h3>
        </div>   

        <div className='navData4'>
            {navData4.map((item,index)=>{
                return (
                    
                     <div key={index} className={item.className}>
                         <Link to={item.path}>

                         <span  className="navicon4">{item.icon}</span>
                       {item.title}
                         </Link>                 
                   </div>
                                 
                )           
            })}

        </div>

    </nav>
    {/* .................................slidingpart end.................... */}


    {/* ..................................right sliding part1 .................................. */}


    <nav className={menuright1 ? "nav-menuright1 active" : "nav-menuright1"} >
        




        <div className='nav-menu-items' onClick={showMenuright1}>
              <Link to="#" className='menuright1-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='rightslideAccount'>
             <Link to="#" className='rightslideAccountlogo'>
                  <MdAccountCircle />
            </Link>
               <h1 className='rightslideaccountlable'>Account</h1>
        </div>
       
        <p className='rightmenuline'>Your Shop Consultant is SHOP.COM</p>
       

       
        <div className='navData4'>
            {navrightdata1.map((item,index)=>{
                return (
                    
                     <div key={index} className={item.className}>
                         <Link to={item.path}>

                         <span  className="navicon4">{item.icon}</span>
                       {item.title}
                         </Link>                 
                   </div>
                                 
                )           
            })}

        </div>
        <hr></hr>


        <div className='navData4'>
            {navrightdata2.map((item,index)=>{
                return (
                    
                     <div key={index} className={item.className}>
                         <Link to={item.path}>

                         <span  className="navicon4">{item.icon}</span>
                       {item.title}
                         </Link>                 
                   </div>
                                 
                )           
            })}

        </div>

    </nav>





    {/* ...................................right sliding part 1 end......................................... */}
  
    <nav className={cartshow ? "nav-menurightcart1 active" : "nav-menurightcart1"} >
        

        <div className='nav-menu-items' onClick={showCart}>
              <Link to="#" className='menurightcart1-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='rightslideAccount'>
             <Link to="#" className='rightslideAccountlogo'>
                  <MdAccountCircle />
            </Link>
               <h1 className='rightslideaccountlable'>Account</h1>
        </div>
       
       

    </nav>





  {/* ...........leftcloth page start......................................................... */}


  <nav className={clothes ? "nav-clothes active" : "nav-clothes"} >
        

        <div className='nav-menu-items' onClick={showClothes}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='slideclothes'>
        <span onClick={showClothes} className="slideprclose"> <MdArrowBackIosNew/></span>
        <span >Back to main</span>
        </div>


        <div className='slideproductlist'>
            <h1>Clothes</h1>
            <h3>Shop All Clothes</h3>
        </div>

        <div className='navData2'>
           
                   <div className="nav2productdetail">
                       <span>Womens's Clothing</span>
                       <span onClick={showClothes3}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Mens Clothing</span>
                       <span onClick={mensclotheshow3}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Accessories</span>
                       <span onClick={showBeauty3}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Girls Clothing</span>
                       <span onClick={showhome3}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Boy's Clothing</span>
                       <span onClick={showkids3}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Baby & Toddler Clothing</span>
                       <span onClick={showElectronics3}> <MdArrowForwardIos/></span>
                   </div>
        </div>
        <hr></hr>
        <div className='clothedetailsimg'>
            <img 
            src="https://img.shop.com/Image/header2013/us-en-gap-freeshhip-banner-fillin-apr211618414682233.jpeg"
            
            alt="clothes"
            />
        </div>
      


    </nav>


  {/* ...............................leftcloth page end............................................... */}


  {/* ...................................shoes slide start.................................................... */}



  <nav className={Shoes ? "nav-clothes active" : "nav-clothes"} >
        

        <div className='nav-menu-items' onClick={showShoes}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='slideclothes'>
        <span onClick={showShoes} className="slideprclose"> <MdArrowBackIosNew/></span>
        <span >Back to main</span>
        </div>


        <div className='slideproductlist'>
            <h1>Shoes</h1>
            <h3>Shop All Shoes</h3>
        </div>

        <div className='navData2'>
           
                   <div className="nav2productdetail">
                       <span>Womens's Shoes</span>
                       <span onClick={showClothes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Mens Shoes</span>
                       <span onClick={showShoes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Girls Shoes</span>
                       <span onClick={showBeauty}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Boy's Shoes</span>
                       <span onClick={showhome}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Baby & Toddler</span>
                       <span onClick={showkids}> <MdArrowForwardIos/></span>
                   </div>       

        </div>
        <hr></hr>
        <div className='clothedetailsimg'>
           <img 
           src='https://img.shop.com/Image/header2013/us-eng-adidas-media-shoes1609187471744.jpg'
           />
        </div>
      


    </nav>

  {/* ..........................................shoes slide end..................................................... */}


{/* ..........................Beauty slide.start........................................... */}


<nav className={Beauty ? "nav-clothes active" : "nav-clothes"} >
        

        <div className='nav-menu-items' onClick={ showBeauty}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='slideclothes'>
        <span onClick={ showBeauty} className="slideprclose"> <MdArrowBackIosNew/></span>
        <span >Back to main</span>
        </div>


        <div className='slideproductlist'>
            <h1>Beauty</h1>
            <h3>Shop All Beauty</h3>
        </div>

        <div className='navData2'>
           
                   <div className="nav2productdetail">
                       <span>Bath & Showe Products</span>
                       <span onClick={showClothes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Beauty Gift Sets</span>
                       <span onClick={showShoes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Cosmetic Accessories</span>
                       <span onClick={showBeauty}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Eye Makeup</span>
                       <span onClick={showhome}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Hair Care</span>
                       <span onClick={showkids}> <MdArrowForwardIos/></span>
                   </div> 

        </div>
        <hr></hr>
        <div className='clothedetailsimg'>
           <img 
           src='https://img.shop.com/Image/header2013/motives-usa-eng-100271-goal-digger-header1651084902750.jpg'
           />
        </div>
      


    </nav>

{/* ......................................beauty slide end............................................. */}




{/* .............................home slide start ................................ */}


<nav className={Home ? "nav-clothes active" : "nav-clothes"} >
        

        <div className='nav-menu-items' onClick={showhome}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='slideclothes'>
        <span onClick={showhome} className="slideprclose"> <MdArrowBackIosNew/></span>
        <span >Back to main</span>
        </div>


        <div className='slideproductlist'>
            <h1>Home</h1>
            <h3>Shop All Home</h3>
        </div>

        <div className='navData2'>
           
                   <div className="nav2productdetail">
                       <span>Bath</span>
                       <span onClick={showClothes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Bedding</span>
                       <span onClick={showShoes}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Furniture</span>
                       <span onClick={showBeauty}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Kids Home</span>
                       <span onClick={showhome}> <MdArrowForwardIos/></span>
                   </div>
                   <div className="nav2productdetail">
                       <span>Kitchen & Dining</span>
                       <span onClick={showkids}> <MdArrowForwardIos/></span>
                   </div>       

        </div>
        <hr></hr>
        <div className='clothedetailsimg'>
           <img 
           src='https://img.shop.com/Image/header2013/US_CAN_AUS_UK_SG_MY_ENG_96815_Eng_Snap_Heavy_Duty_Concentrate_banner_300x250-img-min1642696524571.jpg'
           />
        </div>
      


    </nav>

{/* .....................................home slide end................................................ */}



{/* ...................................................3thirdslide start........................................ */}


{/* ...................................clothes............................... */}

<nav className={clothes3 ? "nav-clothes3 active" : "nav-clothes3"} >
        
        <div className='nav-menu-items' onClick={showClothes3}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='slideclothes'>
        <span onClick={showClothes3} className="slideprclose"> <MdArrowBackIosNew/></span>
        <span >Back to main</span>
        </div>


        <div className='slideproductlist'>
            <h1>Clothes</h1>
            <h3>Shop All Women's Clothing</h3>
        </div>


        <div className='navData1'>
            {navDataClothes3.map((item,index)=>{
                return (
                    <div key={index} className={item.className}>
                    <Link to={item.path}>{item.title}</Link>
                </div>
                )           
            })}
        </div>
   
       
    </nav>
{/* ..........................................clothes end......................................... */}

{/* .........................................mens start......................................... */}




<nav className={mensClothes3? "nav-clothes3 active" : "nav-clothes3"} >
        
        <div className='nav-menu-items' onClick={mensclotheshow3}>
              <Link to="#" className='menu-bars'>
                    <CgCloseO/>
              </Link>

        </div>
        <div className='slideclothes'>
        <span onClick={mensclotheshow3} className="slideprclose"> <MdArrowBackIosNew/></span>
        <span >Back to main</span>
        </div>


        <div className='slideproductlist'>
            <h1>Clothes</h1>
            <h3>Shop All Men's Clothing</h3>
        </div>


        <div className='navData1'>
            {navDataClothes3.map((item,index)=>{
                return (
                    <div key={index} className={item.className}>
                    <Link to={item.path}>{item.title}</Link>
                </div>
                )           
            })}
        </div>
   
       
    </nav>
{/* .............................................mens end............................................... */}
{/* .......................................................3rd slide end............................................... */}



      </div>

       
      </div>

     
   
    
  )
}

export default Nav
