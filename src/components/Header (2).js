import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from '../images/restaurantfood.jpg'

const Header = () => {
    return(
        <header className='header'>
            <section>
                {/*banner texts */}
                <div className='banner'>
                  <h2>Little Lemon</h2>
                  <h3>Chicago</h3>
                  <p>we are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                  <link to="/booking"><button aria-label='on Click'>Reserve Table</button></link>
                </div>

                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />   
                </div>
            </section>
        </header>
    );
};

export default Header;