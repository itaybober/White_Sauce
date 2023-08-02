import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";
import { useState } from "react";
import Background_loser from "../Components/Background-loser";
import Avatar_and_points from "../Components/avatar_and_points";

// @ts-ignore
export default function Secret_Point({ curPlayer, curGame }) {
    const [itemData, setItemData] = useState([]);

    return (
        <Container
            className="punishment_page_component"
            style={{ overflowX: 'hidden', height: '100%' }}
        >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} avatarName={curPlayer._avatar} avatarRef={curPlayer._avatarRef}/>

            <Typography
                variant="h6"
                gutterBottom
                style={{ marginTop: '25%' }}
            >
                Did you succeed in your secret mission?
            </Typography>

            <div style={{ marginTop: '10%' }}>
                <Button
                    // onClick={() => curPlayer.setCurPage(PAGES.END)}
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ marginRight: '50px' }}
                >
                    No
                </Button>
                <Button
                    // onClick={() => curPlayer.setCurPage(PAGES.END)}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Yes
                </Button>
            </div>
        </Container>
    );
}
