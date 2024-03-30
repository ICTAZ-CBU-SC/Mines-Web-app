import { useEffect } from "react";

const MapComp = () => {
    function updateVideoFeed() {
        const video = document.getElementById('video_feed');
        video.src = "http://192.168.0.103:5000/video_feed/1"; // Set the source to the video feed endpoint
    }

    useEffect(() => {
        updateVideoFeed()
    }, [])
    return(
        <>
            <div>
                <div className="d-flex  justify-content-center">
                    <div className="bg-secondary p-4 d-flex justify-content-center rounded-3 shadow-sm">
                    <img id="video_feed" style={{height:'100%'}} src="#" alt="Video Feed"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapComp;