import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';
import Logo from "../components/Logo"
import GenreMenu from "../components/GenreMenu"


const Inventory = () => {
    return (
        <motion.div exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
                <Logo />
            <div className="flex">
                <GenreMenu />
            <ProductList />
                </div>
        </motion.div>
    )
}

export default Inventory
