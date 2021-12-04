import { GlassCard } from "../glasscard/glasscard"
import club from "./../../club.png";
export const JoinExistingGame = () => {
    const options ={
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    };
    return(
        <GlassCard
                options={options}
                image={<img src={club} className="iconclass" alt="club" />}
                header={<h3>Join A Game</h3>}
                para={<p>To join a game you will need to know the name of the game. The creator of the game will also have  to accept your request to join.</p>}
                anchor={<a href="#/">Join</a>}
            /> 
    )
}