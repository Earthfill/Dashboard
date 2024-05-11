import ContentMain from "../components/ContentMain"
import ContentTop from "../components/ContentTop"

const Content = () => {
  return (
    <div className='bg-secondary flex-1 p-2 md:p-5'>
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content