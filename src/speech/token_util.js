import axios from 'axios';
import Cookie from 'universal-cookie';

export async function getTokenOrRefresh() {
    console.log("Test")
    const cookie = new Cookie();
    const speechToken = cookie.get('speech-token');


    if (speechToken === undefined) {
        try {
            console.log("Test 1")
            const res = await axios.get("http://localhost:5170/Voices")
            .then(response => { 
                console.log(response)
                const token = response.data.token;
                const region = response.data.region;
                cookie.set('speech-token', region + ':' + token, {maxAge: 540, path: '/'});
                
                console.log('Token fetched from back-end: ' + token);
                return { authToken: token, region: region };
            })
            .catch(error => {
                console.log(error.response)
            });

        } catch (err) {
            console.log('Token Error ' + err.response.data);
            return { authToken: null, error: err.response.data };
        }
    } else {
        console.log('Token fetched from cookie: ' + speechToken);
        const idx = speechToken.indexOf(':');
        return { authToken: speechToken.slice(idx + 1), region: speechToken.slice(0, idx) };
    }
}