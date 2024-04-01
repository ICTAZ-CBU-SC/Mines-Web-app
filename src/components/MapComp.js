import axios from "axios";
import { useEffect, useState } from "react";
import subimg from './images/Untitled-1.svg'
import { API_URL } from "../test";

const MapComp = () => {
    const [imageState, setImageState] = useState(false)

    

    useEffect(() => {
            // function updateVideoFeed() {
                const video = document.getElementById('video_feed');
                video.src = API_URL + "video_feed"; // Set the source to the video feed endpoint
            // }
        
        // axios.get(API_URL + 'video_feed')
        //     .then((res) => {
        //         // setImageState(true)
        //         // updateVideoFeed()
        //         console.log('connection success')
        //     })
        //     .catch((err) => {
        //         console.log('connection err')

        //     })
    }, [])

    return (
        <>
            <div>
                <div className="d-flex  justify-content-center">
                    {!imageState ?   
                        <>
                            <div className="bg-secondary p-4 shadow-sm d-flex justify-content-center rounded-3 shadow-sm">
                                <img id="video_feed" style={{ height: '300px' }} src="#" alt="Video Feed" />
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