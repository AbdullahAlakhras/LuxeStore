"use client";
import "./mainPageStyle.css";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import React from 'react';

export default function Header() {
    

  
  return (
    <>
    <header id="header">
      <div id="top-header">
        <div id="menu-logo-div">
          <button id="menu-button" onClick={toggleMenu}>
            <img src="../Images/icons8-menu-30.png" alt="menu-icon"/>
          </button>
          <a href="./page.js" id="main-link">
            <svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
              <text x="19" y="30" font-family="Allerta Stencil" font-size="30" fill="RGB(255, 215, 0)">Luxe Store</text>
            </svg>
          </a>
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
          <button id="mode-button">
            <img id="mode-icon" src="/src/Images/iconamoon--mode-light-fill.svg" alt="mode-icon"/>
          </button>
          <button id="login-button" onClick={redirectLoginPage}>Login</button>
          <button id="cart-button">
            <img id="cart-icon" src="../Images/icons8-cart-30.png" alt="cart-icon"/>
          </button>
          <label id="counter">0</label>
        </div>
      </div>
      <div className="search">
        <div id="search-div">
          <input id="search-box" type="search" placeholder="Search"/>
          <img id="search-icon" src="../Images/icons8-search-30.png" alt="search-icon"/>
        </div>
        <div className="resultBox">
         
        </div>
      </div>
    </header>


  </>
  );
   
}

export async function toggleMenu(){
 let menu = document.getElementById('menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-100%'; 
    } else {
        menu.style.left = '0px'; 
    }
};

function redirectLoginPage() {
    redirect("../src/Html/mainPage.html");
}