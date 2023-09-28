// src/components/AnimationPage.jsx

import React, { Component, useState } from 'react';
import { getTokenOrRefresh } from './token_util';
import { ResultReason, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
import { Grid, Typography, Button, Box, Avatar, CardMedia, Card, CardContent, Stack, Paper, Divider, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')


class TextToSpeech extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            inputText: 'Enter some text that you want to speak',
            audioFile: 'YourAudioFile.wav'
        }
    }

    async changeTextbox(value){
        this.state.inputText=value
        console.log(value)
    }

    async componentDidMount() {
        // check for valid speech key/region
        const tokenRes = await getTokenOrRefresh();
        if (tokenRes.authToken === null) {
            console.log("Token Null");
        }
    }
    async SpeechSynthesis(event) {

        const tokenObj = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        const audioConfig = speechsdk.AudioConfig.fromDefaultSpeakerOutput();
        const speechSynthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

        speechSynthesizer.speakTextAsync(
            this.state.inputText,
            result => {
                if (result) {
                    speechSynthesizer.close();
                    return result.audioData;
                }
            },
            error => {
                console.log(error);
                speechSynthesizer.close();
            });
        };
    

    render() {
        return (
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={6}>
                              <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={this.state.inputText}
          onChange={e => this.changeTextbox(e.target.value)} 
        />
            <Item>
                     <div className="col-6">
                     <Button variant="contained"  onClick={() => this.SpeechSynthesis()} >                
                     <Typography variant="h6" color="white">
                       Text To Speech
                     </Typography>
                   </Button>
                     </div>
              </Item>

          </Stack>

        );
    }
}
export default TextToSpeech;