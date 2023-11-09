import React from 'react'

import "./PricingCardStyles.css";
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic Website -</h3>
                <span className='bar'></span>
                <p className='btc'>600 zł</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Responsive Design -</p>
                <p>- Simple Animations -</p>
                <p>- One Language -</p>
                <Link to="/contact" className="btn">Purchase now</Link>
            </div>
        </div>
        <div className='card-container'>
            <div className='card'>
                <h3>- Premium Website -</h3>
                <span className='bar'></span>
                <p className='btc'>700 zł</p>
                <p>- 5 Days -</p>
                <p>- 6 Pages -</p>
                <p>- Responsive Design -</p>
                <p>- Advanced Animations -</p>
                <p>- One Language -</p>
                <Link to="/contact" className="btn">Purchase now</Link>
            </div>
        </div>
        <div className='card-container'>
            <div className='card'>
                <h3>- Business Website -</h3>
                <span className='bar'></span>
                <p className='btc'>2000 zł</p>
                <p>- 7 Days -</p>
                <p>- 9 Pages -</p>
                <p>- Responsive Design -</p>
                <p>- Intermediate Animations -</p>
                <p>- Multilingual -</p>
                <Link to="/contact" className="btn">Purchase now</Link>
            </div>
        </div>
    </div>
    )
}

export default PricingCard
