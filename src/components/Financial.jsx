import { iconsImgs } from "../utils/images"

const Financial = () => {
  return (
    <div className="flex flex-col bg-primary p-4 gap-3 rounded-md text-base-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Financial Advice</h3>
        <button className="flex items-center">
          <img src={ iconsImgs.plus } />
        </button>
      </div>
      <div>
        <p className="text-gray-300 text-base font-semibold">
          Ipsum dolor sit amet consectetur, adipisicing elit. Iste, vitae.....
        </p>
      </div>
    </div>
  )
}

export default Financial