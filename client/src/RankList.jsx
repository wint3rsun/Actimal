import ProgressBar from "./pages/profile/ProgressBar";
import RankListItem from "./RankListItem";
import Top3 from "./Top3";

import "./RankList.scss"

export default function RankList({participants, characters}) {

  const bottomList = participants.bottom.map((participant, index) => {
    return (
    <RankListItem key={index} position={index + 4} user={participant} character={characters[participant.character_id]} />
    );
  });

  const topList = participants.top3.map((participant, index) => {
    return (
      <Top3 key={index} position={index + 1} user={participant} character={characters[participant.character_id]} />
    )
  });
  

  return (
    <div className="ranking-container mx-5">
      <div className="top3">
        { topList }
      </div> 
      <div className="rank-list">
        { bottomList }
      </div>
    </div>
  )
}