import { motion } from "framer-motion";

function App() {
  return (
    <main className="h-screen bg-slate-800">
      <div className="container mx-auto">
        {/* header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
            stiffness: 130,
          }}
          className="flex justify-between items-center text-white h-16"
        >
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
        <section className="lg:py-48">
          <div className="flex items-center justify-between">
            {/* left */}
            <div className="space-y-3">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                  stiffness: 130,
                }}
                className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]"
              >
                framer 3D Website
              </motion.h2>
              <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.8,
                stiffness: 130,
              }}
              className="text-white lg:max-w-[40rem] lg:text-5xl md:text-4xl font-semibold">
                The<span className="text-orange-500"> next</span> generation
              </motion.p>
              <motion.div 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{
                 type: "spring",
                 duration: 1,
                 delay: 0.9,
                 stiffness: 130,
               }}
              className="flex items-center gap-4">
                <button className="py-3 px-6 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                  <span className="font-bold text-white">More Details</span>
                </button>
                <button className="py-3 px-6 rounded-md border-2 border-orange-500 my-4 hover:translate-y-1 duration-150">
                  <span className="font-bold text-orange-500">Samples</span>
                </button>
              </motion.div>
            </div>

            {/* 3D model */}
            <div></div>
          </div>
        </section>
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
