import React, {useState, useRef, useEffect} from 'react';
import Button from "@mui/material/Button";
import { ImageList, ImageListItem } from "@mui/material";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {storage} from "../config/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

interface CameraComponentProps {
    buttonText: string;
    onPictureUpload: () => void;
    curGameNum: string
}

const CameraComponent: React.FC<CameraComponentProps> = ({ buttonText, onPictureUpload, curGameNum }) => {
    const [itemData, setItemData] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageUpload, setImageUpload] = useState(null)


    const handleTakePhoto = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };


    const displayImage = () => {
        if (imageUpload) {
            const reader = new FileReader();
            reader.onload = () => {
                const dataUri = reader.result as string;
                setItemData([dataUri]);
            };
            reader.readAsDataURL(imageUpload);
        }
    }

    const uploadImage = () => {
        if (imageUpload === null) return;
        // @ts-ignore
        const imageRef = ref(storage, `${curGameNum}/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then(() => console.log("Uploaded Image"))
        onPictureUpload();

    }

    // uploads and displays the selected image
    useEffect(() => {
        displayImage();
        uploadImage()
        // Invoke the onPictureUpload function when the user uploads a picture
    }, [imageUpload])


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
            <br/>
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                capture="environment"
                style={{ display: "none" }}
                onChange={(event) => {
                    // @ts-ignore
                    setImageUpload(event.target.files[0]);
                }}
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
                                    margin: 'auto',
                                    borderRadius: 20
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
