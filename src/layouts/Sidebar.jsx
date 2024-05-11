import { useState } from "react";
import { useSelector } from "react-redux";
import { personsImgs } from "../utils/images";
import { navigationLinks } from "../data";

const Sidebar = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <div className={`${isSidebarOpen ? '' : 'hidden'} flex flex-col items-center bg-primary p-5 transition-all`}>
      <div title="Cassie" className="lg:flex lg:items-center lg:gap-4">
        <div className="w-7 rounded-full shadow">
          <img src={personsImgs.person_two} alt="profile image" className="rounded-full" />
        </div>
        <span className="hidden lg:block text-base-100 text-lg font-semibold">Cassie</span>
      </div>
      <nav className="pt-8">
        <ul className="list-none">
          {navigationLinks.map((navigationLink) => (
            <li className="mb-10 lg:ml-0" key={navigationLink.id}>
              <div onClick={() => setActiveLinkIndex(navigationLink.id)} className={`flex justify-center lg:hidden rounded-full p-2 ${navigationLink.id === activeLinkIndex ? 'bg-secondary' : 'hover:bg-secondary transition-all border'}`}>
                <a href="#">
                  <img src={navigationLink.image} alt={navigationLink.title} />
                </a>
              </div>
              <a href="#" onClick={() => setActiveLinkIndex(navigationLink.id)} className={`hidden lg:flex rounded-full lg:rounded-lg items-center gap-5 justify-between p-2 lg:px-6 lg:py-3 ${navigationLink.id === activeLinkIndex ? 'bg-secondary' : 'hover:border-secondary transition-all border'}`}>
                <img src={navigationLink.image} className="w-6" alt={navigationLink.title} />
                <span className="capitalize">{ navigationLink.title }</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
