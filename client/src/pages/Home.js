// import Logo from '../Logo'
import { motion } from 'framer-motion'
import Header from '../components/Header';
import Highlight4 from '../components/Highlight';
import Index from '../components/Carousel';



const Home = () => {
    return (
        <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <Header />
        <Index />
        <Highlight4 />
        </motion.div>
    )
}

export default Home
