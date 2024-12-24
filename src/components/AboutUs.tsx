import { Users } from 'lucide-react';
import React from 'react';
import { FaEnvelope, FaEdit, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';

type Friend = {
    name: string;
    email: string;
    phone: string;
    profileImage: string;
};

const friends: Friend[] = [
    { name: 'Maadani Mohammed', email: 'maadani@example.com', phone: '+212 6 00 00 00 00', profileImage: 'https://via.placeholder.com/150' },
    { name: 'Mohamed Hamcha', email: 'mohamed@example.com', phone: '+212 6 00 00 00 01', profileImage: 'https://via.placeholder.com/150' },
    { name: 'Hamza Badr', email: 'hamza@example.com', phone: '+212 6 00 00 00 02', profileImage: 'https://via.placeholder.com/150' },
    { name: 'Oussama', email: 'oussama@example.com', phone: '+212 6 00 00 00 03', profileImage: 'https://via.placeholder.com/150' },
    { name: 'Wassim', email: 'wassim@example.com', phone: '+212 6 00 00 00 04', profileImage: 'https://via.placeholder.com/150' },
    { name: 'XX XX', email: 'xx@example.com', phone: '+212 6 00 00 00 05', profileImage: 'https://via.placeholder.com/150' },
];

const AboutUs = () => {
    return (
        <section className="my-32 px-6 sm:px-12 md:px-24 lg:px-32">
            <div className="text-center">
                <div className="flex items-center space-x-2 justify-center w-full py-10 text-indigo-600">
                    <Users className="w-7 h-7 " />
                    <h2 className="text-4xl font-bold ">À propos de nous</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                    Nous sommes 6 amis étudiant à la Faculté Polydisciplinaire de Khouribga, dans le programme
                    Systèmes d'Information et Intelligence Artificielle (SIIA).
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {friends.map((friend, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 bg-indigo-100 rounded-lg shadow-lg transition transform hover:scale-105"
                    >
                        <img
                            src={friend.profileImage}
                            alt={friend.name}
                            className="w-32 h-32 rounded-full border-4 border-indigo-600 mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                            <FaUserAlt className="mr-2 text-indigo-600" />
                            {friend.name}
                        </h3>
                        <p className="text-gray-600 flex items-center">
                            <FaEnvelope className="mr-2 text-indigo-600" />
                            {friend.email}
                        </p>
                        <p className="text-gray-600 flex items-center">
                            <FaPhoneAlt className="mr-2 text-indigo-600" />
                            {friend.phone}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
