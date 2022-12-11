import React from 'react'

import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  
  
  return (
    <div className='navbar'>
        <nav>
            <div className='logo'>
                <img src="https://www.citypng.com/public/uploads/small/31631799412xg0zq63w2tclstf64xm3odyf1cn113nxe0jhnk6qy849gavqjqcu7421aita9up85qcex959gvmztmpd21d7nd0erebdm1simlke.png" height="40px" width="60px" />
            </div>
          <div className='searchbar'>
          <input type="search"   placeholder='Search Here for cloths'/> 
          
          <SearchIcon />        
          
          </div>  
        
        <div >
        
        <Link to="/"><h4 className='navtext'>Home</h4></Link>  
        </div>
          
        <div >
      <Link to="/signin">
      <h4  className='navtext'>Sign-In </h4>  
      </Link>
        </div>
          
           <div  >
            <Link to="/shopping"><h4 className='navtext'>Shopping</h4> </Link>
          
            </div>
           
           <div  >
            <Link to="/about"><h4 className='navtext'>About</h4></Link>
           
            </div>
         
       
          
        </nav>
        
      <section className='backgroundimg' >
      
        
       <div className='image'>
       <img id="zoom" src="https://cdn.dribbble.com/users/980520/screenshots/6509340/let_s_zoom.png?compress=1&resize=400x300&vertical=top" alt="no img"/>
       
       </div>
   <br/><br/><br/><br/>
       <div className='homeimg'>
        
       
       <div className='homedownimg'>
        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/6/y/v/m-hr3213-adidas-original-imaghw9fwq42qduc.jpeg?q=70" alt="no img" height="200px" width="200px"/>
        <h1>Men T-shirt</h1>      
       </div >
       <div className='homedownimg'>
        <img src="https://rukminim1.flixcart.com/image/612/612/l3hmwsw0/t-shirt/b/p/a/xl-723-2-5-6-7-ftx-original-imagehzum74awgby.jpeg?q=70" alt="" height="200px" width="200px" />
        <h1>Men T-shirt</h1>
       </div>
       <div className='homedownimg'>
       <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/o/o/y/l-ku-alka-purple-piludi-original-imagkce83w2fdgyv.jpeg?q=70" alt=""  height="200px" width="200px" /><br/>
       <h1>Women Wears</h1>
       </div>
       <div className='homedownimg'>
       <img src="https://rukminim1.flixcart.com/image/612/612/l23mhzk0/sari/a/6/f/free-2331s805-2329s781-2331s801-samah-unstitched-original-imagdgtkhcphhzbw.jpeg?q=70" alt="" height="200px" width="200px" />
       <h1>Women Saree</h1>
       </div>
       </div>
      
       
        </section>    

    </div>
  )
}

export default Home

