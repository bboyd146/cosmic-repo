import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';
import Logo from '../components/Logo';
import GenreMenu from '../components/GenreMenu';



const Inventory = () => {
    return (
        <motion.div exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Logo />
            <div className="grid grid-cols-5 py-16 px-20">
                <GenreMenu />
                <ProductList />
            </div>
        </motion.div>
    )
}

export default Inventory
