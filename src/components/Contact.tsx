import { Mail, Phone, MapPin, PhoneIcon } from "lucide-react"; // Icônes utilisées pour le contact

const Contact = () => {
    return (
        <section className="p-2">

            <div className="py-16  bg-gradient-to-r shadow-[1px_0px_10px_rgba(0,0,0,0.3)] bg-[#757DE8] text-black max-w-[1200px] mx-auto p-5 rounded-xl my-20">
                <div className="container mx-auto text-center text-white">
                    <div className="flex items-center space-x-2 justify-center w-full py-10">
                        <PhoneIcon className="w-7 h-7 text-black " />
                        <h2 className="text-4xl font-bold text-gray-800 ">Nous Contacter</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="p-8 bg-white text-gray-800 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <Mail className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold">Email</h3>
                            <p className="mt-2">
                                Pour toute question, écrivez-nous à <a href="mailto:support@gestionpharmacies.com" className="text-blue-600">support@gestionpharmacies.com</a>
                            </p>
                        </div>
                        <div className="p-8 bg-white text-gray-800 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <Phone className="w-12 h-12 text-green-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold">Téléphone</h3>
                            <p className="mt-2">
                                Vous pouvez nous appeler au <a href="tel:+212123456789" className="text-blue-600">+212 123 456 789</a>
                            </p>
                        </div>

                        <div className="p-8 bg-white text-gray-800 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <MapPin className="w-12 h-12 text-red-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold">Adresse</h3>
                            <p className="mt-2">
                                Venez nous rendre visite à : 123, Rue des Pharmacies, Casablanca, Maroc
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 px-4 md:px-0">
                        <h3 className="text-3xl font-bold mb-6">Formulaire de Contact</h3>
                        <form className="bg-white p-8 rounded-lg shadow-2xl">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium">Nom Complet</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mt-2"
                                    placeholder="Votre nom complet"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mt-2"
                                    placeholder="Votre adresse email"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mt-2"
                                    rows={4}
                                    placeholder="Votre message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default Contact;
