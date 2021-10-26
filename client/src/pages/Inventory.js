import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';
import Logo from "../components/Logo"

const Inventory = () => {
    return (
        <motion.div exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}>
                <Logo />
            <ProductList />
        </motion.div>
    )
}

export default Inventory
