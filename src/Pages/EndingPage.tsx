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
import Winner_list from "../Components/Winner_list";
import "./EndingPage.css"
// @ts-ignore
function EndingPage({jump}) {

    function next() {
        jump(2);
    }


    const itemData = [
        { img: 'image-1.jpg', title: 'Image 1' },
        { img: 'image-2.jpg', title: 'Image 2' },
        { img: 'image-3.jpg', title: 'Image 3' },
        { img: 'image-4.jpg', title: 'Image 4' },
        { img: 'image-5.jpg', title: 'Image 5' },
        { img: 'image-6.jpg', title: 'Image 6' },
        // Add more items here...
    ];
    return (
        <Container sx={{display: "flex", flexFlow:"column" ,textAlign: "justify"}}>

            <h1>The touching Ending

            </h1>


            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/*maya edit:*/}
                <Card sx={{ width: 370, height: 240 } }>
                    <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"}
                                 name2={"Itay"} points2={240} bg2={"#EFB2B2"}
                                 name3={"Maya"} points3={150} bg3={"#c0a5ce"} />
                </Card>
                {/*<Card sx={{ width: 300, height: 300 }   }>*/}
                {/*    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>*/}
                {/*        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>*/}
                {/*            כאן נשים את רשימת המנצחים/מדרגות יפות של ניצחון*/}
                {/*        </Typography>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </Container>


            <h2 className="secnd_head" >
                Souvenirs
            </h2>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<Card sx={{ width: 370, height: 140 } }>
            <ImageList variant="masonry" cols={2} gap={10} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} >
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ backgroundColor: 'gray' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
</Card>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                <Button size={"small"} variant="text" startIcon={<GetAppIcon />}>Download</Button>
                <Button size={"small"} variant="text" startIcon={<ShareIcon/>}>Share</Button>
            </Container>

            <div>
                <h2 >
                    So What now?
                </h2>
                {/*maya edit*/}
                <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                    <Button onClick={next} variant="outlined">New adventure</Button>
                    <Button variant="outlined">Bonus mission</Button>
                    <Button variant="outlined">get dafuck outta heee</Button>
                </Container>
            </div>
        </Container>        )
}
export default EndingPage