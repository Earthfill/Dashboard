import { iconsImgs } from "../utils/images"

const Cards = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md text-base-100">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Cards</h3>
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="font-mono bg-gradient-to-br from-[#4d6174] to-[#8eaac7] rounded-lg flex flex-col justify-between p-4 flex-1">
        <p className="text-gray-300">Balance</p>
        <div className="text-lg text-gray-300 font-semibold">$22,000</div>
        <div className="flex gap-2 text-gray-400">
          <span>**** **** ****</span>
          <span>1234</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400 mb-2">Expires</p>
            <p className="text-sm text-white">12/22</p>
          </div>
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-red-600 -mr-3 z-10"></div>
            <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards