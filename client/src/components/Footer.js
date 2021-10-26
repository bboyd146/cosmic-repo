const navigation = [
    { name: 'FAQs', href: '/FAQs' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Company', href: '#' },
]

function Footer() {
    return (
        <div>
            <footer class="footer bg-cream relative pt-1 ">
                <div class="container mx-auto px-6 items-center">
                    <div class="mt-28 pb-20 border-t-2 border-gray-300 flex flex-col items-center">
                        <div class="sm:w-2/3 text-center py-6">
                                <p class="text-sm text-dark space-x-11 font-bold mb-2">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    ))}
                                </p>
                            <div class="container mx-auto px-6 items-center pt-6">
                            </div>
                            <div class="flex flex-wrap justify-center gap-6 pt-2">
                                <a href="https://github.com/bboyd146/cosmic-repo.git">
                                    <button
                                        class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="img"
                                            class="w-10"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <div class="container mx-auto px-6 items-center pt-6">
                                    <p class="text-sm text-dark font-bold mb-2">
                                        © 2021 by Bradley Boyd, Josh Nolan, and Osvaldo Zavaleta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;