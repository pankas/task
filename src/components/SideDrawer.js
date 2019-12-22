import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import Details from './Details';

const routes = [{
    path: "/details",
    component: Details,
},{
    path: "/user-list",
    component: UserList,
},
];

const routing = [{
    id: "profile",
    name: "My Profile",
    path: "/details",
    component: Details,
    className: " text-secondary h3 fas fa-home",
    dataFor: "profile",
},
{
    id: "list",
    name: "User List",
    path: "/user-list",
    component: UserList,
    className: "text-secondary h3 fa fa-crosshairs",
    dataFor: "list"
},]


class sideDrawer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        admin:false,
      drawerClasses: 'side-drawer'
    }
  }

  componentDidMount(){
      let type = localStorage.getItem('type')
      console.log("type",type)
      if(type === "admin"){
          this.setState({
              admin:true
          })
      }
  }

  isActive = (path, match, location) => !!(match || path === location.pathname);


  render(){
    return(
      <div>
          <nav className={this.props.show?'nav-drawer bg-dark open':'nav-drawer'}>
              <div className="navbar-brand mt-5">
              <ul >
                {
                    <li  className={`nav-item`} >
                        <Link to='/details' className="nav-link text-white">
                            My Profile
                        </Link>
                        {this.state.admin?                                                            
                        <Link to='/user-list' className="nav-link text-white">
                            User List
                        </Link>:null}
                    </li>
                }
                    <div className="clearfix" />
                </ul>
              </div>
                                {/* <div className="ml-5 mt-5 navbar-menu-wrapper d-flex align-items-stretch">
                                    <ul className="navbar-nav navbar-nav-right">
                                    <li>
                                       <Link to="/"><span className="h5 text-white">About Us </span></Link>
                                     </li>
                                     <li>
                                       <Link to="/"><span className="h5 text-white">How To Use </span></Link>
                                     </li>
                                     <li>
                                       <Link to="/select"><span className="h5 text-white">Go back </span></Link>
                                     </li>
                                    </ul>
                                </div> */}
          </nav>
      </div>
    )
  }
}

export default sideDrawer;