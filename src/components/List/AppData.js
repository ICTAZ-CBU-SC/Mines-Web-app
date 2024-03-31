
function Profile(props) {

    return(
        <>

            <div className="text-center bg-white rounded-md pb-4 m-auto my-2 shadow-md w-48">
                <div className="overflow-hidden h-40 rounded-md">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="w-full hover:scale-110 duration-500 hover:duration-500"
                    />
                </div>
                <p className="block pt-6 text-lg font-semibold text-gray-800">{props.name}</p>
                <p className="block text-[14px] text-sky-600 font-semibold">{props.position}</p>
            </div>

        </>
    )
}

export default Profile;