import { motion } from 'framer-motion'

const Cart = () => {
    return (
        <motion.div exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}>
            
        </motion.div>
    )
}

export default Cart
