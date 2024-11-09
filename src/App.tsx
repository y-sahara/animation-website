import {motion} from "framer-motion"

function App() {
  return (
    <main className="h-screen bg-slate-600">
      <div className="container mx-auto">
        {/* header */}
        <motion.header 
        initial={{y:-100}}
        animate={{y:0}}
        transition={{
          type:"spring",
          duration:1,
          delay:0.5,
          stiffness:130,

        }}
        className="flex justify-between items-center text-white h-16">
          <span className="font-bold text-2xl">framer website</span>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        {/* hero */}
        <section></section>
      </div>
    </main>
  );
}

export default App;

{
  /* <div className="h-screen flex items-center justify-center"></div>
<motion.div
  initial={{ x: 200 }}
  animate={{ x: 0 }}
  transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 300 }}
  className="w-28 h-28 bg-red-500"
></motion.div>
 </div> */
}
