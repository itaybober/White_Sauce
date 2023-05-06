import {IconButton, ImageList, ImageListItem, LinearProgress, TextField} from "@mui/material";
import * as React from 'react';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import GetAppIcon from '@mui/icons-material/GetApp';
import ShareIcon from '@mui/icons-material/Share';
import friends from "./Souvenirs/friends hanging out and being buddies.jpg"
import sock from "./Souvenirs/sockhands.jpg"
import rock from "./Souvenirs/ultimate rock paper scissors.jpg"
import itay from "./Souvenirs/criptai.jpg"
import winning from "./Souvenirs/winning.jpg"
import tangle from "./Souvenirs/tangled.jpg"
import tiger from "./Souvenirs/tiger.jpg"
import comic from "./Souvenirs/comic.jpg"
import Background from "../Components/Background";
import "./EndingPage.css"


// @ts-ignore
function EndingPage({jump, toPage}) {

    function next() {
        jump(toPage);
    }


    const itemData = [  itay, sock,rock,friends, comic, tiger, tangle ];
    return (
         <div className={"Ending_page_component"}>
                <h1>
                    Achsaf Wins
                </h1>

                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300 }   }>
                        <img src={winning} width={450} height={305}/>
                    </Card>
                </Container>

                <h2 className="secnd_head" >
                    Souvenirs
                </h2>

                <ImageList cols={2} variant="masonry" >
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

                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
                    <Button variant="contained" startIcon={<GetAppIcon />}>Download</Button>
                    <Button variant="contained" startIcon={<ShareIcon/>}>Share</Button>
                </Container>

             <div className="button-container">
                 <h2>So What now?</h2>
                 <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', padding: '20px'}}>
                     <Button onClick={next} variant="contained">New adventure</Button>
                     <Button variant="contained">Bonus mission</Button>
                 </Container>
             </div>



            </div>

    )
}

export default EndingPage;