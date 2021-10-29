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
        { name: 'Funk' },
        { name: 'Dub/Raggae' }
    ]);

    console.log('genre seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            title: 'Charles Bradley - No Time For Dreaming',
            genre: genre[7]._id,
            description:
                'No Time for Dreaming is the debut studio album by American soul singer Charles Bradley',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/charles-bradley-no-time-for-dreaming_deut7l.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Talking Heads - Remain In Light',
            genre: genre[0]._id,
            description:
                'Remain in Light is the fourth studio album by American rock band Talking Heads',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/TalkingHeadsRemaininLight_bjn6sv.jpg',
            price: 27.00,
            quantity: 1
        },
        {
            title: 'Madlib - Shades of Blue',
            genre: genre[1]._id,
            description: 'Shades of Blue is a remix album by American hip hop musician Madlib over the archives of Blue Note Records',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/MadlibShadesofBlue_aeyd6v.jpg',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'FKA Twigs - EP2',
            genre: genre[2]._id,
            description:
                'EP2 is the second (EP) by English singer FKA Twigs. There are three different versions of the album cover; the first clearly shows Twigs necklace, a second where it is blurred, and a third where it has been erased',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/FKA_twigs_EP2_y0cbzb.png',
            price: 20.00,
            quantity: 1
        },
        {
            title: 'Sonny Rollins - The Bridge',
            genre: genre[4]._id,
            description:
                'The Bridge is one of the albums for which the long-active and prolific Rollins receives his greatest praise',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635176484/cosmic%20records/Sonny_Rollins_The_Bridge_opgwve.png',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'Angel Olsen - Burn Your Fire For No Witness',
            genre: genre[2]._id,
            description:
                'Burn Your Fire for No Witness is the second studio album by American singer-songwriter Angel Olsen',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Burn_Your_Fire_for_No_Witness_wpb1hi.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Boards of Canada - Music Has the Right to Children',
            genre: genre[3]._id,
            description:
                'Music Has the Right to Children is the debut studio album by Scottish electronic music duo Boards of Canada. It has been acknowledged as a landmark work in electronic music, going on to inspire a variety of subsequent artists',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Musichastherighttochildren_ruyqrw.jpg',
            price: 45.00,
            quantity: 1
        },
        {
            title: 'Wu Tang Clan - Enter The Wu-Tang 36 Chambers',
            genre: genre[1]._id,
            description:
                'Enter the Wu-Tang (36 Chambers) is the debut studio album by Wu-Tang Clan',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Wu-TangClanEntertheWu-Tangalbumcover_arao9m.jpg',
            price: 28.00,
            quantity: 1
        },
        {
            title: 'Stereolab - Space Age Batchelor Pad Music',
            genre: genre[2]._id,
            description:
                'Space Age Batchelor Pad Music (originally released in 1993) became an underground sensation, and led to the band snagging its first major-label record deal',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Spaceagebatchelorpadmusic_pjcnhp.jpg',
            price: 20.00,
            quantity: 1
        },
        {
            title: 'Otis Redding - Pain In My Heart',
            genre: genre[7]._id,
            description:
                'Pain in My Heart is the debut album of soul singer-songwriter Otis Redding',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/paininmyheart_aehdm1.jpg',
            price: 22.00,
            quantity: 1
        },
        {
            title: 'Animal Collective - Water Curses',
            genre: genre[2]._id,
            description:
                'Water Curses is an EP by Animal Collective. The first three tracks were recorded during the Strawberry Jam sessions in January 2007',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Water_Curses_EP_bgitnl.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Willie Nelson - Phases and Stages',
            genre: genre[5]._id,
            description:
                'Phases and Stages is the seventeenth studio album by Willie Nelson',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635176483/cosmic%20records/Phases_and_Stages_otrp9j.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Mr. Bungle - Disco Volante',
            genre: genre[0]._id,
            description:
                'Disco Volante (Italian for Flying Saucer) is the second studio album by American experimental rock band Mr. Bungle. It  is considered to be the most experimental of all their albums, mixing elements from such varied styles as death metal, jazz, Arabic music, musique concrète, easy listening and even tango.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635300996/cosmic%20records/Disco_Volante_album_cover_qgcx8c.jpg',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'Aphex Twin - Collapse EP',
            genre: genre[3]._id,
            description:
                'Collapse EP is an album or EP by British electronic musician Richard D. James under the pseudonym Aphex Twin. The record received universal acclaim from music critics, who praised James for returning to his signature "Aphex Twin" sound.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635440541/cosmic%20records/Collapse__EP_opyi3b.jpg',
            price: 28.00,
            quantity: 1
        },
        {
            title: 'Bjork - Homogenic',
            genre: genre[3]._id,
            description:
                'Homogenic is the third studio album by Icelandic recording artist Björk.Produced by Björk, Mark Bell, Guy Sigsworth, Howie B, and Markus Dravs, the album marked a stylistic change to her artistry, focusing on similar-sounding music combining electronic beats and string instruments with songs in tribute to her native country Iceland.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635445138/cosmic%20records/Bjo%CC%88rk_-_Homogenic_zxbvjs.png',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'Ministry - Jesus Built My Hotrod',
            genre: genre[0]._id,
            description:
                'Jesus Built My Hotrod" is a song by American industrial metal band Ministry, released as the first single from their fifth studio album, Psalm 69: The Way to Succeed and the Way to Suck Eggs. An industrial metal track, it features elements of rockabilly and psychobilly. The track\'s instrumentation is defined by its polyrhythmic structure.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635446175/cosmic%20records/Jesus_Built_My_Hotrod_v2jq7i.jpg',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'Mr.Oizo - Stade 2',
            genre: genre[3]._id,
            description:
                'Stade 2 is the fourth studio album by Mr. Oizo.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635301245/cosmic%20records/mr_oizo_stade_lg_ziqtjf.jpg',
            price: 28.00,
            quantity: 1
        },
        {
            title: 'Beastie Boys - License To Ill',
            genre: genre[1]._id,
            description:
                'Licensed to Ill is the debut studio album by American rap rock group Beastie Boys',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635447481/cosmic%20records/Licensed_to_ill_xbeiev.jpg',
            price: 35.00,
            quantity: 1
        },
        {
            title: 'Weezer - Blue Album',
            genre: genre[0]._id,
            description:
                'Weezer (commonly known as the Blue Album) is the debut studio album by American rock band Weezer. It was produced by Ric Ocasek.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635447932/cosmic%20records/Weezer_-_Blue_Album_k7tag9.png',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'The King Khan & BBQ Show - What\'s For Dinner\?',
            genre: genre[0]._id,
            description:
                'What\'s for Dinner\? is the second studio album by garage rock band The King Khan \& BBQ Show',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635448673/cosmic%20records/What_sforDinner_rfmluh.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'The Congos - Heart Of The Congos',
            genre: genre[9]._id,
            description:
                'Heart of the Congos is a roots reggae album by The Congos, produced by Lee "Scratch" Perry at his Black Ark studio with a studio band including Boris Gardiner on bass and Ernest Ranglin on guitar. It is noted as being one of Perry\'s masterpiece productions of the Black Ark era.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635448974/cosmic%20records/congos_heart_of_the_congos_jswmnc.jpg',
            price: 20.00,
            quantity: 1
        },
        {
            title: 'Squarepusher - Feed Me Weird Things',
            genre: genre[3]._id,
            description:
                'Feed Me Weird Things is the debut studio album by English electronic musician Tom Jenkinson under the alias Squarepusher. The album received positive reviews from critics and has been retrospectively cited as a landmark release in the drill \'n\' bass subgenre.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635449781/cosmic%20records/Squarepusher.feedmeweirdthings_r9hpqi.jpg',
            price: 35.00,
            quantity: 1
        },
        {
            title: 'Dabrye - Instrmntl',
            genre: genre[3]._id,
            description:
                'At just over 30 minutes, Instrmntl is a continuation of the beat experiments by Dabrye',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635300996/cosmic%20records/dabrye_instrmntl_b2ee5h.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Blue Hawaii - Untogether',
            genre: genre[2]._id,
            description:
                'For an album recorded in separation and distantly pieced together over a Canadian winter, there’s a surprising warmth and assurance to be found in the 11 tracks that make up Untogether. This is an album built for headphones. Spacious and bass-heavy, there are moments that are felt more than heard.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635300996/cosmic%20records/blue_hawaii_bwuzbb.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Rage Against The Machine - Rage Against The Machine',
            genre: genre[0]._id,
            description:
                'Rage Against the Machine is the debut studio album by American rock band Rage Against the Machine.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635451947/cosmic%20records/RageAgainsttheMachineRageAgainsttheMachine_d0scq8.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Jimi Hendrix - Axis Bold As Love',
            genre: genre[0]._id,
            description:
                'Axis: Bold as Love is the second studio album by the Jimi Hendrix Experience',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635452166/cosmic%20records/Axiscover_mrmqbr.jpg',
            price: 23.00,
            quantity: 1
        },
        {
            title: 'CoCo Rosie - La Maison de Mon Reve',
            genre: genre[2]._id,
            description:
                'La Maison de Mon Rêve, stylized as La maison de mon rêve (French: My dream house or the house of my dream)is the debut studio album by American musical group CocoRosie. The album is characterized by its lo-fi aesthetic and experimental approach to production.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635452422/cosmic%20records/CoCoRosie_maison_tdaadd.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Nirvana - Bleach',
            genre: genre[0]._id,
            description:
                'Bleach is the debut studio album by American rock band Nirvana, released on June 15, 1989',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635452702/cosmic%20records/Nirvana-Bleach_ezoz9i.jpg',
            price: 28.00,
            quantity: 1
        },
        {
            title: 'Kraftwerk - Autobahn',
            genre: genre[3]._id,
            description:
                'Autobahn is the fourth studio album by German electronic band Kraftwerk, released in November 1974. It was the band\'s first album to fully embrace the repetitive electronic sound they would become known for (although organic instruments still remained part of their sonic palette) and was inspired by the titular German motorway system.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635452979/cosmic%20records/A74-D-front-250_hsrc9u.jpg',
            price: 28.00,
            quantity: 1
        },
        {
            title: 'The Breeders - Last Splash',
            genre: genre[0]._id,
            description:
                'Last Splash is the second album by American indie rock band the Breeders, released on August 30, 1993. Last Splash has been seen as one of alternative rock\'s most enduring masterpieces',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635453279/cosmic%20records/TheBreedersLastSplash_mqzke7.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Chet Baker - Sings',
            genre: genre[4]._id,
            description:
                'Chet Baker Sings is the debut vocal album by jazz musician Chet Baker. "My Funny Valentine" was regularly included in his concert performances, and is considered by some to be his signature song.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635454730/cosmic%20records/CHET-BAKER-SINGS_kio96v.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'PJ Harvey - Rid Of Me',
            genre: genre[0]._id,
            description:
                'Rid of Me is the second studio album by English singer-songwriter and musician PJ Harvey. It was released by Island Records in May 1993, approximately one year after the release of her critically acclaimed debut album Dry. It marked a departure from Harvey\'s previous songwriting, being more raw and aggressive than its predecessor.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635454929/cosmic%20records/Rid_of_Me_dxjvlk.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Built To Spill - Keep It Like A Secret',
            genre: genre[2]._id,
            description:
                'Keep It Like a Secret is the fourth full-length album released by indie rock band Built to Spill.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635455249/cosmic%20records/Keep_It_Like_a_Secret_a3mbgf.jpg',
            price: 28.00,
            quantity: 1
        },
        {
            title: 'Nine Inch Nails - Pretty Hate Machine',
            genre: genre[0]._id,
            description:
                'Pretty Hate Machine is the debut studio album by American industrial rock band Nine Inch Nails.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635455627/cosmic%20records/Nine_Inch_Nails_-_Pretty_Hate_Machine_bki7oj.png',
            price: 26.00,
            quantity: 1
        },
        {
            title: 'Bob Dylan - The Freewheel\' Bob Dylan',
            genre: genre[6]._id,
            description:
                'The Freewheelin\' Bob Dylan is the second studio album by American singer-songwriter Bob Dylan',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635455882/cosmic%20records/Bob_Dylan_-_The_Freewheelin__Bob_Dylan_wsgkpx.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Clark - Death Peak',
            genre: genre[3]._id,
            description:
                'Death Peak is the eighth studio album by British electronic musician Chris Clark and the sixth one under the moniker Clark.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635456021/cosmic%20records/Clark_-_Death_Peak_album_cover_z3bl7k.png',
            price: 45.00,
            quantity: 1
        },
        {
            title: 'Parliament - Mothership Connection',
            genre: genre[8]._id,
            description:
                'Mothership Connection is the fourth album by American funk band Parliament. This concept album is often rated among the best Parliament-Funkadelic releases, and was the first to feature horn players Maceo Parker and Fred Wesley, who had previously backed James Brown in the J.B.\'s.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635456183/cosmic%20records/ParliamentMothershipConnection_nsxxki.jpg',
            price: 50.00,
            quantity: 1
        },
        {
            title: 'My Life With The Thrill Kill Kult - Kooler Than Jesus',
            genre: genre[0]._id,
            description:
                'Kooler Than Jesus is an EP released by electronic industrial rock band My Life with the Thrill Kill Kult in 1990. It contains the original "Kooler Than Jesus" 12" single along with two other previously release 12" singles, "My Life with the Thrill Kill Kult" and "Some Have to Dance...Some Have to Kill"',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635456695/cosmic%20records/Kooler_than_jesus_uqhjvz.jpg',
            price: 20.00,
            quantity: 1
        },
        {
            title: 'Mr. Bungle - California',
            genre: genre[0]._id,
            description:
                'California explores an ambiance new to the band, conjuring up the surly dance moves of Cyd Charisse and Fred Astaire; digging through the graveyard of riffs to find English pop, Elvis, Neil Diamond and Michael Jackson. The album is sure to alienate those expecting weird meter-changes and heartless vulgarities',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635456586/cosmic%20records/MrBungle-California_wkjjjv.jpg',
            price: 35.00,
            quantity: 1
        },
        {
            title: 'The Sugarcubes - Life\'s Too Good',
            genre: genre[0]._id,
            description:
                'Life\'s Too Good is the debut studio album by Icelandic alternative rock group The Sugarcubes. The album was an unexpected success and brought international attention for the band, especially to lead singer Björk, who would launch a successful solo career in 1993.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635456970/cosmic%20records/The_Sugarcubes_-_Life_s_Too_Good_o990xk.png',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Tortoise - Standards',
            genre: genre[2]._id,
            description:
                'Standards is the fourth studio album by American post-rock band Tortoise.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635457083/cosmic%20records/Tortoise-standards_bpqqdx.jpg',
            price: 35.00,
            quantity: 1
        },
        {
            title: 'Sam & Dave - Soul Men',
            genre: genre[7]._id,
            description:
                'Soul Men is an album by the R&B duo Sam & Dave, released in 1967. The album launched the hit single "Soul Man", which peaked #2 on the "Pop Singles" chart. The song won Sam & Dave a Grammy in 1967 for "Best R&B Group, Vocal or Instrumental"',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635524452/cosmic%20records/Soul_Men__Sam___Dave_album_-_cover_art_xkch2b.jpg',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'Kid 606 - Kill Sound Before Sound Kills You',
            genre: genre[3]._id,
            description:
                'Kill Sound Before Sound Kills You is a 2003 studio album by American electronic musician Miguel Depedro under his alias of Kid 606. The album has a working history of spastic club music, from rave-era hardcore to jungle to gabba style',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635525031/cosmic%20records/Killsoundbefore_npfdhy.jpg',
            price: 20.00,
            quantity: 1
        },
        {
            title: 'Parliament - The Clones of Dr. Funkenstien',
            genre: genre[8]._id,
            description:
                'The Clones of Dr. Funkenstein is an album by funk band Parliament, released in September 1976. The album is notable for featuring horn arrangements by ex-James Brown band member, Fred Wesley.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635525296/cosmic%20records/Parliament-The_Clones_of_Dr._Funkenstein__album_cover_s9qfwo.jpg',
            price: 45.00,
            quantity: 1
        },
        {
            title: 'Smashing Pumpkins - Gish',
            genre: genre[0]._id,
            description:
                'Gish is the debut studio album by American alternative rock band the Smashing Pumpkins, released in May 1991 through Caroline Records. Frontman Billy Corgan has variously described Gish as a "very spiritual album" and "an album about spiritual ascension".',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635525625/cosmic%20records/SmashingPumpkins-Gish_sp0zh0.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Ray Charles - I\'m All Yours-Baby!',
            genre: genre[7]._id,
            description:
                'I\'m All Yours Baby! is a studio album by Ray Charles released in 1969 on Charles\' Tangerine Records label',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635526224/cosmic%20records/RayCharles_ImAllYoursBaby_lgowj3.jpg',
            price: 40.00,
            quantity: 1
        },
        {
            title: 'Demdike Stare - Wonderland',
            genre: genre[3]._id,
            description:
                'Continuing the beat-oriented experiments of their 12” club tunes, the electronic duo Demdike Stare blend their doomy aesthetic with dancehall cadences for their most compelling full-length.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635526761/cosmic%20records/006ada49_lus1af.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Blu & Exile - Give Me My Flowers While I Can Still Smell Them Instrumentals',
            genre: genre[1]._id,
            description:
                'The instrumentals to Blu and Exile’s modern classic Give Me My Flowers While I Can Still Smell Them. Includes unreleased, non-album instrumental “Enough”.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635527236/cosmic%20records/Blu_Exile_neorm0.jpg',
            price: 25.00,
            quantity: 1
        },
        {
            title: 'Kurtis Blow - The Breaks',
            genre: genre[1]._id,
            description:
                '"The Breaks" is a 1980 single by American rapper Kurtis Blow from his self-titled debut album. It peaked at #87 on the Billboard Hot 100. It was the first certified gold rap song, and the second certified gold 12-inch single.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635527464/cosmic%20records/Kurtis_Blow_-_The_Breaks_aizkl3.jpg',
            price: 75.00,
            quantity: 1
        },
        {
            title: 'Def Leppard - Pyromania',
            genre: genre[0]._id,
            description:
                'Pyromania is the third studio album by English rock band Def Leppard. The album was a shift away from the band\'s traditional heavy metal roots toward a more radio-friendly sound, finding massive mainstream success.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/v1635527795/cosmic%20records/Def_Leppard_-_Pyromania_tj4qhb.jpg',
            price: 30.00,
            quantity: 1
        },
        {
            title: 'Bootsy\'s Rubber Band - Body Slam',
            genre: genre[8]._id,
            description:
                'Body Slam" is a song that was recorded by Bootsy\'s Rubber Band, co-written by Bootsy Collins and keyboardist Joel "Razor Sharp" Johnson. The b-side of "Body Slam" is "I\'d Rather Be With You"!',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635528756/cosmic%20records/Body_Slam_gfcbww.jpg',
            price: 20.00,
            quantity: 1
        },
        {
            title: 'Black Sabbath - Paranoid',
            genre: genre[0]._id,
            description:
                'Paranoid is the second studio album by the English heavy metal band Black Sabbath, released in September 1970 through Vertigo Records in England and Warner Bros. Records in the US. It contains several of the band\'s signature songs, including "Iron Man", "War Pigs" and the title track "Paranoid". It is often cited as an influential album in the early development of the heavy metal genre.',
            image: 'https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635530086/cosmic%20records/Black_Sabbath_-_Paranoid_neprgt.jpg',
            price: 25.00,
            quantity: 1
        },
        
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
