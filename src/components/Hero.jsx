const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 ">
      <h1 className="text-5ml md:text-6xl font-bold tracking-tight">
        Ann Thomas
      </h1>
      <p className="mt-4 text-xl text-gray-400">Beginner Web Developer</p>

      <p className="mt-2 text-gray-500 max-w-xl">
        I build full-stack applications using React and Django and I’m
        constantly learning and improving.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-gray-600 rounded-lg hover:border-gray-400 transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
};
export default Hero;
