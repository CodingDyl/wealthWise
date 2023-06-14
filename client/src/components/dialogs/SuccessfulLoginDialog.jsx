import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VerifiedIcon from '@mui/icons-material/Verified';

function SuccessfulLoginDialog({open, handleClose, user}) {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="WhatsAppGpt"
        aria-describedby="Welcome to WhatsAppGpt"
        user={user}
      >
        <DialogTitle className="items-center bg-black-200 text-secondary border-b-2 border-secondary">
          {`Welcome to WhatsAppGpt, ${user}!`}
        </DialogTitle>
        <DialogContent className="bg-black-200 text-secondary border-b-2 border-secondary" >
          <div className="flex flex-col justify-around items-center text-secondary py-10 sm:gap-2 md:gap-10 ">
            <VerifiedIcon fontSize="large" />
            <p>You have successfully signed up in!</p>
         </div>
        </DialogContent>
        <DialogActions className="bg-black-200 flex justify-center items-center m-auto w-[100%]">
          <Button onClick={handleClose} variant="outlined" autoFocus sx={{ background: "#00B700", color: "white", "&:hover": {background: "transparent", color: "#00B700", border: "2px solid #00B700"}, margin: "0 auto"}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default SuccessfulLoginDialog