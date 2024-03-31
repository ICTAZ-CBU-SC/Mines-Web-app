import Profile from './AppData.js';
import { motion } from 'framer-motion'

function List() {


    const info = [
        {
            name: 'Bulaya Mwanaute',
            id:1
        },
        {
            name: 'Gloria Chomba',
            id:2
        },
        {
            name: 'Zimba Isaac',
            id:3
        },
        {
            name: 'Clivet Lungu',
            id:4
        },
        {
            name: 'Amos Kanyanta',
            id:5
        },
        {
            name: 'Gilbert',
            id:6
        },
        {
            name: 'Zimba Isaac',
            id:7
        },
        {
            name: 'Clivet Bigman',
            id:8
        },
        {
            name: 'Joshua Sibanda',
            id:9
        },
        {
            name: 'George Palanga',
            id:10
        },
        {
            name: 'Zimba Isaac',
            id:11
        },
        {
            name: 'Clivet Bigman',
            id:12
        },

    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mt-8 mb-12 w-11/12 md:w-2/5 rounded-full p-4 m-auto text-center text-gray-700">
                    <p className="text-3xl font-semibold">
                        Meet The<span className="font-bold text-sky-600 "> Developer Team</span>
                    </p>
                    <p className="py-2 text-gray-800 text-[16] underline underline-offset-8">Our team of brave sudents</p>
                </div>

                <main className="w-full rounded-3xl m-auto p-10 b rounded-2xl">
                    <div className="w-4/5 m-auto">
                        <div className="m-auto sm:grid-cols-2 grid md:grid-cols-4 gap-4">
                            {info.map((e) => (<div key={e.id}   >
                                <Profile  name={e.name}></Profile>
                            </div>
                            ))
                            }
                        </div>
                    </div>
                </main>
            </motion.div>
        </>
    )
}

export default List;