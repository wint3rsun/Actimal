
import "./topNav.scss";
export default function TopNav() {
  
  const logout = async () => {
    localStorage.clear();
  };
  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><div className="logo"><video poster="/ActimalX-Logo.svg" autoPlay loop muted><source src="/ActimalX-Logo.mp4" type="video/mp4"/></video></div></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a href="/profile"><i className="fa fa-fw fa-user" aria-hidden="true"></i> My Profile</a>
            </li>
            <li className="nav-item">
            <a href="/challenges"><i className="fa fa-tasks"></i>Dashboard</a>
            </li>
            <li className="nav-item">
            <a href="/myPets"><i className="fa fa-paw"></i> My Actimals</a>
            </li>
          </ul>
        </div>
        <ul className="nav justify-content-end">
            <li className="nav-item"><a onClick={logout} className="nav-link" href="/"><i className="fa fa-sign-out"></i> Logout</a></li>
          </ul>
      </div>
    </nav>
  )
}