import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container '>
                <div class="row ">
                    <div class="col-md-4">
                        <h3>شركتنا</h3>
                        <li><a title="Home " itemprop="url "><span itemprop="name "><i class="fa fa-phone "></i> التليفون: + 01007243297 </span></a></li>
                        <li><a title="Home " itemprop="url "><span itemprop="name "><i class="fa fa-mobile "></i>  الموبيل: + 01004563097</span></a></li>
                        <li><a title="Home " itemprop="url "><span itemprop="name "><i class="far fa-envelope"></i>  الأيميل:
                            info@vamos.com</span></a></li>



                    </div>
                    <div class="col-md-3">
                        <h3>معلومات</h3>
                        <ul class="list-unstyled ">
                            <li><a href="about-us.php ">عن متجرنا</a></li>
                            <li><a href="allproducts.php">منتجاتنا</a></li>

                            <li><a href="contact-us.php">ارسل لنا</a></li>
                        </ul>
                    </div>

                    <div class="col-md-3">
                        <h3>حسابى</h3>
                        <ul class="list-unstyled ">
                            <li><a href="login.php"><i class="fas fa-key"></i>دخول</a></li>
                            <li><a href="regiester.php"> <i class="fas fa-lock"></i>تسجيل دخول</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h3>تابعنا على</h3>
                        <ul class="list-unstyled ">
                            <li><a href="https://www.facebook.com/CurvaEgypt/" target="_blank"><i class="fab fa-facebook-f"></i> فيس بوك</a></li>
                            <li><a href="https://twitter.com/CurvaEgypt " target="_blank"><i class="fab fa-twitter"></i> تويتر</a></li>
                            <li><a href="https://www.instagram.com/curvaegypt/" target="_blank"><i class="fab fa-instagram"></i> إنستغرام</a></li>
                            <li><a href="linkedin" target="_blank"><i class="fab fa-linkedin"></i> لينكد إن</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
