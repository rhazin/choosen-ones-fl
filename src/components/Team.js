import { motion } from 'framer-motion';


function Team() {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        TEAM
    </motion.div >
}

export default Team;