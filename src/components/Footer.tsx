import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo et Description */}
                <Image className="rounded-sm w-24 h-24" src={'/PharmaFinder.png'} width={1000} height={1000} alt="logo" />
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h1 className="text-2xl font-bold">PharmaFinder</h1>
                    <p className="text-sm mt-2">
                        Trouvez rapidement les pharmacies et celles de garde près de vous.
                    </p>
                </div>

                Liens de Navigation
                <div className="mb-4 md:mb-0">
                    <ul className="flex flex-col md:flex-row gap-4 text-center">
                        <li>
                            <a href="#about" className="hover:underline">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="hover:underline">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Réseaux Sociaux */}
                <div className="flex gap-4 justify-center md:justify-end">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg
                            className="w-6 h-6 text-gray-400 hover:text-white"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.497v-9.293h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.312h3.59l-.467 3.622h-3.123v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg
                            className="w-6 h-6 text-gray-400 hover:text-white"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557a9.83 9.83 0 0 1-2.825.775 4.932 4.932 0 0 0 2.165-2.724 9.86 9.86 0 0 1-3.127 1.184 4.916 4.916 0 0 0-8.373 4.482c-4.086-.205-7.715-2.165-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.71.869 3.213 2.188 4.095a4.904 4.904 0 0 1-2.224-.616v.062a4.914 4.914 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.21.083 4.93 4.93 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 21.539a13.95 13.95 0 0 0 7.548 2.212c9.056 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.015-.637A10.025 10.025 0 0 0 24 4.557z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg
                            className="w-6 h-6 text-gray-400 hover:text-white"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.322.975.975 1.26 2.241 1.322 3.608.058 1.265.069 1.645.069 4.837s-.012 3.584-.07 4.85c-.062 1.366-.348 2.633-1.322 3.608-.975.975-2.241 1.26-3.608 1.322-1.265.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.348-3.608-1.322-.975-.975-1.26-2.241-1.322-3.608-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.062-1.366.348-2.633 1.322-3.608.975-.975 2.241-1.26 3.608-1.322 1.265-.058 1.645-.069 4.85-.069m0-2.163c-3.259 0-3.667.013-4.947.072-1.28.058-2.163.259-2.914.508a6.819 6.819 0 0 0-2.348 1.536 6.82 6.82 0 0 0-1.536 2.348c-.249.751-.45 1.634-.508 2.914-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.058 1.28.259 2.163.508 2.914a6.818 6.818 0 0 0 1.536 2.348 6.816 6.816 0 0 0 2.348 1.536c.751.249 1.634.45 2.914.508 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.28-.058 2.163-.259 2.914-.508a6.819 6.819 0 0 0 2.348-1.536 6.819 6.819 0 0 0 1.536-2.348c.249-.751.45-1.634.508-2.914.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.058-1.28-.259-2.163-.508-2.914a6.818 6.818 0 0 0-1.536-2.348 6.818 6.818 0 0 0-2.348-1.536c-.751-.249-1.634-.45-2.914-.508-1.28-.059-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 1 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 1 1 2.88 0z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="text-center mt-6 text-sm text-gray-500">
                &copy; 2024 PharmaFinder. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
