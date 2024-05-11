import { Content, Sidebar } from "../layouts"

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Content />
    </div>
  )
}

export default Home