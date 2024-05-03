import "./mainPageStyle.css";
import React from 'react';
export default function Main(){
    return (
        <>
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
                {/* <div id="warningContainer" style={{display:"warning"}}>
                        You need to Login First!!!
                </div> */}
            </div>

    </main>
        </>
    );
}