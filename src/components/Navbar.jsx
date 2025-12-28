const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-80 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        <a href="#" className="font-semibold tracking-tight text-slate-100">
          Ann Thomas <span className="text-indigo-400"> .codes</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slice-300 md:flex">
          <a className="hover:text-slate-100" href="#projects">
            Projects
          </a>
          <a className="hover:text-slate-100" href="#contact">
            Contact
          </a>
          <a
            className="hover:text-slate-100"
            href="https://github.com/Ann-K-T"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition "
        >
          {' '}
          Let's Talk
        </a>
      </div>
    </header>
  );
};
export default Navbar;
