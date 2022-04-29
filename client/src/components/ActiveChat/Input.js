import React, { useState } from 'react';
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
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const uploadFiles = async (file) => {
    const instance = axios.create();

    const formData = new FormData();
    formData.append('file', file[0]);
    formData.append('upload_preset', 'ujee1bqo');

    const res = await instance.post(
      'https://api.cloudinary.com/v1_1/dknh8hdvp/image/upload',
      formData
    );

    // console.log(res.data);
    setImages([...images, res.data.url]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
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
    setImages([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <Grid
          container
          spacing={2}
          alignItems='center'
          className={classes.imageContainer}>
          {images.map((image) => (
            <Grid item key={image}>
              <img src={image} alt={image} width='100px' />
            </Grid>
          ))}
        </Grid>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder='Type something...'
          value={text}
          name='text'
          onChange={handleChange}
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
                  onChange={(e) => uploadFiles(e.target.files)}
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
