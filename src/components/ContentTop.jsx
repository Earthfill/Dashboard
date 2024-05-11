import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import { iconsImgs } from "../utils/images";

const ContentTop = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  }
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <button 
          type="button" 
          className="flex items-center mr-4"
          onClick={toggle}
        >
          <img src={iconsImgs.menu} alt="Menu" className="w-5" />
        </button>
        <h3 className="text-white text-xl font-semibold">Home</h3>
      </div>
      <div className="flex items-center">
        <button type="button" className="mr-4">
          <img src={iconsImgs.search} alt="Search" className="w-6" />
        </button>
        <button className="relative">
          <img src={iconsImgs.bell} alt="Notification" className="w-6" />
          <span className="absolute w-3 h-3 bg-red-500 rounded-full top-0 right-0"></span>
        </button>
      </div>
    </div>

  )
}

export default ContentTop