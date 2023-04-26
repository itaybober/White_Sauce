import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


// @ts-ignore
export default function Winner_list({name1, points1, bg1 ,name2, points2,bg2,name3, points3,bg3, name4, points4,bg4}) {
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
                    <Avatar sx={{bgcolor: bg4}}>
                        {name4.slice(0, 2)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ color: "#ececec" }} primary={name4} secondary={points4} />
            </ListItem>
        </List>
    );
}