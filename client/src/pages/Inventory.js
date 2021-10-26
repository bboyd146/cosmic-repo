import { motion } from 'framer-motion'
import InventoryItems from '../components/InventoryItems'


const Inventory = () => {
    return (
        <motion.div exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}>
            <InventoryItems />
        </motion.div>
    )
}

export default Inventory
