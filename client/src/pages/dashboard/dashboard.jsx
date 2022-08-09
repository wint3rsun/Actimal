
import TopNav from "../../TopNav";
import Footer from "../../Footer";
import ChallengeListItem from "../../ChallengeListItem";
import QuickStats from "../../QuickStats";


export default function Dashboard() {

    const challenge =     {
      id: 1,
      start_date: "21-01-2022",
      end_date: "2022-01-22T08:00:00.000Z",
      progress: "0.00",
      quest_id: 1,
      name: "10k Steps",
      description: "Lets get to 10k steps!",
      img_url: "https://img.freepik.com/free-vector/moving-forward-concept-illustration_114360-1641.jpg?w=1380&t=st=1659989244~exp=1659989844~hmac=271b63c1bc1e3e3e4a25bc140b94522552b2afcde7fa60996ab5876c22f43017",
      goal: 10000,
      goal_units: "steps",
      required_level: 0,
      base_experience: 10,
      first_place_exp_bonus: 5,
      second_place_exp_bonus: 3,
      third_place_exp_bonus: 1
      }

  return (
    <div>
      <TopNav/>
      <div className="d-flex flex-row justify-content-between border">
        
        <div className="mx-5 my-5">
          <QuickStats />
        </div>

        <div className="mx-5 my-5">
          <ChallengeListItem challenge={challenge} />
        </div>
      </div>



      <Footer/>
    </div>
  );
}