import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserList from './UserList';
import Details from './Details';
import ReactTooltip from 'react-tooltip';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

const routes = [{
    path: "/details",
    component: Details,
},{
    path: "/user-list",
    component: UserList,
},
];

const routing = [{
    id: "dashboard",
    name: "Dashboard",
    path: "/details",
    component: Details,
    className: " text-secondary h3 fas fa-home",
    dataFor: "dashboard",
},
{
    id: "admin",
    name: "View Sessions",
    path: "/user-list",
    component: UserList,
    className: "text-secondary h3 fa fa-crosshairs",
    dataFor: "admin"
},]

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: null,
            sideDrawerOpen:false
        }
    }

    logout = ( )=>{
        localStorage.clear();
        sessionStorage.clear();
        this.props.history.push('/')
    }

    drawerToggleClickHandler = ()=>{
        this.setState(prevState =>{
           return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backdropClickHandler = ()=>{
        this.setState({
            sideDrawerOpen:false
        })
    }

    isActive = (path, match, location) => !!(match || path === location.pathname);

    render() {
        const routeComponents = routes.map(({
            path, component, i }) => <Route path={path} component={component} key={i} />);
            let backdrop;
            if(this.state.sideDrawerOpen){
                backdrop= <Backdrop click={this.backdropClickHandler}/>
            }
            return (
            <div>
                <BrowserRouter>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                    <div>
                        <div>
                            <nav className="custom-navbar default-layout-navbar navbar-dark bg-dark fixed-top navigation" style={{padding:"0px",height:"10%"}}>
                                {/* <Link className="navbar-brand ml-2" to='/dashboard'>
                                    <img src="/assets/images/assist.jpg" width="100" height="50" alt=""/>
                                </Link> */}
                                <div className="p-2 flex-shrink-1 bd-highlight">
                                     <button className="mt-2 navbar-toggler hidden-sm-up float-xs-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.drawerToggleClickHandler} > <span class="navbar-toggler-icon">
                                    </span> </button> </div>
                                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                                    <ul className="navbar-nav navbar-nav-right">
                                        <li className="nav-item" onClick={this.logout}>
                                            <button type="button" class="btn btn-dark">
                                              Logout <span class="badge badge-secondary"><i className="fa fa-power-off" /></span>
                                            </button>
                                            {/* <Link className="nav-link" to="/" onClick={this.logout} style={{ paddingTop: "30px" }}> */}
                                                {/* <i className="h2 fa fa-power-off mr-5" /> */}
                                            {/* </Link>        */}
                                        </li>
                                    </ul>
                                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                                        <span className="mdi mdi-menu" />
                                    </button>
                                </div>
                            </nav>
                            <div className="content-container page-body-wrapper" style={{paddingLeft:"0px !important"}}>
                                {/* <nav className="sidebar sidebar-offcanvas sticky fixed-left">
                                    <div className="v1">
                                        <ul className="nav">
                                            {
                                                routing.map((item, index) => {
                                                    return (
                                                        <li key={index} className={`nav-item ${this.state.path === item.path ? "active" : ""}`} >
                                                            <ReactTooltip place="right" type="dark" id={item.id} effect="solid"> {item.name} </ReactTooltip>
                                                            <Link onClick={() => this.setState({ path: item.path, activeLink: index })} className="nav-link" isActive={this.isActive.bind(this, item.path)} id={item.id} to={item.path} data-tip data-for={item.dataFor}>
                                                                <i className={item.className} />
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                            <div className="clearfix" />
                                        </ul>
                                    </div>
                                </nav> */}
                                <div className="main-panel">
                                    <div className="main-div">
                                {routeComponents}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Dashboard;