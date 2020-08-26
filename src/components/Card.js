import React from 'react';

import './Card.scss';
import cardCover from '../assets/images/card-cover.png';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';

const Card = () => {
    return (
        <div className="container">
            <div href="google.com" className="game">
            <div className="rank">3</div>
            <div className="front">
                <img className="thumbnail" src={cardCover} alt="card-cover" ></img>
                <h3 className="name">Card name</h3>
                <div className="stats">
                    <p className="viewers">539.8k</p>
                    <div className="streamers">
                        <img src={user1} alt="user"></img>
                        <img src={user2} alt="user"></img>
                        <img src={user3} alt="user"></img>
                    </div>
                </div>
            </div>

            <div className="back" >
                <div className="streaming-info">
                    <p className="game-stat">559k<span>Watching</span></p>
                    <p className="game-stat">25.8k<span>Streams</span></p>
                </div>
                <button className="btn">See more</button>
                <div className="streamers">
                    <div className="streamer"> 
                        <div className="icon"><img src={user1} alt=""></img></div>
                        <p className="name">Name 1</p>
                        <p className="number">33</p>
                    </div>
                    <div className="streamer">
                        <div className="icon"><img src={user2} alt=""></img></div>
                        <p className="name">Name 2</p>
                        <p className="number">396</p>
                    </div>
                    <div className="streamer">
                        <div className="icon"><img src={user3} alt=""></img></div>
                        <p className="name">Name 3</p>
                        <p className="number">123</p>
                    </div>
                </div>
            </div>

            <div className="background">
            </div>
        </div>
        </div>
        
    )
}

export default Card