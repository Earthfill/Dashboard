import Budget from "./Budget"
import Cards from "./Cards"
import Financial from "./Financial"
import Loans from "./Loans"
import Report from "./Report"
import Savings from "./Savings"
import Subscriptions from "./Subscriptions"
import Transactions from "./Transactions"

const ContentMain = () => {
  return (
    <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-x-4">
      <Cards />
      <Transactions />
      <Report />
      <Budget />
      <div className="grid md:col-span-2 md:grid-cols-2 gap-4">
        <Subscriptions />
        <Loans />
        <Savings />
        <Financial />
      </div>
    </div>
  )
}

export default ContentMain