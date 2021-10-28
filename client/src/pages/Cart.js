import { motion } from 'framer-motion'
import MyCart from '../components/MyCart'
import Inventory from './Inventory'
const Cart = () => {
    return (
        <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <MyCart />
        <Inventory />
        </motion.div>
    )
}

export default Cart
