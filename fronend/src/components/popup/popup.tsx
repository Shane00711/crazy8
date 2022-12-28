import { SyntheticEvent, useEffect, useState } from "react";
import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
export const Popup = () => {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          "Succes Message"
        </Alert>
      </Snackbar>
    });
    const handleClose = (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    return(
      <></>
    )
}