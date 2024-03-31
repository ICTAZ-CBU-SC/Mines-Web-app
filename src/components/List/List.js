import Profile from './AppData.js';
import { Link } from "react-router-dom";

function List() {


    const info = [
        {
            name: 'Bulaya Mwanaute',
        },
        {
            name: 'Gloria Chomba',
        },
        {
            name: 'Zimba Isaac',
        },
        {
            name: 'Clivet Lungu',
        },
        {
            name: 'Joshua Sibanda',
        },
        {
            name: 'George Palanga',
        },
        {
            name: 'Zimba Isaac',
        },
        {
            name: 'Clivet Bigman',
        },
        {
            name: 'Joshua Sibanda',
        },
        {
            name: 'George Palanga',
        },
        {
            name: 'Zimba Isaac',
        },
        {
            name: 'Clivet Bigman',
        },
        
    ];

    return(
        <>

            <div className = "mt-8 mb-12 w-11/12 md:w-2/5 rounded-full p-4 m-auto text-center text-gray-700">
                <p className="text-3xl font-semibold">
                    Meet The<span className="font-bold text-sky-600 "> Developer Team</span>
                </p>
                <p className="py-2 text-gray-800 text-[16] underline underline-offset-8">Our team of brave sudents</p>
            </div>

            <main className="w-full rounded-3xl m-auto p-10 b rounded-2xl">
                <div className="w-4/5 m-auto">
                    <div className="m-auto sm:grid-cols-2 grid md:grid-cols-4 gap-4">
                        {info.map((e) => (<Link to={'/AppData' + e.id}>
                            <Profile name={e.name}></Profile>
                        </Link>
                        ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default List;