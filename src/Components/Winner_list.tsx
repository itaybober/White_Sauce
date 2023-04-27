import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// let player_dict: Dict<any>={};
//
// // @ts-ignore
// function update_win_list({name,points}){
//     return (
//     player_dict[name]=points
//     )
//         }


// @ts-ignore
export default function Winner_list({name1, points1, bg1 ,name2, points2,bg2,name3, points3,bg3}) {
    return (
        <List sx={{ width: '100%', maxWidth: 200, color: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        sx={{ bgcolor: bg1 }}>
                        {name1.slice(0, 2)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ color: "#ececec" }} primary={name1} secondary={points1} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        sx={{ bgcolor: bg2 }}>
                        {name2.slice(0, 2)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ color: "#ececec" }} primary={name2} secondary={points2} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{bgcolor: bg3}}>
                        {name3.slice(0, 2)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ color: "#ececec" }} primary={name3} secondary={points3} />
            </ListItem>
        </List>
    );
}