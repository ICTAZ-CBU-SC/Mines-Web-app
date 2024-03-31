import Profile from './AppData.js';
import { Link } from "react-router-dom";
import amos from '../images/amos.jpeg';
import bulaya from '../images/bulaya.jpeg';
import george from '../images/george.jpeg';
import gloria from '../images/gloria.jpeg';
import zimba from '../images/zimba.jpeg';
import dingiswayo from '../images/dingiswayo.jpeg';
import benjamin from '../images/benjamin.jpeg';
import clivet from '../images/clivet.jpeg';
import harriet from '../images/harriet.jpeg';
import edgar from '../images/edgar.jpeg';
import temwani from '../images/temwani.jpeg';
import gilbert from '../images/gilbert.jpeg';
import songiso from '../images/songiso.jpeg';
import joshua from '../images/joshua.jpeg';
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
            name: 'Harriet Mulonda',
            image: harriet,
            position: "Developer",
        },

    ];

    return (
        <>

            
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-gray-100">
                    <div className="mt-8 mb-12 w-11/12 md:w-2/5 rounded-full p-4 m-auto text-center text-gray-700 flex justify">
                        <div>
                            <p className="text-3xl font-semibold">
                                Meet The<span className="font-bold text-sky-600 "> Developer Team</span>
                            </p>
                            <p className="py-2 text-gray-800 text-[16] underline underline-offset-8">Our team of brave sudents</p>
                        </div>
                    </div>

                    <main className="w-full rounded-3xl m-auto p-10 b rounded-2xl">
                        <div className="w-4/5 m-auto">
                            <div className="m-auto sm:grid-cols-2 grid md:grid-cols-4 gap-4">
                                {info.map((e) => (
                                    <Link to={'/AppData' + e.id}>
                                        <Profile position={e.position} image={e.image} name={e.name}></Profile>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </main>
                    </div>
                </motion.div >
            
        
        </>
    )
}

export default List;