import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { PAGES } from "../Pages/GameManager";
import DoubleToggleReady from "./DoubleToggleReady";
import { useState } from "react";

export default function AlertDialog({ curPlayer, curGame }: any) {
  const [open, setOpen] = React.useState(false);
  const [userAnswer, setUserAnswer] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // Transition to the next page
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    setUserAnswer(true);
    curPlayer.setPoints(curPlayer._points + 1500);
    curGame.addPointsSinglePlayer(curPlayer, curGame, 0, "Group");
  };
  const handleNo = () => {
    setUserAnswer(true);
    curGame.addPointsSinglePlayer(curPlayer, curGame, 0, "Group");
  };

  const handleNext = () => {
    curGame.updateAllPlayersPages(PAGES.END);
  };

  return (
    <div className={"dialog-container"}>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        size={"medium"}
        sx={{
          mb: 4,
          textTransform: "none",
          fontSize: "20px",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#D1B067",
        }}
      >
        Finish!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#393948",
            borderRadius: 10,
            padding: 10,
          },
        }}
      >
        {!userAnswer && (
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              textAlign: "center",
            }}
          >
            {" Did you succeed in the secret mission?"}
          </DialogTitle>
        )}
        <DialogActions>
          <DoubleToggleReady
            curGame={curGame}
            handleNext={handleNext}
            handleYes={handleYes}
            handleNo={handleNo}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
