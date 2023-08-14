import Chwazi from "../Components/Chwazi";
import "./CovenantPage.css";
import { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { onSnapshot } from "firebase/firestore";
import { PAGES } from "./GameManager";

// @ts-ignore
function CovenantPage({ curGame, curPlayer }) {
  const [numFingers, setNumFingers] = useState(0);

  let totalNumOfPlayers = curGame._players.length;
  // Updates num of players
  if (curGame && curGame._gameRef) {
    onSnapshot(curGame._gameRef, (snapshot: { data: () => any }) => {
      const data = snapshot.data();
      if (typeof data !== "undefined") {
        totalNumOfPlayers = data.players.length;
      }
    });
  }

  async function startGame() {
    if (numFingers === totalNumOfPlayers) {
      await curGame.getSecretMissionsFromDatabase();
      await curGame.getRandomMissionFromDatabase("Survival");
      await curGame.assignsAvatar();
      curGame.updateAllPlayersPages(PAGES.SECRET);
    }
  }

  return (
    <Container id={"CovenantPage_Background"} sx={{ p: 2 }}>
      <Typography variant="h5">Your game cypher : </Typography>
      <Typography variant={"h3"}>
        <strong> {curGame._id}</strong>
      </Typography>
      <Card
        sx={{
          flex: "auto",
          position: "relative",
          width: "90%",
          top: "2%",
          alignContent: "left",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography variant="h4" color={"primary"}>
            The Covenant
          </Typography>

          <Typography variant="h6">Your New Ride or Die</Typography>
          <Typography variant="h6">
            The anticipation is palpable.
            <br /> You have all gathered here together in order to plan your
            next adventure. By joining forces, you can tackle any challenge that
            lays ahead. With excited chatter and lively banter, each idea more
            exciting than the last, you all know you're in for an unforgettable
            experience. <br />
          </Typography>
          <Typography variant="h6">
            Press your finger to the square, but remember...
            <br /> No Backsies
          </Typography>
        </CardContent>
      </Card>

      <div
        id={"CovenantPage_ChwaziContainer"}
        onTouchStart={startGame}
        onTouchEnd={startGame}
        onTouchMove={startGame}
      >
        <Chwazi setNumFingers={setNumFingers} />
      </div>
    </Container>
  );
}

export default CovenantPage;
