import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

const getPointData = async (game: {
  _players: any;
  getPlayerDataFromRef: (arg0: any) => any;
}) => {
  const listItems = [];
  for (const playerRef of game._players) {
    let playerData = await game.getPlayerDataFromRef(playerRef);
    if (playerData && playerData.name) {
      listItems.push(playerData);
    } else {
      console.log("Name property not found or undefined");
    }
  }
  console.log(listItems);
  return listItems;
};

// @ts-ignore
export default function WinnerList({ game }) {
  const [listItems, setListItems] = useState([]);
  const compareByPoints = (a: { points: any }, b: { points: any }) => {
    const pointsA = a.points;
    const pointsB = b.points;
    return pointsB - pointsA;
  };

  useEffect(() => {
    const fetchPointData = async () => {
      const pointData = await getPointData(game);
      const sortedPointData = pointData.sort(compareByPoints);
      // @ts-ignore
      setListItems(sortedPointData);
    };

    fetchPointData();
  }, [game]);
  console.log("list item", listItems);

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 200, color: "background.paper" }}>
        {listItems.map((item: any, index) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={item.avatar}
                src={item.avatarRef}
                sx={{ width: 40, height: 50 }}
              >
                {" "}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              key={index}
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    variant="h5"
                    color="text.primary"
                  >
                    {item.name}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.points}
                  </Typography>
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
