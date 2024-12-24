'use client'

"use client";

import { useState, useEffect } from "react";
import { MdLocalPharmacy } from "react-icons/md";
import { MapPin, Search } from "lucide-react";

const villes = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fès",
    "Tanger",
    "Agadir",
    "Meknès",
    "Oujda",
    "Kénitra",
    "Tétouan",
    "Safi",
    "El Jadida",
    "Nador",
    "Béni Mellal",
    "Khouribga",
    "Taza",
    "Settat",
    "Laâyoune",
    "Dakhla",
    "Ouarzazate",
];

const RecherchePharmacie = () => {
    const [typeSelectionné, setTypeSelectionné] = useState<"toutes" | "garde" | null>("toutes");
    const [villeSelectionnée, setVilleSelectionnée] = useState<string>("Casablanca");
    const [villeUtilisateur, setVilleUtilisateur] = useState<string>("");

    const pharmacies = [
        { nom: "Pharmacie A", ville: "Khouribga", garde: true },
        { nom: "Pharmacie B", ville: "Rabat", garde: false },
        { nom: "Pharmacie C", ville: "Khouribga", garde: false },
        { nom: "Pharmacie D", ville: "Marrakech", garde: true },
    ];

    const pharmaciesFiltrées =
        typeSelectionné === "garde"
            ? pharmacies.filter(
                (pharmacie) => pharmacie.garde && pharmacie.ville === villeSelectionnée
            )
            : typeSelectionné === "toutes"
                ? pharmacies.filter((pharmacie) => pharmacie.ville === villeSelectionnée)
                : [];

    useEffect(() => {
        const récupérerLocalisationUtilisateur = async () => {
            try {
                const villeUtilisateur = "Khouribga";
                setVilleUtilisateur(villeUtilisateur);
                setVilleSelectionnée(villeUtilisateur);
            } catch (erreur) {
                console.error("Erreur lors de la récupération de la localisation:", erreur);
            }
        };

        récupérerLocalisationUtilisateur();
    }, []);

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Trouvez des pharmacies près de chez vous
            </h1>

            <div className="mb-8 flex flex-col sm:flex-row items-center gap-4">
                <label htmlFor="ville" className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Ville :</span>
                </label>
                <select
                    id="ville"
                    value={villeSelectionnée}
                    onChange={(e) => setVilleSelectionnée(e.target.value)}
                    className="flex-1 p-3 border rounded-lg shadow-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-500"
                >
                    {villes.map((ville) => (
                        <option key={ville} value={ville}>
                            {ville}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div
                    onClick={() => setTypeSelectionné("toutes")}
                    className={`p-6 flex items-center justify-between rounded-lg shadow-lg cursor-pointer transition-all ${typeSelectionné === "toutes" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                >
                    <div>
                        <h2 className="text-xl font-semibold">Toutes les pharmacies</h2>
                        <p className="text-sm">Voir toutes les pharmacies à {villeSelectionnée}.</p>
                    </div>
                    <Search className="w-6 h-6" />
                </div>
                <div
                    onClick={() => setTypeSelectionné("garde")}
                    className={`p-6 flex items-center justify-between rounded-lg shadow-lg cursor-pointer transition-all ${typeSelectionné === "garde" ? "bg-green-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                >
                    <div>
                        <h2 className="text-xl font-semibold">Pharmacies de garde</h2>
                        <p className="text-sm">
                            Voir les pharmacies ouvertes 24h/24 à {villeSelectionnée}.
                        </p>
                    </div>
                    <MdLocalPharmacy className="w-6 h-6" />
                </div>
            </div>

            {typeSelectionné && (
                <div>
                    <h2 className="text-lg font-bold mb-4 text-gray-800">
                        {typeSelectionné === "toutes"
                            ? `Toutes les pharmacies à ${villeSelectionnée}`
                            : `Pharmacies de garde à ${villeSelectionnée}`}
                    </h2>
                    {pharmaciesFiltrées.length > 0 ? (
                        <ul className="space-y-4">
                            {pharmaciesFiltrées.map((pharmacie, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md bg-white"
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{pharmacie.nom}</h3>
                                        <p className="text-gray-600">Ville : {pharmacie.ville}</p>
                                    </div>
                                    {pharmacie.garde && (
                                        <span className="text-green-500 font-medium">De garde</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">Aucune pharmacie trouvée à {villeSelectionnée}.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default RecherchePharmacie;
