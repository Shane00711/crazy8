
import './launchgame.scss';
import hearts from "./../../heart.png";
import club from "./../../club.png";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
export const LaunchGame = () => {
    const options ={
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    };
    return(
        <div className="launchContainer">
            <Tilt options={options} 
                header={<h3>Start New Game</h3>} 
                image={<img src={hearts} className="iconclass" alt="heart" />}
                para={<p>When starting a new game you will need one other person to play with. Please make sure the other person is also registered on the game.</p>}
                anchor={<a href="#/">Start New</a>}
            />
            
            <Tilt
                options={options}
                image={<img src={club} className="iconclass" alt="club" />}
                header={<h3>Join A Game</h3>}
                para={<p>To join a game you will need to know the name of the game. The creator of the game will also have  to accept your request to join.</p>}
                anchor={<a href="#/">Join</a>}
            />
        </div>
    )
}

function Tilt(props: any) {
    const {options, ...rest} = props;
    const card = useRef({} as any);
    useEffect(() => {
         VanillaTilt.init(card.current, options);
    }, [options])
    return(
        <div className="glasscard" ref={card}>
            <div className="glasscontent">
                {rest.image}
                {rest.header}
                {rest.para}
                {rest.anchor}
            </div>
        </div>
    );
}