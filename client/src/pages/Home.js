// import Logo from '../Logo'
import { motion } from 'framer-motion'
import Header from '../components/Header';
import Highlight4 from '../components/Highlight';


const Home = () => {
    return (
        <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        >
        <Header />
        <Highlight4 />
        </motion.div>
    )
}

export default Home
