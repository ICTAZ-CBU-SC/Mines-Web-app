import { useEffect } from "react";

// render video feed in here
const VideoFeed = () => {

    function updateVideoFeed() {
        var video = document.getElementById('video_feed');
        video.src = "http://192.168.0.100:5000/video_feed"; // Set the source to the video feed endpoint
        video.onload = function() {
            this.play(); // Start playing the video
        };
    }

    useEffect(() => {
        updateVideoFeed
    }, [])
    

    return(
        <>
            <div>
                        <img id="video_feed" src="#" alt="Video Feed"/>
                <div>
                    <div  className=" rounded-3 shadow-sm" style={{height:"500px", width:'100%', overflow: "scroll"}}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoFeed;