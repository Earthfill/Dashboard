import { budget } from "../data"
import { iconsImgs } from "../utils/images"

const Budget = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md text-base-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Budget</h3>
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="flex justify-between py-2 rounded-lg">
        <h2 className="text-xl font-semibold">Cash</h2>
        <span className="text-xl font-semibold">$100,000</span>
      </div>
      <div className="bg-[#7491ae] col-span-2 justify-between p-3 rounded-lg">
        {budget.map((item) => (
          <div className="flex justify-between items-start mb-6" key={item.id}>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-lg">
                <img src={iconsImgs.check} alt="Icon" className="w-4" />
              </div>
              <div className="flex flex-col">
                <p className="text-base font-semibold">{item.title}</p>
                <span className="text-gray-300 text-sm font-normal">{item.type}</span>
              </div>
            </div>
            <span className="text-gray-300 text-base font-semibold">$ {item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Budget