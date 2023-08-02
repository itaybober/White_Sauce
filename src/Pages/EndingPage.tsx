import {ImageList, ImageListItem} from "@mui/material";

import * as React from 'react';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import GetAppIcon from '@mui/icons-material/GetApp';
import ShareIcon from '@mui/icons-material/Share';
import friends from "./Souvenirs/friends hanging out and being buddies.jpg"
import sock from "./Souvenirs/sockhands.jpg"
import rock from "./Souvenirs/ultimate rock paper scissors.jpg"
import winning from "./Souvenirs/winning.jpg"
import tangle from "./Souvenirs/tangled.jpg"
import tiger from "./Souvenirs/tiger.jpg"
import comic from "./Souvenirs/comic.jpg"
import "./EndingPage.css"
import Typography from '@mui/material/Typography';
import {PAGES} from "./GameManager";
import WinnerList from "../Components/WinnerList";
import CardContent from "@mui/material/CardContent";
import {useEffect, useState} from "react";
import mask from '../Pages/images/icon/avatar.png'
import {ref, listAll, getDownloadURL} from "firebase/storage"
import {wait} from "@testing-library/user-event/dist/utils";
import Avatar from "@mui/material/Avatar";
import {storage} from "../config/firebase";

// @ts-ignore
function EndingPage({ curPlayer, curGame }: EndingPageProps) {
    const [winner, setWinner] = useState<string | null>(null);
    const [isDancing, setIsDancing] = useState(false); // Track dancing state
    const [imageList, setImageList] = useState(new Set<string>())
    function next() {
        curPlayer.setCurPage(PAGES.START)
    }



    const fetchWinnerName = async () => {
        const winnerNameResult = await winnerName(curGame);
        setWinner(winnerNameResult);
        setIsDancing(true); // Start dancing after winner's name is fetched
    };


    // TODO fetch images should return relevant game pics
    const fetchImages = () => {
        listAll(ref(storage, `${curGame._id}/`)).then( (response) => {
            response.items.forEach( (item) => {
                getDownloadURL(item).then((url) => {
                    // @ts-ignore
                    setImageList((prev) => new Set<string>([...prev, url]))
                })
            })
        })
    }

    useEffect(() => {
        fetchWinnerName();
        fetchImages();
    }, [curGame]);


    const winnerName = async (game: any) => {
        const listItems: any[] = [];
        for (const playerRef of game._players) {
            let playerData = await game.getPlayerDataFromRef(playerRef);
            if (playerData && playerData.name) {
                listItems.push(playerData);
            } else {
                console.log('Name property not found or undefined');
            }
        }
        console.log('the name of the first item', listItems[0]?.name);
        let name = await listItems[0]?.name;
        return name || '';
    };





    const itemData = [sock, rock, friends, comic, tiger, tangle];

    return (

        <Container className={"Ending_page_component"} sx={{p: 2}}>
            <Typography variant="h5" >And the next chief is...</Typography>
            {/*<Avatar alt= "mask" src= {mask} sx={{ width: 60, height: 80 }}> </Avatar>*/}

            <Typography variant="h3" color="primary">
                        {/*// className={winner && isDancing ? 'dancing-winner' : ''}>*/}
                   <b> {winner}! </b> </Typography>
            {/*<Typography variant="h5"> <br/>Nice try everyone..</Typography>*/}
            {winner && (
                <img
                    width={60}
                    height={80}
                    src={mask}
                    alt="mask"
                    className={winner && isDancing ? 'swinging-image' : ''}
                />
            )}
<br/>

            <Card sx={{width: 330, height: 370}}>
                <CardContent sx={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    textAlign: "center"
                }}>

                    <WinnerList game={curGame}/>
                </CardContent>
            </Card>
            {/*<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
            {/*    <Card sx={{ width: 350, height: 250 }}>*/}
            {/*        <img src={winning} width={350} height={250}  style={{ borderRadius: '10px' }}/>*/}
            {/*    </Card>*/}
            {/*</Container>*/}
            <Typography sx={{textAlign: "center"}} variant="h4" color={"primary"}><br/>Souvenirs</Typography>
            <Typography variant="h6"> Wow what an adventure we had!</Typography>
            {/*{imageList.map((url) => {*/}
            {/*    return <img src={url}/>*/}
            {/*})}*/}


            <ImageList sx={{width: 350}}
                       cols={2} variant="masonry" gap={10}>
                {Array.from(imageList).map((url) => (
                    <ImageListItem key={url}>
                        <img
                            src={url}
                            loading="lazy"
                            style={{borderRadius: '10px'}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Container sx={{display: 'flex', justifyContent: "center", alignItems: "center", gap: '15px'}}>
                <Button variant="contained" startIcon={<GetAppIcon/>} style={{borderRadius: '10px'}}>Download</Button>
                <Button variant="contained" startIcon={<ShareIcon/>} style={{borderRadius: '10px'}}>Share</Button>
            </Container>


            <Typography variant="h5"> <br></br><br/><i> "A wonderful journey begins with <b>one step" </b>
                And you just did it!</i></Typography>

            <Typography variant="h4" color={"primary"}> <br></br>So what now?</Typography>
            <Typography variant="h6">We are ready for the next step!</Typography>
            <Container sx={{display: 'flex', justifyContent: "center", alignItems: "center", gap: '15px', p: 2}}>
                <Button onClick={next} variant="contained">New adventure</Button>
                <Button variant="contained">Bonus mission</Button>

            </Container>
            <br/>
            {/*<Typography variant="h6"><br/><br/>That's all for today</Typography>*/}
        </Container>

    )
}

export default EndingPage;