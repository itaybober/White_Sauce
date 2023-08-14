import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import * as React from "react";
import "./Punishment_Page.css";
import Avatar_and_points from "../Components/avatar_and_points";
import Flippable_card from "../Components/Flippable_card";
import { PAGES } from "./GameManager";
import secret from "./images/cards icons/card11.png";
import ToggleReady from "../Components/ToggleReady";

// @ts-ignore
export default function Secret_Mission({ curPlayer, curGame }) {
  const The_Worst_player = "Guy";
  const The_Game_Manager_player = "Itay";
  const The_Prettiest_player = "Maya";
  const The_Player = "Achsaf";

  const mission_object = curPlayer._secretMission;

  const handleNext = () => curGame.updateAllPlayersPages(PAGES.SURV);

  // @ts-ignore
  return (
    <Container className={"punishment_page_component"}>
      <Avatar_and_points
        name={curPlayer._name}
        points={curPlayer._points}
        avatarName={curPlayer._avatar}
        avatarRef={curPlayer._avatarRef}
      />
      <Flippable_card
        back_content={
          <div>
            <CardContent
              sx={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" color={"primary"}>
                {" "}
                <b> {mission_object.title}</b>
              </Typography>
              <br />
              <Typography variant="h6">{mission_object.description}</Typography>
            </CardContent>
          </div>
        }
        front_content={
          <div>
            <CardContent
              sx={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={secret}
                style={{ width: 180, height: 200, opacity: 0.7 }}
              />
              <br />
              <Typography variant={"h4"}>
                {" "}
                <b>Secret Mission</b>
              </Typography>
              <Typography variant={"h6"}>
                {" "}
                Make sure no one is peeking, then click to reveal your secret
                mission
              </Typography>
            </CardContent>
          </div>
        }
      />

      <ToggleReady curGame={curGame} handleNext={handleNext} />
    </Container>
  );
}
