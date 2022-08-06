
import "./myChallenges.scss";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";
import TopNav from "../../TopNav";
import Footer from "../../Footer";


export default function MyChallenges() {

  const show = () => {
    alert("clicked show");
  }

  const join = () => {
    alert("clicked join");
  }

  return (
    
    <div>
      <TopNav/>
      <div className="d-flex flex-row justify-content-between border">
        
        <div className="mx-5 my-5">
          <QuickStats />
        </div>

        <div className="mx-5 my-5">
          <ChallengeListItem onShow={show} onJoin={join}/>
          <ChallengeListItem  onShow={show} onJoin={join}/>
          <ChallengeListItem  onShow={show} onJoin={join}/>
        </div>
      </div>



      <Footer/>
    </div>
  );
}