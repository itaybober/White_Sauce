
import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function GroupMission({ jump }: { jump: (arg: number) => void }) {

    function next(){
        jump(6)
    }

    return (
        <div >
            <div>
                <h1> Group mission!</h1>
            </div>


            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 300, height: 300 }   }>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                            This is the FUCKING group mission so just do it:
                            Go to the bathroom
                            take a massive massive piece of toilet, and come back
                        </Typography>
                    </CardContent>
                </Card>
            </Container>


            <Typography variant="subtitle2"  >מי שלא משחק אפס מאופס  </Typography>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                <Button variant="contained" startIcon={<AddAPhotoIcon />}>Take a Picture</Button>
            </div>
זג

            <Button onClick={next}  variant="contained" color="primary" size={"medium"} sx={{
                mb: 2,
                position: 'fixed',
                bottom: 0,
                right: 0,
            }} >Next</Button>

        </div>

    )
}

