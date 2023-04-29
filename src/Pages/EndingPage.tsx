import {IconButton, ImageList, ImageListItem, LinearProgress, TextField} from "@mui/material";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from "@mui/material/Container";
import GetAppIcon from '@mui/icons-material/GetApp';
import ShareIcon from '@mui/icons-material/Share';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import friends from "./Souvenirs/friends hanging out and being buddies.jpg"
import sock from "./Souvenirs/sockhands.jpg"
import rock from "./Souvenirs/ultimate rock paper scissors.jpg"
import itay from "./Souvenirs/criptai.jpg"




// @ts-ignore
function EndingPage({jump, toPage}) {

    function next() {
        jump(toPage);
    }


    const itemData = [  itay, sock,rock,friends ];
    return (
        <div>
            <h1>
                The Touching Ending

            </h1>

            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 300, height: 300 }   }>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                            כאן נשים את רשימת המנצחים/מדרגות יפות של ניצחון
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            <h2 className="secnd_head" >
                Souvenirs
            </h2>

            <ImageList cols={2}  >
                {itemData.map((item) => (
                    <ImageListItem key={item} >
                        <img
                            src={`${item}?w=248&fit=crop&auto=format`}
                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item}
                            loading="lazy"
                            style={{ backgroundColor: 'gray' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                <Button variant="contained" startIcon={<GetAppIcon />}>Download</Button>
                <Button variant="contained" startIcon={<ShareIcon/>}>Share</Button>
            </Container>

            <div>
                <h2 >
                    So What now?
                </h2>
                <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                    <Button onClick={next} variant="contained">New adventure</Button>
                    <Button variant="contained">Bonus mission</Button>
                    <Button variant="contained">get da fuck outta heee</Button>
                </Container>
            </div>



        </div>
        )
}

export default EndingPage;