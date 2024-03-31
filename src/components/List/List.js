import Profile from './AppData.js';
import { motion } from 'framer-motion'

function List() {


    const info = [
        
        {
            name: 'Benjamin Ngulube',
            image: benjamin,
            position: 'President',
        },
        {
            name: 'Zimba Isaac',
            image: zimba,
            position: "Vice President"
        },
        {
            name: 'Clivet Lungu',
            image: clivet,
            position: "Projects Coordinator"
        },
        {
            name: 'Gilbert N\'gandu',
            image: gilbert,
            position: "Developer",
        },
        {
            name: 'Bulaya Mwanaute',
            image: bulaya,
            position: "Developer",
        },
        {
            name: 'Gloria Chomba',
            image: gloria,
            position: "Developer",
        },
        {
            name: 'Amos Kanyanta',
            image: amos,
            position: "Developer",
        },
        {
            name: 'Songiso Moono',
            image: songiso,
            position: "Developer",
        },
        {
            name: 'Edgar Mwila',
            image: edgar,
            position: "Developer",
        },
        {
            name: 'Joshua Sibanda',
            image: joshua,
            position: "Developer",
        },
        {
            name: 'Palanga Nkobi',
            image: george,
            position: "Developer",
        },
        {
            name: 'Temwani',
            image: temwani,
            position: "Developer",
        },
        {
            name: 'Dingiswayo Nkwashi',
            image: dingiswayo,
            position: "Developer",
        },
        {
            name: 'Clivet Bigman',
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
                            {info.map((e) => (<div>
                                <Profile name={e.name}></Profile>
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