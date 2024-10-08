const videoElement = document.getElementById('video');
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream(){
    
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log("Whoops, error Here:", error);
    }
}

button.addEventListener('click', async ()=>{
    // Disable Button
    button.disabled= true;
    //Start pip
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled= false;
});
// On Load
selectMediaStream();
