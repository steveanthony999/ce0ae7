import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FilledInput,
  InputAdornment,
  Button,
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles } from '@material-ui/core/styles';

const instance = axios.create();

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  fileButton: {
    background: 'none',
    '&:hover': {
      cursor: 'pointer',
      background: 'none',
    },
  },
  imageContainer: {
    marginBottom: 32,
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);

  const uploadImages = async (files) => {
    const uploader = files.map((image) => {
      const formData = new FormData();

      formData.append('file', image);
      formData.append('upload_preset', 'ujee1bqo');

      return instance.post(
        'https://api.cloudinary.com/v1_1/dknh8hdvp/image/upload',
        formData
      );
    });

    const resArr = await Promise.all(uploader);

    const urls = resArr.map((res) => res.data.url);

    setImages(urls);
  };

  const sendForm = async (e) => {
    const form = e.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: images,
    };
    await postMessage(reqBody);
    setText('');
    setSelectedImages([]);
    setImages([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedImages.length > 0) {
      uploadImages(selectedImages);
      sendForm(e);
    } else {
      sendForm(e);
    }
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        {selectedImages && (
          <Grid
            container
            spacing={2}
            alignItems='center'
            className={classes.imageContainer}>
            {selectedImages.map((image) => (
              <Grid item key={image.name}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={image}
                  width='100px'
                />
              </Grid>
            ))}
          </Grid>
        )}
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder='Type something...'
          value={text}
          name='text'
          onChange={(e) => setText(e.target.value)}
          endAdornment={
            <InputAdornment position='end'>
              <Button
                variant='text'
                component='label'
                className={classes.fileButton}>
                <FileCopyOutlinedIcon color='disabled' aria-label='add image' />
                <input
                  type='file'
                  hidden
                  onChange={(e) =>
                    setSelectedImages([...selectedImages, e.target.files[0]])
                  }
                />
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
