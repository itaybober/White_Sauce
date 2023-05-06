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
import Typography from '@mui/material/Typography';
import {grey} from "@mui/material/colors";

// @ts-ignore
function EndingPage({jump, toPage}) {

    function next() {
        jump(toPage);
    }


    const itemData = [sock,rock,friends, comic, tiger, tangle ];
    return (
         <div className={"Ending_page_component"}>
             {/*<Typography variant="h4" sx={{p:2}}> Summary</Typography>*/}
<Container sx={{p:3}}>
    <Typography variant="h3" > Achsaf wins!</Typography>
    <Typography variant="h5" > He gets 500 extra points!</Typography>
</Container>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 350, height: 250 }   }>
                        <img src={winning} width={350} height={250} />
                    </Card>
                </Container>


<Container>
                 <Typography variant="h3"><br/> Souvenirs</Typography>
                 <Typography variant="h5"> Wow what an adventure we had together!</Typography>
</Container>
                <ImageList sx={{ width: 350 }}
                           cols={2} variant="masonry" gap={10} >
                    {itemData.map((item) => (
                        <ImageListItem key={item} >
                            <img
                                src={`${item}?w=248&fit=crop&auto=format`}
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"

                                // style={{gap: 20 }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
             <Container sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: '15px'}}>
                 <Button  variant="contained" startIcon={<GetAppIcon />}>Download</Button>
                 <Button  variant="contained" startIcon={<ShareIcon/>}>Share</Button>

             </Container>


             <Container>
                 <Typography variant="h5"> <br></br><br/><i> "A wonderful journey begins with <b>one step" </b>
                     And you just did it!</i></Typography>
             </Container>


                    <Typography variant="h3"> <br></br>So What now?</Typography>
                    <Typography variant="h5">We are ready for the next step!</Typography>
                    <Container sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: '15px',p:2}}>
                        <Button onClick={next} variant="contained">New adventure</Button>
                        <Button variant="contained">Bonus mission</Button>
                    </Container>
                        <Typography variant="h5"><br/><br/>That's all for today</Typography>
             <Container sx={{ display: 'flex', justifyContent:"center",alignItems: "center", gap: '15px',p:2}}>
                 <Button  variant="contained" >Save & exit</Button>
             </Container>






            </div>

    )
}

export default EndingPage;