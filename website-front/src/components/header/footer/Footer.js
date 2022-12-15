import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container '>
                <div class="row ">
                    <div class="col-md-4">
                        <h3>Contact With Vamos</h3>
                        <li><a title="Home " itemprop="url "><span itemprop="name "><i class="fa fa-phone "></i> Phone : +2 01007243297 </span></a></li>
                        <li><a title="Home " itemprop="url "><span itemprop="name "><i class="fa fa-mobile "></i>  Mobile : +2 01004563097</span></a></li>
                        <li><a title="Home " itemprop="url "><span itemprop="name "><i class="far fa-envelope"></i>  E-Mail:
                            info.vamos@gmail.com</span></a></li>



                    </div>
                    <div class="col-md-3">
                        <h3>Details</h3>
                        <ul class="list-unstyled ">
                            <li><a href="about-us.php ">About Our Store </a></li>
                            <li><a href="allproducts.php">Our Collection</a></li>

                            <li><a href="contact-us.php">Contact Us </a></li>
                        </ul>
                    </div>

                    <div class="col-md-3">
                        <h3>My Account</h3>
                        <ul class="list-unstyled ">
                            <li><a href="login.php"><i class="fas fa-key"></i>Login</a></li>
                            <li><a href="regiester.php"> <i class="fas fa-lock"></i> Register</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h3> Contact With Vamos</h3>
                        <ul class="list-unstyled ">
                            <li><a href="https://www.facebook.com/CurvaEgypt/" target="_blank"><i class="fab fa-facebook-f"></i>  FaceBook : Vamos_Store</a></li>
                            <li><a href="https://twitter.com/CurvaEgypt " target="_blank"><i class="fab fa-twitter"></i> Twitter : Vamos_7</a></li>
                            <li><a href="https://www.instagram.com/curvaegypt/" target="_blank"><i class="fab fa-instagram"></i> Instagram : Vamos_store22 </a></li>
                            <li><a href="linkedin" target="_blank"><i class="fab fa-linkedin"></i>  LinkedIn : Vamos_Store</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
