import { links } from "../../data/data";
import { useStateContext } from "../../contexts/ContextProvider";
import Link from "next/link";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="pl-3 h-screen overflow-auto pb-10 swatch_bg-brown">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center gap-3 ml-3 mt-7 text-xl font-extrabold tracking-tight text-slate-900">
            <Link href="/">
              <span className="text-2x text-gray-100">Groovy</span>
            </Link>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title} className="flex flex-col">
                <p className="swatch_text-primary m-3 mb-1 mt-6  tracking-widest text-sm uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <Link href={`/${link.name}`} key={link.name}>
                    <div className="flex items-center gap-4 pl-3 py-1 my-1 text-md text-gray-100 cursor-pointer hover:text-[#192cfd] transition-colors duration-200 hover:border-r-2 border-[#192cfd]">
                      {link.icon}
                      <span className="capitalize text-lg">{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Sidebar;
