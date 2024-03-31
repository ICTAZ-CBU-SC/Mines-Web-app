import image from '../images/image.png';

function Profile(props) {

    return(
        <>

            <div className="text-center w-40 rounded-md py-4 m-auto my-2">
                <img
                    src={image}
                    alt='image'
                    className="m-auto h-36 w-36 rounded-full shadow-sm border-[3px] "
                />
                <p className="block pt-6 text-lg font-semibold text-gray-800">{props.name}</p>
                <p className="block text-[14px] text-sky-600 font-semibold">Developer</p>
            </div>

        </>
    )
}

export default Profile;