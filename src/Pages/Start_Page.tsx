import "./Start_Page.css";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import galiLogo from "./images/gali_test_logo.png";
import React, { useState } from "react";
import { PAGES } from "./GameManager";
import logo from "./step-1_logo.svg";
import page1 from './images/demo/page1.png';
import page2 from './images/demo/page2.png';
import page3 from './images/demo/page3.png';
import page4 from './images/demo/page4.png';
import page5 from './images/demo/page5.png';
import page6 from './images/demo/page6.png';
import page7 from './images/demo/page7.png';
import page8 from './images/demo/page8.png';
import page9 from './images/demo/page9.png';
import page10 from './images/demo/page10.png';
import info from './images/info.png';


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// @ts-ignore
function Start_Page({ curPlayer, logOut }) {
    const [showInstructions, setShowInstructions] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageArray = [page1, page2, page3, page4, page5, page6, page7, page8, page9,page10];

    function startPage() {
        curPlayer.setCurPage(PAGES.FILTERS);
    }

    function joinPage() {
        curPlayer.setCurPage(PAGES.JOIN);
    }

    function handleLearnHowToPlay() {
        setShowInstructions(true);
        setCurrentImageIndex(0);
    }

    function handleNextImage() {
        if (currentImageIndex < imageArray.length - 1) {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowInstructions(false);
        }
    }

    function handleDone() {
        setShowInstructions(false);
    }

    const cardStyle: React.CSSProperties = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "73%", // Reduce the maximum width of the card
        width: 400, // Reduce the card width
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px", // Add rounded corners
    };

    const instructionsImageStyle: React.CSSProperties = {
        width: "100%",
        height: "auto",
    };

    const buttonContainerStyle: React.CSSProperties = {
        marginTop: "-10px",
        marginBottom: "20px", // Move the buttons a little above the bottom of the card
    };

    const nextButtonStyle: React.CSSProperties = {
        width: "200px",
        backgroundColor: showInstructions ? "rgba(0, 0, 0, 0.87)" : "#fff", // Set the button color based on showInstructions
    };

    const infoButtonStyle = {
        position: "absolute" as "absolute", // Type assertion
        top: "20px", // Adjust the top position
        right: "20px", // Adjust the right position
        borderRadius: "50%",
        width: "48px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    };

    return (
        <div id={"StartPage_Background"}>
            <img src={logo} onClick={logOut} width={103} height={85} />
            <div id={"StartPage_Title"}>
                <Typography variant="h4"> <b>Which Journey is Yours?</b></Typography>
            </div>
            <div className={"buttons"}>
                <div
                    onClick={handleLearnHowToPlay}
                    id={"StartPage_Button_Learn"}
                    style={infoButtonStyle}
                >
                    <img src={info} alt="Info" width="35" height="35" />
                </div>
                <Button variant={"outlined"} onClick={startPage} id={"StartPage_Button_Start"}>START A TRIBE</Button>
                <Button variant={"outlined"} onClick={joinPage} id={"StartPage_Button_Join"}>JOIN A TRIBE</Button>
            </div>

            {showInstructions && (
                <Card style={cardStyle}>
                    <CardContent>
                        <img style={instructionsImageStyle} src={imageArray[currentImageIndex]} alt={`Page ${currentImageIndex + 1}`} />
                    </CardContent>
                    <div style={buttonContainerStyle}>
                        {currentImageIndex < imageArray.length - 1 ? (
                            <Button variant="outlined" onClick={handleNextImage} disabled={currentImageIndex === imageArray.length - 1} style={{ ...nextButtonStyle }} disableElevation>
                                Next
                            </Button>
                        ) : (
                            <Button variant="outlined" onClick={handleDone} style={{ ...nextButtonStyle }} disableElevation>
                                Done!
                            </Button>
                        )}
                    </div>
                </Card>
            )}
        </div>
    );
}

export default Start_Page;
