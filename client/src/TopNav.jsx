
import "./topNav.scss";
export default function TopNav() {
  return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Final !</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
            <a href="/profile"><i class="fa fa-fw fa-user" aria-hidden="true"></i> My Profile</a>
            </li>
            <li class="nav-item">
            <a href="/dashboard"><i class="fa fa-tasks"></i> Dashboard</a>
            </li>
            <li class="nav-item">
            <a href="/myChallenges"><i class="fa fa-bullseye"></i> My Challenges</a>
            </li>
            <li class="nav-item">
            <a href="/myPets"><i class="fa fa-paw"></i> My Pets</a>
            </li>
          </ul>
        </div>
        <ul class="nav justify-content-end">
            <li class="nav-item"><a class="nav-link" href="/"><i class="fa fa-sign-out"></i> Logout</a></li>
          </ul>
      </div>
    </nav>
  )
}