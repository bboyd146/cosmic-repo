const db = require('./connection');
const { Product, Genre, User } = require('../models');

db.once('open', async () => {
    await Genre.deleteMany();

    const genre = await Genre.insertMany([
        { name: 'Rock' },
        { name: 'Hip-Hop' },
        { name: 'Indie' },
        { name: 'Electronic' },
        { name: 'Jazz' },
        { name: 'Country' },
        { name: 'Folk' },
        { name: 'Soul' },
        { name: 'Funk' }
    ]);

    console.log('genre seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            title: 'Charles Bradley - No Time For Dreaming',
            genre: genre[7]._id,
            description:
                'No Time for Dreaming is the debut studio album by American soul singer Charles Bradley',
            image: 'charles_bradley_no_time_for_dreaming.jpeg',
            price: 25.00,
        },
        {
            title: 'Stereolab - Space Age Batchelor Pad Music',
            genre: genre[2]._id,
            description:
                'Space Age Batchelor Pad Music (originally released in 1993) became an underground sensation, and led to the band snagging its first major-label record deal',
            image: 'Spaceagebatchelorpadmusic.jpeg',
            price: 20.00,
        },
        {
            title: 'Willie Nelson - Phases and Stages',
            genre: genre[5]._id,
            description:
                'Phases and Stages is the seventeenth studio album by Willie Nelson',
            image: 'Phases_and_Stages.jpg',
            price: 25.00,
        },
        {
            title: 'Wu Tang Clan - Enter The Wu-Tang 36 Chambers',
            genre: genre[1]._id,
            description:
                'Enter the Wu-Tang (36 Chambers) is the debut studio album by Wu-Tang Clan',
            image: 'EntertheWu_Tang.jpeg',
            price: 28.00,
        },
        {
            title: 'FKA Twigs - EP2',
            genre: genre[2]._id,
            description:
                'EP2 is the second (EP) by English singer FKA Twigs. There are three different versions of the album cover; the first clearly shows Twigs necklace, a second where it is blurred, and a third where it has been erased',
            image: 'FKA_twigs_EP2.png',
            price: 20.00,
        },
        {
            title: 'Angel Olsen - Burn Your Fire For No Witness',
            genre: genre[2]._id,
            description:
                'Burn Your Fire for No Witness is the second studio album by American singer-songwriter Angel Olsen',
            image: 'Burn_Your_Fire_for_No_Witness.jpeg',
            price: 25.00,
        },
        {
            title: 'Animal Collective - Water Curses',
            genre: genre[2]._id,
            description:
                'Water Curses is an EP by Animal Collective. The first three tracks were recorded during the Strawberry Jam sessions in January 2007',
            image: 'Water_Curses_EP.jpeg',
            price: 25.00,
        },
        {
            title: 'Boards of Canada - Music Has the Right to Children',
            genre: genre[3]._id,
            description:
                'Music Has the Right to Children is the debut studio album by Scottish electronic music duo Boards of Canada. It has been acknowledged as a landmark work in electronic music, going on to inspire a variety of subsequent artists',
            image: 'Musichastherighttochildren.jpeg',
            price: 45.00,
        },
        {
            title: 'Madlib - Shades of Blue',
            genre: genre[1]._id,
            description: 'Shades of Blue is a remix album by American hip hop musician Madlib over the archives of Blue Note Records',
            image: 'MadlibShadesofBlue.jpeg',
            price: 30.00,
        },
        {
            title: 'Sonny Rollins - The Bridge',
            genre: genre[4]._id,
            description:
                'The Bridge is one of the albums for which the long-active and prolific Rollins receives his greatest praise',
            image: 'Sonny_Rollins_The_Bridge.png',
            price: 30.00,
        },
        {
            title: 'Otis Redding - Pain In My Heart',
            genre: genre[7]._id,
            description:
                'Pain in My Heart is the debut album of soul singer-songwriter Otis Redding',
            image: 'paininmyheart.jpeg',
            price: 22.00,
        },
        {
            title: 'Talking Heads - Remain In Light',
            genre: genre[0]._id,
            description:
                'Remain in Light is the fourth studio album by American rock band Talking Heads',
            image: 'TalkingHeadsRemaininLight.jpeg',
            price: 27.00,
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Josh',
        lastName: 'Nolan',
        email: 'josh@testmail.com',
        password: 'password123',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    console.log('users seeded');

    process.exit();
});
