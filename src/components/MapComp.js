import Mapping from "./mapping";
import image from './images/map.jpg'

const MapComp = () => {
    return(
        <>
            <div>
                <div>
                    <div className="bg-secondary rounded-3 shadow-sm" style={{height:"500px", width:'100%',backgroundImage:`url(${image})`, overflow: 'scroll'}}>
                        <Mapping />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapComp;