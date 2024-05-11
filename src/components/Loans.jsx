import { iconsImgs } from "../utils/images"

const Loans = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md text-base-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Loans</h3>
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="py-3">
        <div className="flex gap-5 items-end mb-4">
          <div className="radial-progress text-secondary" style={{"--value": 50, "--size": "6rem", "--thickness": "12px"}} role="progressbar">
            <span className="text-base-100">50%</span>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex flex-col justify-between text-sm font-medium">
              <span className="text-base font-semibold">Savings</span>
              <span className="text-sm font-normal">$500,000</span>
            </li>
            <li className="flex flex-col justify-between text-sm font-medium">
              <span className="text-base font-semibold">Target Reached</span>
              <span className="text-sm font-normal">$250,000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Loans