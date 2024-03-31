
function Profile(props) {

    return(
        <>

            <div className="text-center bg-white shadow-md w-48 rounded-[10px] pb-4 m-auto my-2 ">
                <div className = "rounded-[10px] overflow-hidden h-36 ">
                    <img
                        src={props.image}
                        alt='image'
                        className="hover:scale-110 hover:duration-500"
                    />
                </div>
                <p className="block pt-6 text-lg font-semibold text-gray-800">{props.name}</p>
                <p className="block text-[14px] text-sky-600 font-semibold">{props.position}</p>
            </div>

        </>
    )
}

export default Profile;