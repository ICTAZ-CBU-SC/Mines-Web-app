
function Profile(props) {

    return(
        <>

            <div className="text-center w-40 rounded-md py-4 m-auto my-2">
                <img
                    src={image}
                    alt='image'
                    className="m-auto h-36 w-36 rounded-full shadow-2xl border-[3px] border-green-600 p-1"
                />
                <p className="block pt-6 text-lg font-semibold text-gray-800">{props.name}</p>
                <p className="block text-[14px] text-sky-600 font-semibold">{props.position}</p>
            </div>

        </>
    )
}

export default Profile;