import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {PAGES} from "../Pages/GameManager";
import {Game, Player} from "../Components/Classes";


export default function AlertDialog({ curPlayer, curGame }: any) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        curGame.addPointsSinglePlayer(curPlayer, curGame, 0, "Secret")
        setOpen(true);
        // Transition to the next page
    };

    const handleClose = () => {
        curGame.addPointsSinglePlayer(curPlayer, curGame, 0, "Secret", false)
        setOpen(false);

    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                finish?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

                PaperProps={{
                    style: {
                        backgroundColor: "#393948",
                        borderRadius:10
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {" Did you succeed in the secret mission?"}
                </DialogTitle>
                {/*<DialogContent>*/}
                {/*    <DialogContentText id="alert-dialog-description">*/}
                {/*        Let Google help apps determine location. This means sending anonymous*/}
                {/*        location data to Google, even when no apps are running.*/}
                {/*    </DialogContentText>*/}
                {/*</DialogContent>*/}
                <DialogActions>
                    <Button variant={"outlined"} onClick={handleClose}>No</Button>
                    <Button variant={"outlined"} onClick={handleClose} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}