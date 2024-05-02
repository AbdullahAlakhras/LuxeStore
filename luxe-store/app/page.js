"use client"
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
        <body id="page">
            <header id="header">
        <div id="top-header">
            <div id="menu-logo-div">
                <button id="menu-button"><img src="../Images/icons8-menu-30.png" alt="menue-icon" onclick="toggleMenu()"/></button>
                <a href="./mainPage.html" id="main-link"> <svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
                   <text x="19" y="30" font-family="Allerta Stencil" font-size="30" fill="RGB(255, 215, 0)">Luxe Store</text>
                </svg></a>
            </div>
            <div id="menu">
                <div id="products-div" class="menu-divs">
                    <form id="products-form" action="">
                        <h3>Products</h3>
                        <input class="products-checkboxes" id="phone-ch" type="checkbox" name="product-checkboxes"/>
                        <label for="phone-ch" class="products-labels">Phones</label><br/>
                        <input class="products-checkboxes" id="headphone-ch" type="checkbox" name="product-checkboxes"/>
                        <label for="headphone-ch" class="products-labels">Headphones</label><br/>
                        <input class="products-checkboxes" id="phone-covers-ch" type="checkbox" name="product-checkboxes"/>
                        <label for="phone-covers-ch" class="products-labels">Phone Covers</label><br/>
                        <input class="products-checkboxes" id="other-ch" type="checkbox" name="product-checkboxes"/>
                        <label for="other-ch" class="products-labels">Others</label><br/>
                    </form>
                </div>
                <div id="prices-div" class="menu-divs">
                    <form action="">
                        <h3>Prices</h3>
                        <input type="radio" id="all-radio" class="prices-rd" name="prices-radio-buttons" checked/>
                        <label for="all-radio" class="prices-labels">All-Prices</label><br/>
                        <input type="radio" id="0-500-radio" class="prices-rd" name="prices-radio-buttons"/>
                        <label for="0-500-radio" class="prices-labels">0-500 &dollar;</label><br/>
                        <input type="radio" id="500-2000-radio" class="prices-rd" name="prices-radio-buttons"/>
                        <label for="500-2000-radio" class="prices-labels">500-2000 &dollar;</label><br/>
                        <input type="radio" id="2000-5000-radio" class="prices-rd" name="prices-radio-buttons"/>
                        <label for="2000-5000-radio" class="prices-labels">2000-5000 &dollar;</label><br/>
                        <input type="radio" id="5000-8000-radio" class="prices-rd" name="prices-radio-buttons"/>
                        <label for="5000-8000-radio" class="prices-labels">5000-8000 &dollar;</label><br/>
                        <input type="radio" id="8000-10000-radio" class="prices-rd" name="prices-radio-buttons"/>
                        <label for="8000-10000-radio" class="prices-labels">8000-10000 &dollar;</label><br/>
                        <input type="radio" id="more-radio" class="prices-rd" name="prices-radio-buttons"/>
                        <label for="more-radio" class="prices-labels">more ...</label><br/>
                    </form>
                </div>
                <div id="brands-div" class="menu-divs">
                    <form action="">
                        <h3>Brands</h3>
                        <input class="brands-checkboxes" type="checkbox" id="apple-ch" name="brand-checkboxes"/>
                        <label for="apple-ch" class="brands-labels">Apple</label><br/>
                        <input class="brands-checkboxes" type="checkbox" id="samsung-ch" name="brand-checkboxes"/>
                        <label for="samsung-ch" class="brands-labels">Samsung</label><br/>
                        <input class="brands-checkboxes" type="checkbox" id="sony-ch" name="brand-checkboxes"/>
                        <label for="sony-ch" class="brands-labels">Sony</label><br/>
                        <input class="brands-checkboxes" type="checkbox" id="others-ch" name="brand-checkboxes"/>
                        <label for="others-ch" class="brands-labels">Others</label><br/>
                    </form>
                </div>
                <div id="menu-button-div" >
                    <button id="filter-button" type="submit">Filter</button>
                    <button id="reset-button" type="reset">Reset</button>
                </div>
            </div>
      
            
            <div id="login-cart-div">
                <button id="mode-button"><img id="mode-icon" src="/src/Images/iconamoon--mode-light-fill.svg" alt="cart-icon"/></button>
                <button id="login-button" role="button">Login</button>
        
                <button id="cart-button"><img id="cart-icon" src="../Images/icons8-cart-30.png" alt="cart-icon"/></button>
                <label id="counter">0</label>
                
                
                
            </div>


        </div>
        

    </header>
     <div class="search">
        <div id="search-div">
            <input id="search-box" type="search" placeholder="Search"/>
            <img id="search-icon" src="../Images/icons8-search-30.png" alt="search-icon"/>

            
        </div>

        <div class="resultBox">
            
        </div>
    </div>
    <main >

        <div class="hero">
            <div id="animatedProduct">
                <img src="/src/Images/keyboard.jpg"/>
                <img src="/src/Images/products/blackShark.jpg"/>
                <img src="/src/Images/products/logitc.jpg"/>
            </div>

           <div class="text-hero">
            <h1>☀️Summer Sales☀️</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, ducimus cum architecto pariatur temporibus corrupti inventore sed illum magnam exercitationem quae adipisci hic earum voluptatibus. Laborum praesentium error deleniti nemo?</p>
            <button id="hero-btn">Start Shopping</button>
           </div>
        </div>
        <div id="main">
            {/* <div id="warningContainer" className="disp-none">
                     You need to Login First!!!
            </div> */}
        </div>

    </main>
    <footer>
        <div class="footerContainer">
         <div class="socialIcons">
             <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
             <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
             <a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
             <a href="https://www.google.com/"><i class="fa-brands fa-google-plus"></i></a>
             <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
         </div>
             <div class="ftNav">
                 <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://example.com/">News</a></li>
                    <li><a href="https://example.com/">About</a></li>
                    <li><a href="https://example.com/">Contact Us</a></li>
                    <li><a href="https://www.qu.edu.qa/sites/">University</a></li>
                 </ul>
             </div>
 
         <div class="ftBtm">
             <p>CopyRight &copy; 2024; Designed By <span class="designers">Qu Students</span></p>
         </div>
 
        </div>
        
     </footer>
          
    </body>    
    </>
  );
}
