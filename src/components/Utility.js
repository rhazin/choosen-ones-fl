
import { motion } from 'framer-motion';

function Utility() {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        UTILITY
    </motion.div >
}

export default Utility;