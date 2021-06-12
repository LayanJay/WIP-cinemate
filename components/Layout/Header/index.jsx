const Header = () => {
  return (
    <header className="flex items-center justify-between py-2">
      <nav></nav>
      <img
        className="w-28 sm:w-36 md:w-44"
        src="/hulu_logo.svg"
        loading="lazy"
        width={200}
      />
    </header>
  );
};

export default Header;
