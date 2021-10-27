import { motion } from 'framer-motion'
import MyCart from '../components/MyCart'
const Cart = () => {
    return (
        <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <MyCart />
        </motion.div>
    )
}

export default Cart
