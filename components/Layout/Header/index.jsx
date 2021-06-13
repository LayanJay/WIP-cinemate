import NavItem from "./NavItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-5 mb-3">
      <nav className="flex flex-grow justify-evenly max-w-2xl mb-3 sm:mb-0">
        <NavItem name="HOME" Icon={HomeIcon} />
        <NavItem name="TRENDING" Icon={LightningBoltIcon} />
        <NavItem name="VERIFIED" Icon={BadgeCheckIcon} />
        <NavItem name="COLLECTIONS" Icon={CollectionIcon} />
        <NavItem name="SEARCH" Icon={SearchIcon} />
        <NavItem name="ACCOUNT" Icon={UserIcon} />
      </nav>
      <img
        className="w-24 sm:w-28 md:w-32 object-contain"
        src="/hulu_logo.svg"
        loading="lazy"
        width={200}
      />
    </header>
  );
};

export default Header;
