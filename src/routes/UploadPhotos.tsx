import {
    Box,
    Button,
    Container,
    FormControl,
    Heading,
    Input, useToast,
    VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {createPhoto, getUploadURL, IUploadImageVariables, uploadImage} from "../api";
import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";

interface IForm {
    file: FileList;
}

interface IUploadURLResponse {
    id : string;
    uploadURL: string;
}

export default function UploadPhotos() {

    const { register, handleSubmit, watch, reset } = useForm<IForm>();
    const uploadURLMutation = useMutation({
        mutationFn : getUploadURL,
        onSuccess : (data: IUploadImageVariables) => {
            uploadImageMutaion.mutate({
                uploadURL: data.uploadURL,
                file: watch("file"),
            })
        }

    })

    const uploadImageMutaion = useMutation({
        mutationFn : uploadImage,
        onSuccess: ({result} : any) => {
            if (roomPk)
                createPhotoMutation.mutate({
                    description : "",
                    file : `https://imagedelivery.net/Eq6m1t43ShRne8bJzYLyog/${result.id}/public`,
                    roomPk
                });
        }
    });

    const createPhotoMutation = useMutation({
        mutationFn : createPhoto,
        onSuccess: () => {
            toast({
                status : "success",
                title : "Image Uploaded",
                description: "Feel free to upload more images"
            })
            reset();
        }
    })

    const onSubmit = (data: any) => {
        uploadURLMutation.mutate();
    };

    const { roomPk } = useParams();
    const toast = useToast();

    useHostOnlyPage();

    return (
        <ProtectedPage>
            <Box
                pb={40}
                mt={10}
                px={{
                    base: 10,
                    lg: 40,
                }}
            >
                <Container>
                    <Heading textAlign={"center"}>Upload a Photo</Heading>
                    <VStack
                        as="form"
                        onSubmit={handleSubmit(onSubmit)}
                        spacing={5}
                        mt={10}
                    >
                        <FormControl>
                            <Input {...register("file")} type="file" accept="image/*" />
                        </FormControl>
                        <Button isLoading={createPhotoMutation.isPending || uploadImageMutaion.isPending || uploadURLMutation.isPending} type="submit" w="full" colorScheme={"red"}>
                            Upload photos
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </ProtectedPage>
    );
}