import request from "../../lib/request";
import { useRouter } from "next/router";

const BottomNav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-16 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 ease-in transform hover:scale-125 hover:text-primary font-medium"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-second h-10 w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-second h-10 w-1/12" />
    </nav>
  );
};

export default BottomNav;
