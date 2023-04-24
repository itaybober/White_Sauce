import { Button, Typography } from "@mui/material";

export function ThemePage() {
    return (
        <div>
            <hr />
            <Typography variant="h1">Theme page:</Typography>
            <hr />
            {/* Typography */}
            <Typography variant="h3">Typography:</Typography>
            <Typography variant="h1">h1</Typography>
            <Typography variant="h2">h2</Typography>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h4">h4</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="body2">body2</Typography>
            {/* Buttons: */}
            <hr />
            <Typography variant="h3">Buttons:</Typography>
            <Button variant="contained">button contained</Button>
            <Button variant="outlined">button outlined</Button>
            <Button variant="text">button text</Button>
        </div>
    );
}
export default ThemePage()