import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {text} from "stream/consumers";
import {Game} from './Classes'
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";

// let player_dict: Dict<any>={};
//
// // @ts-ignore
// function update_win_list({name,points}){
//     return (
//     player_dict[name]=points
//     )
//         }
const getPointData = async (game: { _players: any; getPlayerDataFromRef: (arg0: any) => any; }) => {
    const listItems = [];
    for (const playerRef of game._players) {
        let playerData = await game.getPlayerDataFromRef(playerRef);
        if (playerData && playerData.name) {
            listItems.push(playerData);
        } else {
            console.log('Name property not found or undefined');
        }
    }
    console.log(listItems);
    return listItems;
};

// @ts-ignore
export default function WinnerList({ game }) {
    const [listItems, setListItems] = useState([]);





    useEffect(() => {
        const fetchPointData = async () => {
            const pointData = await getPointData(game);
            // @ts-ignore
            setListItems(pointData);
        };

        fetchPointData();
    }, [game]);

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 200, color: 'background.paper' }}>
                {listItems.map((item:any, index) => (
                    <ListItem>
                    <ListItemText key={index}
                                  primary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant="h5"
                                        color="text.primary"
                                    >
                                        {item.name}
                                    </Typography>
                                </React.Fragment>}

                                  secondary={<React.Fragment>
                                      <Typography
                                          sx={{ display: 'inline' }}
                                          variant="body2"
                                          color="text.secondary"
                                      >
                                          {item.points}
                                      </Typography>
                                  </React.Fragment>}

                        ></ListItemText>
                    </ListItem>))
                }
                </List>
        </div>
    );
}




