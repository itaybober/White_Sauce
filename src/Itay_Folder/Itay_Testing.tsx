import React from 'react';
import "./Itay_Testing.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../Pages/images/step-1_logo.svg'
import active_logo from '../Pages/images/running.svg'
import shopping from '../Pages/images/shopping-cart.svg'
import snacks from '../Pages/images/snacks.svg'
import drinks from '../Pages/images/drink.svg'
import night from '../Pages/images/night.svg'
import sunshine from '../Pages/images/sunshine.svg'
import waves from '../Pages/images/waves.svg'
import bulb from '../Pages/images/bulb.svg'



// function card_filter({ img, text }) {
//     return(
//         <Card sx={{maxWidth: 160}} className={"card_container"}>
//             <CardActionArea>
//                 <CardMedia className={"card_media"}
//                            component="img"
//                            height="161"
//                            width = "161"
//                            image={img}
//                 />
//                 <CardContent>
//                     <Typography className={"typo_card"}>
//                         {text}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// }


function Itay_Testing() {
    return(
        <div className={"frame"}>
            <div className={"logo_container"}>
                <img src={logo} width={103} height={85}/>
            </div>
            <h2
                style={{fontSize: 40}}
            className={"text_container"}
            >
                what are you
                <br/>
                looking for?
            </h2>
            <div className={"cards_container"}>
                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia className={"card_media"}
                                    component="img"
                                    height="161"
                                    width = "161"
                                    image={active_logo}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        active
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia className={"card_media"}
                                    component="img"
                                    image={shopping}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        supplies
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia id={"drinks"}
                                    component="img"
                                    height="161"
                                    width = "161"
                                    image={drinks}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        drinks
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia className={"card_media"}
                                    component="img"
                                    height="161"
                                    width = "161"
                                    image={snacks}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        snacks
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia className={"card_media"}
                                    component="img"
                                    height="161"
                                    width = "161"
                                    image={waves}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        get wet
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia className={"card_media"}
                                    component="img"
                                    image={bulb}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        riddles
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia id={"drinks"}
                                    component="img"
                                    height="161"
                                    width = "161"
                                    image={sunshine}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        day time
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{maxWidth: 160}} className={"card_container"}>
                            <CardActionArea>
                                <CardMedia className={"card_media"}
                                    component="img"
                                    height="161"
                                    width = "161"
                                    image={night}
                                />
                                <CardContent>
                                    <Typography className={"typo_card"}>
                                        night time
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
            </div>
        </div>
    );
}

export default Itay_Testing;
