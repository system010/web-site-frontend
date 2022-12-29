import React from 'react'
import './MainPage.css'
import { Link } from 'react-router-dom'

export const MainPage = () => {
    return (
        <div className='League'>

            <div className='aa'>
                <div className='cart'>
                    <Link to='/seriea'>
                        <img src="248458.jpg"></img>
                    </Link>
                    <h3>الدوري الايطالي</h3>
                </div>
                <div className='cart'>
                    <Link to='/pre'>
                        <img src="prepre.png"></img>
                    </Link>
                    <h3>الدورى الانجليزى</h3>
                </div>
            </div>

            <div className='aa'>
                <div className='cart'>
                    <Link to='/egypt'>
                        <img src="الدوري المصري الممتاز.png"></img>
                    </Link>
                    <h3>الدورى المصرى</h3>
                </div>
                <div className='cart'>
                    <Link to='/Laligo' >
                        <img src="الدوري الاسباني.png"></img>
                    </Link>
                    <h3>الدورى الاسباني</h3>
                </div>
            </div>

            <div className='aa'>
                <div className='cart'>
                    <Link to='/fifa'>
                        <img src="الفيفا.png"></img>
                    </Link>
                    <h3>المنتخبات</h3>
                </div>
                <div className='cart'>
                    <Link to='/ligue1'>
                        <img src="images.png"></img>
                    </Link>
                    <h3>الدورى الفرنسى</h3>
                </div>
            </div>

        </div>
    )

}
export default MainPage
