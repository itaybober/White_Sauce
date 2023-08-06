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
        curPlayer.setPoints(0);
        curPlayer.setCurPage(PAGES.START);
    }

    const fetchWinnerName = async () => {
        const winnerNameResult = await winnerName(curGame);
        setWinner(winnerNameResult);
        // setIsDancing(true); // Start dancing after winner's name is fetched
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

            {winner && (
                <Typography variant="h2" color="primary">

                    {winner.split('').map((letter, index) => (
                        <span
                            key={index}
                            style={{
                                display: 'inline-block',
                                animation: `${winner && winner.length ? 'wave' : ''} 1s ease-in-out infinite ${
                                    index * 0.1
                                }s`,
                            }}
                        ><b>
                            {letter}</b>
            </span>
                    ))}
                </Typography>
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

            <Typography sx={{textAlign: "center"}} variant="h4" color={"primary"}><br/>Souvenirs</Typography>
            <Typography variant="h6"> Wow what an adventure we had!</Typography>



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

            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                <Button
                    variant="contained"
                    startIcon={<GetAppIcon />}
                    sx={{
                        borderRadius: '10px',
                        color: '#D1B067',
                        background: '#282c34',
                        width: '40%', // Adjust the width as needed
                    }}
                >
                    Download
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ShareIcon />}
                    sx={{
                        borderRadius: '10px',
                        color: '#D1B067',
                        background: '#282c34',
                        width: '40%', // Adjust the width as needed
                    }}
                >
                    Share
                </Button>
            </Container>


            <Typography className={"journey-txt"} variant="h5"> <br></br><br/><i> "A wonderful journey begins with <b>one step" </b>
                And you just did it!</i></Typography>

            <Container sx={{display: 'flex', justifyContent: "center", alignItems: "center", gap: '15px', p: 2}}>
                <Button className={"new-btn"} onClick={next} variant="contained">New adventure</Button>


            </Container>
            <br/>
        </Container>

    )
}

export default EndingPage;