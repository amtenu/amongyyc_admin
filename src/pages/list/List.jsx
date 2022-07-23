import "./list.scss"
import Sidebar from "../../component/sidebar/SideBar"
import Navbar from "../../component/navbar/NavBar"
import Datatable from "../../component/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List