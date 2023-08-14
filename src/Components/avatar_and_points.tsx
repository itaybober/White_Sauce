import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import mask from "../Pages/images/icon/avatar.png";
import coin from "../Pages/images/cards icons/shield.png";

// @ts-ignore
export default function Avatar_and_points({
  name = "maya",
  points,
  avatarName,
  avatarRef,
}) {
  if (name === null) {
    name = "maya";
  }
  return (
    <Container
      sx={{
        width: 310,
        // height: 120,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar alt={mask} src={avatarRef} sx={{ width: 60, height: 80 }}>
        {" "}
      </Avatar>

      <Container
        sx={{
          width: 250,
          height: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <Typography variant="h5"> {name} </Typography>
        <Card sx={{ width: 240, height: 45, borderRadius: "10px" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 45,
            }}
          >
            <Typography variant="h6">{points} coins </Typography>

            <img src={coin} style={{ width: 20, height: 20 }} />
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
