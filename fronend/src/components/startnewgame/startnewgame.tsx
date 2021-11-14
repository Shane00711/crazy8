import {  Autocomplete, CircularProgress, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, styled, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { GameService } from "../../serivces/gameService";
import { GlassCard } from "../glasscard/glasscard"
import hearts from "./../../heart.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';

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
    const [searching, setSearching] = useState(false);
    const [gameFound, setGameFound] = useState(false);
    const [helperText, setHelperText] = useState("Enter Game Name!");
    const [players, setPlayers] = useState([{name: "", id: ""}]);
    const options ={max: 25,speed: 400,glare: true,"max-glare": 1};

    useEffect(() => {
      if(gameName.length > 4) {
        setSearching(true);
        GameService.checkGameName(gameName).then(players => {
            setHelperText(players.data.message);
            if(players) {
              if(players.data.message === "Game name already exists") {
                setGameFound(true);
              } else {
                setGameFound(false);
              }
            }
            setSearching(false);
        });
      } else {
        setHelperText("Game Name more the 4 letters!");
      }
    }, [gameName]);
    // function createNameGame() {
    //     GameService.createNewGame().then(
    //         res=>{
    //             console.log(res);
    //         }
    //     ).catch(err => {
    //         console.error(err);
    //     })
    // }

    return(
        <>
           <GlassCard options={options} 
                header={<h3>Define Your Game</h3>}
                image={<img src={hearts} className="iconclass" alt="heart" />}
                para={
                    <form>
                        <div>
                            <CssTextField id="custom-css-outlined-input"  label="Game Name" variant="outlined" value={gameName} onChange={(e) =>setGameName(e.target.value)} />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-password">Game Name</InputLabel>
                              <OutlinedInput
                                id="custom-css-outlined-input"
                                type='text'
                                value={gameName}
                                style={{color: 'red', borderColor: 'red'}}
                                onChange={(e) =>setGameName(e.target.value)}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      edge="end"
                                    >
                                      {searching ? <CircularProgress /> : gameFound ? <DangerousIcon style={{ color: 'red' }}/> : gameName?.length > 5 && !gameFound ? <CheckCircleIcon style={{ color: 'green' }} /> : null }
                                    </IconButton>
                                  </InputAdornment>
                                }
                                label="Game Name"
                              />
                              <FormHelperText id="outlined-weight-helper-text" style={gameFound ? {fontSize:"1vh", color: 'red'} : {fontSize:"1vh"}}>{helperText}</FormHelperText>
                            </FormControl>
                            {/* <CssTextField id="custom-css-outlined-input"  label="Player Name" variant="outlined" value={gameName} onChange={(e) =>setGameName(e.target.value)}/> */}
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={[players]}
                                // getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search for Player"
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