// src/components/AnimationPage.jsx

import React, { Component } from 'react';
import { getTokenOrRefresh } from './token_util';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import { Grid, Typography, Button, Box, Avatar, CardMedia, Card, CardContent, Stack, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

class TTS extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayText: 'INITIALIZED: ready to test speech...'
        }
    }


    async componentDidMount() {
        // check for valid speech key/region
        const tokenRes = await getTokenOrRefresh();
        if (tokenRes.authToken === null) {
            console.log("Token Null");
        }
    }

    async sttFromMic() {
        console.log("Running tts"); // undefined
        this.setState({
            displayText: 'Starting tts'
        });
        try {

            const tokenObj = await getTokenOrRefresh();
            const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
            speechConfig.speechRecognitionLanguage = 'en-US';
            const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
            const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

            this.setState({
                displayText: 'speak into your microphone...'
            });
            
            recognizer.recognizeOnceAsync(result => {
                let displayText;
                if (result.reason === ResultReason.RecognizedSpeech) {
                    displayText = `RECOGNIZED: Text=${result.text}`
                } else {
                    displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
                }
    
                this.setState({
                    displayText: displayText
                });
            });
          }
          catch(err) {
            this.setState({
                displayText: "Error " + err
            });
            throw "Error";
        }



    }

    async fileChange(event) {
        const audioFile = event.target.files[0];
        console.log(audioFile);
        const fileInfo = audioFile.name + ` size=${audioFile.size} bytes `;

        this.setState({
            displayText: fileInfo
        });

        const tokenObj = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
        speechConfig.speechRecognitionLanguage = 'en-US';

        const audioConfig = speechsdk.AudioConfig.fromWavFileInput(audioFile);
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        recognizer.recognizeOnceAsync(result => {
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                displayText = `RECOGNIZED: Text=${result.text}`
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }

            this.setState({
                displayText: fileInfo + displayText
            });
        });
    }

      render() {
        return (
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={6}>
            <Item>
                     <div className="col-6">
                     <Button variant="contained"  onClick={() => this.sttFromMic()} >                
                     <Typography variant="h6" color="white">
                       Use Microphone
                     </Typography>
                   </Button>
                         <i className="fas fa-microphone fa-lg mr-2" ></i>
                         Convert speech to text from your mic.

                       <div className="mt-2">
                       <Button variant="contained"  onClick={() => this.fileChange()} >                
                     <Typography variant="h6" color="white">
                       From File
                     </Typography>
                   </Button>
                            <label htmlFor="audio-file"><i className="fas fa-file-audio fa-lg mr-2"></i></label>
                            <input 
                                type="file" 
                                 id="audio-file" 
                                 onChange={(e) => this.fileChange(e)} 
                                 style={{display: "none"}} 
                             />
                             Convert speech to text from an audio file.
                         </div>
                     </div>
              </Item>
            <Item>
              <Typography variant="h6">
              {this.state.displayText}
              </Typography>
            </Item>
          </Stack>

        );
    }
}
export default TTS;