// import Logo from '../Logo'
import { motion } from 'framer-motion'
import Header from '../components/Header';
import Cart from '../components/Cart';



const Home = () => {
    return (
        <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        >
        <Header />
        </motion.div>
    )
}

export default Home
