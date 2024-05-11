import { savings } from "../data"
import { iconsImgs, personsImgs } from "../utils/images"

const Savings = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md text-base-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Savings</h3>
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="py-3">
        {savings.map((saving) => (
          <div className="flex flex-col gap-4 justify-between items-start mb-4" key={saving.id}>
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex items-center space-x-4">
                <div className="w-8 flex items-center justify-center overflow-hidden rounded-full">
                  <img src={personsImgs.person_one} alt="Avatar" className="w-full" />
                </div>
                <p className="text-base font-semibold">{saving.title}</p>
              </div>
              <span className="text-base font-semibold">${saving.saving_amount}</span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="font-medium bg-secondary p-1 bg-opacity-40 rounded-md">Date taken {saving.date_taken}</span>
              <span className="font-medium bg-secondary p-1 bg-opacity-40 rounded-md">Amount left ${saving.amount_left}</span>
            </div>
            <progress className="progress progress-secondary w-full" value="60" max="100"></progress>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Savings