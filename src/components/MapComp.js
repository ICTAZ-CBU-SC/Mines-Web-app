import axios from "axios";
import { useEffect, useState } from "react";
import subimg from './images/Untitled-1.svg'

const MapComp = () => {
    const [imageState, setImageState] = useState(false)

    function updateVideoFeed() {
        const video = document.getElementById('video_feed');
        video.src = "http://192.168.0.103:5000/video_feed/1"; // Set the source to the video feed endpoint
    }


    useEffect(() => {
        
        axios.get('http://192.168.0.103:5000/video_feed/1')
            .then((res) => {
                setImageState(true)
                updateVideoFeed()
            })
            .catch((err) => {

            })
    }, [])

    return (
        <>
            <div>
                <div className="d-flex  justify-content-center">
                    {imageState ?
                        <>
                            <div className="bg-secondary p-4 shadow-sm d-flex justify-content-center rounded-3 shadow-sm">
                                <img id="video_feed" style={{ height: '100%' }} src="#" alt="Video Feed" />
                            </div>
                        </>
                        :
                        <>
                            <div className="p-4 bg-light shadow-sm p-4 rounded-4">
                                <img src={subimg} alt="noimagehereimage" width='100px' />
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default MapComp;