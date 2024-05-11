import { transactions } from "../data"
import { iconsImgs } from "../utils/images"

const Transactions = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-base-100">All Transactions</h3>
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="mt-4">
        <div className="grid gap-y-4">
          {transactions.map((transaction) => (
            <div className="flex justify-between items-center" key={transaction.id}>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={transaction.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-base-100">{transaction.name} <span className="text-gray-300">{transaction.date}</span></p>
                  <p className="text-gray-300 cursor-pointer">Description here</p>
                </div>
              </div>
              <div className="font-bold text-scarlet">${transaction.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions