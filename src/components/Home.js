import React from 'react'
import Me from './Me';

const Home = () => {



  return (
    <>
   <div className="home">
    <div className="txt">

        <div className="txt_t">
        <h1>RENT THE <span>BEST CAR</span>  AROUND THE WORLD</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officia velit illo odio similique quasi, quaerat veniam ratione vero atque dolor ut, iusto cupiditate qui.</h2>
        <div className="card">
            <div className="card1">
                <h3>HONDA CIVIC TYPE R</h3>
                <ul>
                    <li>Automatic</li>
                    <li>Petrol</li>
                    <li>4 Seats</li>
                </ul>

                <h3 className='prize'>RS5000</h3>
                <button>RENT NOW</button>
            </div>
            <div className="card2">
            <h3>HONDA CIVIC TYPE R</h3>
                <ul>
                    <li>Automatic</li>
                    <li>Petrol</li>
                    <li>4 Seats</li>
                </ul>
                <h3 className='prize'>RS5000</h3>
                <button>RENT NOW</button>
            </div>
        </div>
        </div>

    </div>
    <div className="img">
        
    </div>
   </div>
   <Me/>
   </>
  )
}

export default Home
