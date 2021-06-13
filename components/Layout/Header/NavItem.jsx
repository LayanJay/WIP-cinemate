const NavItem = ({ name, Icon }) => {
  return (
    <div className="group flex flex-col justify-center items-center w-12 sm:w-20 cursor-pointer hover:text-white">
      <Icon className="w-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 text-sm tracking-widest">
        {name}
      </p>
    </div>
  );
};

export default NavItem;
