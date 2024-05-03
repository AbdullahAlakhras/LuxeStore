import "./mainPageStyle.css";
export default function Footer(){
    return <footer>
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
                    <li><a href="/src/Html/mainPage.html">Home</a></li>
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
}