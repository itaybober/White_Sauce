import React, { useState, useRef } from 'react';
import Button from "@mui/material/Button";
import { ImageList, ImageListItem } from "@mui/material";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

interface CameraComponentProps {
    buttonText: string;
    onPictureUpload: () => void;
}

const CameraComponent: React.FC<CameraComponentProps> = ({ buttonText, onPictureUpload }) => {
    const [itemData, setItemData] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleTakePhoto = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const dataUri = reader.result as string;
                setItemData([dataUri]);
            };
            reader.readAsDataURL(file);
        }
        // Invoke the onPictureUpload function when the user uploads a picture
        onPictureUpload();
    };

    return (
        <Container className="camera_component" sx={{ p: 2 }}>
            <Button
                onClick={handleTakePhoto}
                startIcon={<AddAPhotoIcon />}
                color="info"
                variant="contained"
                size="medium"
            >
                {buttonText}
            </Button>

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                capture="environment"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
            />

            <ImageList
                variant="masonry"
                cols={2}
                gap={8}
                sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item !== null ? item : ''}>
                        {item !== null && (
                            <img
                                src={item}
                                alt={item}
                                loading="lazy"
                                style={{
                                    backgroundColor: 'gray',
                                    width: 200,
                                    height: 200,
                                    margin: 'auto'
                                }}
                            />
                        )}
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default CameraComponent;
