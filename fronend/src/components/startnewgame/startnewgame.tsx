import {  Autocomplete, Chip, CircularProgress, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { GameService } from "../../serivces/gameService";
import { PlayerService } from "../../serivces/playerService";
import { GlassCard } from "../glasscard/glasscard"
import hearts from "./../../heart.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { useHistory } from "react-router";

interface Player {
    id: string;
    name: string;
}

export const StartNewGame = () => {
    const history = useHistory();
    const [gameName, setGameName] = useState("");
    const [searching, setSearching] = useState(false);
    const [gameAlreadyExists, setGameAlreadyExists] = useState(true);
    const [helperText, setHelperText] = useState("Enter Game Name!");
    const [players, setPlayers] = useState<readonly Player[]>([]);
    const [selectedPlayers, setSelectedPlayers] = useState<readonly Player[]>([]);
    const [search, setSearch ] = useState(""); 
    const options ={max: 25,speed: 400,glare: true,"max-glare": 1};
    const [open, setOpen] = useState(false);
    const loading = open && players.length === 0;

    useEffect(() => {
      if(gameName.length > 4) {
        setSearching(true);
        GameService.checkGameName(gameName).then((game) => {
          // setGameAlreadyExists(game.exists);
          if(game.status === 200) { 
            if(game?.data) {
              if(game.data.message === "Game name already exists") {
                setGameAlreadyExists(true);
              } else {
                setGameAlreadyExists(false);
              }
            }
          } else {
            if(game.status === 403) {
                //redirect to login page
                history.push('/login');
                return;
            }

          }
            setHelperText(game?.data?.message);
            setSearching(false);
        });
      } else {
        setHelperText("Game Name more the 4 letters!");
      }
    }, [gameName, history]);
    useEffect(() => {
      if(search?.length > 2) {
        setOpen(true); 
        PlayerService.searchPlayers(search).then(res => {
            if(res?.length > 0) {
              setPlayers(res.map((player:any) => {
                let playerObj = {} as Player;
                playerObj.id = player.id;
                playerObj.name = player.username;
                return playerObj;
              }));
            } else {
              setPlayers([]);
              setOpen(false);
            }
        });
      } else {
        setOpen(false);
      }
    } , [search]);
    useEffect(() => { 
      if(selectedPlayers.length > 0) {
        setOpen(false);
        setSearch("");
      }
    }, [selectedPlayers]);  

    const StartNewGame = () => {
      if(gameName.length > 4) {
        if(selectedPlayers.length > 0) {
          GameService.createNewGame(gameName, selectedPlayers.map(player => player.id)).then(res => {
            if(res.status === 200) {
              history.push(`/game/${res.data.gameId}`);
            }
          });
        } else {
          setHelperText("Select atleast one player!");
        }
      } else {
        setHelperText("Game Name more the 4 letters!");
      }
    }
    return(
        <>
           <GlassCard options={options} 
                header={<h3 className="header3">Define Your Game</h3>}
                image={<img src={hearts} className="iconclass" alt="heart" />}
                para={
                    <form>
                        <div>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-password">Game Name</InputLabel>
                              <OutlinedInput
                                id="custom-css-outlined-input"
                                type='text'
                                color="secondary"
                                value={gameName}
                                onChange={(e) =>setGameName(e.target.value)}
                                autoComplete="off"
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      edge="end"
                                    >
                                      {searching ? <CircularProgress /> : gameAlreadyExists ? <DangerousIcon style={{ color: 'red' }}/> : gameName?.length > 5 && !gameAlreadyExists ? <CheckCircleIcon style={{ color: 'green' }} /> : null }
                                    </IconButton>
                                  </InputAdornment>
                                }
                                label="Game Name"
                              />
                              <FormHelperText id="outlined-weight-helper-text" style={gameAlreadyExists ? {fontSize:"1vh", color: 'red'} : {fontSize:"1vh"}}>{helperText}</FormHelperText>
                            </FormControl>
                            <Autocomplete
                              id="asynchronous-demo"
                              sx={{ width: 250 }}
                              open={open}
                              isOptionEqualToValue={(option, value) => option.name === value.name}
                              getOptionLabel={(option) => option.name}
                              onChange={(e, value) => {
                                if(value !== null) {
                                  setSelectedPlayers([...selectedPlayers, value]);
                                }
                              }}
                              options={players}
                              loading={loading}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Asynchronous"
                                  onChange={(e) => setSearch(e.target.value)}
                                  InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                      <>
                                        {loading ? <CircularProgress color="primary" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                      </>
                                    ),
                                  }}
                                />
                              )}
                            />
                            {selectedPlayers.map((player:Player) => {
                              return <Chip key={player.id} label={player.name} variant="outlined" onDelete={() => {
                                setSelectedPlayers(selectedPlayers.filter((p:Player) => p.id !== player.id));
                              }} />
                            })}
                        </div>
                    </form>
                }
                anchor={<a className="btn" href="#/" onClick={()=> StartNewGame()}>Start Game</a>}
            /> 
        </>
    )
}