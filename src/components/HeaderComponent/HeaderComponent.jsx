import React from 'react';
import logo from '../../assets/images/logo.png';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import ButtonOutline from '../Button/ButtonOutline';

function HeaderComponent({ toggleSidebar }) {
  // const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <main className="shadow-md w-full top-0 left-0 fixed">
      <nav className="md:h-20 sm:h-16 pm:h-16 bg-primary lg:px-10 pm:px-5 ">
        <section className="flex items-center justify-between">
          {/* menu */}
          <div className=" flex gap-5">
            <button className="" onClick={toggleSidebar}>
              <HiMiniBars3CenterLeft size={24} color="#fff" />
            </button>
            {/* logo */}
            <a href="/">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="rounded-full text-white md:h-20 pm:h-16 border-2 border-red "
              />
            </a>
          </div>

          <ButtonOutline name={'Login'} />
        </section>
      </nav>
    </main>
  );
}

export default HeaderComponent;
