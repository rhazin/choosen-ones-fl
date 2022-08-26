
import { motion } from 'framer-motion';

function RoadMap() {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        ROADMAP
    </motion.div >
}

export default RoadMap;