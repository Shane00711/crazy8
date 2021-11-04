import {  Autocomplete, styled, TextField } from "@mui/material";
import { useState } from "react";
import { GameService } from "../../serivces/gameService";
import { GlassCard } from "../glasscard/glasscard"
import hearts from "./../../heart.png";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'red',
  },
  '& label': {
    color: '#ff000099',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiFormHelperText-root' :{
    '& p': {
    "font-weight": "400",
    "font-size": "0.75rem"
    }
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red',
      color: 'red'
    },
    '& input': {
      color: 'red'
    },
    '&.Mui-focused input': {
      color: 'red'
    },
  },
  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  }
});
export const StartNewGame = () => {
    const [gameName, setGameName] = useState("");
    const [players, setPlayers] = useState([]);
    const options ={
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    };

    function createNameGame() {
        GameService.createNewGame().then(
            res=>{
                console.log(res);
            }
        ).catch(err => {
            console.error(err);
        })
    }

    return(
        <>
           <GlassCard options={options} 
                header={<h3>Define Your Game</h3>}
                image={<img src={hearts} className="iconclass" alt="heart" />}
                para={
                    <form onSubmit={createNameGame}>
                        <div>
                            <CssTextField id="custom-css-outlined-input"  label="Game Name" variant="outlined" value={gameName} onChange={(e) =>setGameName(e.target.value)}/>
                            <CssTextField id="custom-css-outlined-input"  label="Player Name" variant="outlined" value={gameName} onChange={(e) =>setGameName(e.target.value)}/>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={[players]}
                                // getOptionLabel={(option) => option.title}
                                defaultValue={[]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="filterSelectedOptions"
                                    placeholder="Favorites"
                                />
                                )}
                            />
                        </div>
                    </form>
                }
                anchor={<a href="#/">Start Game</a>}
            /> 
        </>
    )
}