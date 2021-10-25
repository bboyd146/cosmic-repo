

const Inventory = () => {
    const products = [
        {
            id: 1,
            name: 'Charles Bradley - No Time For Dreaming',
            href: '#',
            price: '$28',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/charles-bradley-no-time-for-dreaming_deut7l.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 2,
            name: 'Talking Heads - Remain In Light',
            href: '#',
            price: '$27',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/TalkingHeadsRemaininLight_bjn6sv.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 3,
            name: 'Madlib - Shades Of Blue',
            href: '#',
            price: '$30',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/MadlibShadesofBlue_aeyd6v.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 4,
            name: 'FKA twigs - EP2',
            href: '#',
            price: '$20',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/FKA_twigs_EP2_y0cbzb.png',
            imageAlt: 'album cover.',
        },
        {
            id: 1,
            name: 'Sonny Rollins - The Bridge',
            href: '#',
            price: '$30',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176484/cosmic%20records/Sonny_Rollins_The_Bridge_opgwve.png',
            imageAlt: 'album cover.',
        },
        {
            id: 2,
            name: 'Angel Olsen - Burn Your Fire For No Witness',
            href: '#',
            price: '$25',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Burn_Your_Fire_for_No_Witness_wpb1hi.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 3,
            name: 'Boards of Canada - Music Has The Right To Children',
            href: '#',
            price: '$45',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Musichastherighttochildren_ruyqrw.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 4,
            name: 'Wu-Tang - Enter The 36 Chambers',
            href: '#',
            price: '$27',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Wu-TangClanEntertheWu-Tangalbumcover_arao9m.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 4,
            name: 'Stereolab - Space Age Bachelor Pad Music',
            href: '#',
            price: '$28',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Spaceagebatchelorpadmusic_pjcnhp.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 4,
            name: 'Otis Redding - Pain In My Heart',
            href: '#',
            price: '$22',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/paininmyheart_aehdm1.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 4,
            name: 'Animal Collective - Water Curses',
            href: '#',
            price: '$25',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Water_Curses_EP_bgitnl.jpg',
            imageAlt: 'album cover.',
        },
        {
            id: 4,
            name: 'Willie Nelson - Phases And Stages',
            href: '#',
            price: '$25',
            imageSrc: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Phases_and_Stages_otrp9j.jpg',
            imageAlt: 'album cover.',
        },
        
    ]

    return (

        <div className="bg-cream">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inventory
