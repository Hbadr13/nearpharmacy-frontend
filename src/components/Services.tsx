import { ShoppingCart, Search, Video } from "lucide-react"; // Icônes utilisées pour les services

import { Clipboard } from "lucide-react";
const Services = () => {
    return (
        <section className=" bg-gray-100 p-10">
            <div className="container mx-auto text-center">
                <div className="flex items-center space-x-2 justify-center w-full py-10">
                    <Clipboard className="w-7 h-7 " />
                    <h2 className="text-4xl font-bold text-gray-800 ">Nos Services</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Search className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Recherche de Pharmacies</h3>
                        <p className="text-gray-600 mt-2">
                            Trouvez facilement les pharmacies de votre entourage en utilisant notre moteur de recherche intuitif.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <ShoppingCart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Achat de Médicaments</h3>
                        <p className="text-gray-600 mt-2">
                            Achetez vos médicaments en ligne directement depuis l&apos;application, avec une livraison rapide à votre porte.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Video className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Consultation en Ligne</h3>
                        <p className="text-gray-600 mt-2">
                            Consultez un professionnel de santé en ligne, sans avoir à vous déplacer. Obtenez des conseils médicaux rapidement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
