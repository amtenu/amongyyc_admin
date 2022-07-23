import "./single.scss";
import Sidebar from "../../component/sidebar/SideBar";
import Navbar from "../../component/navbar/NavBar";
//  import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src=""
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Amanuel Tewolde</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">aman@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    17 Hidden Valley Gate NW,Calgary,Alberta,T2N0B0
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Canada</span>
                </div>
              </div>
            </div>
          </div>
           {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>  */}
        </div>
        <div className="bottom">
        <h1 className="title">Last Played Tasks</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;