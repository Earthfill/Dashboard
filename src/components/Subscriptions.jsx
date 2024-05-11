import { subscriptions } from "../data"
import { iconsImgs } from "../utils/images"

const Subscriptions = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md text-base-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Subscriptions</h3>
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="py-3">
        {subscriptions.map((subscription) => (
          <div className="flex justify-between items-center mb-4" key={subscription.id}>
            <div className="flex space-x-4 text-gray-300">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-lg">
                <img src={iconsImgs.alert} alt="Icon" className="w-4" />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold">{subscription.title}</p>
                <div>
                  <span className="text-sm font-normal">due {subscription.due_date}</span>
                </div>
              </div>
            </div>
            <span className="text-base font-semibold">${subscription.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subscriptions