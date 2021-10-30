import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
export const Popup = () => {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          "Succes Message"
        </Alert>
      </Snackbar>
    });
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    return(
      <></>
    )
}