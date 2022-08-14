import Follower from "./Follower";
import "../../RankList.scss";


export default function FollowersList({user}) {

  const bottomList = user.map((follower, index) => {
    return (
    <Follower key={index} user={follower} />
    );
  });


  return (
    <div className="ranking-container mx-5">
      <div className="rank-list">
        { bottomList }
      </div>
    </div>
  )
}