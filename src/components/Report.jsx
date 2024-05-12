import { reportData } from "../data"
import { iconsImgs } from "../utils/images"
import SectionTitle from "./SectionTitle"

const Report = () => {
  return (
    <div className="flex flex-col bg-primary p-4 rounded-md text-base-100">
      <div className="flex justify-between items-center">
        <SectionTitle title='Report' />
        <button className="flex items-center">
          <img src={iconsImgs.plus} alt="Add" className="w-5" />
        </button>
      </div>
      <div className="flex flex-1">
        <div className="grid grid-cols-6 md:mb-10 md:h-full">
          <div className="h-full grid mr-6 mb-28 md:mt-5 md:gap-5">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          {reportData.map((report) => (
            <div className="flex flex-col items-center" key={report.id}>
              <div className="h-full flex flex-col justify-end bg-[#7491ae] rounded-t-md">
                <div className='bg-gray-300 rounded-t-md p-4' style={{ height: `${report.value1 !== null ? "10%" : ""}` }}></div>
                <div className='bg-secondary p-4' style={{ height: `${report.value2 !== null ? "60%" : ""}` }}></div>
              </div>
              <span>{report.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Report