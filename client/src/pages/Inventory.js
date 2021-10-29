import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';
import Logo from '../components/Logo';
import Pagination from '../components/Pagination'


const Inventory = () => {
    return (
        <motion.div exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
                <Logo />
            <div className="flex">
            <ProductList />
                </div>
                <Pagination />
        </motion.div>
    )
}

export default Inventory
