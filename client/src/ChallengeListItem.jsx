import React from "react";


export default function ChallengeListItem(props) {

  return (
    <section className="d-flex flex-row">
    <img src="https://placekitten.com/200/139" alt="challenge" />
    <li className="card">
      <div className="card-body">
        <h5 className="card-title">Challenge Name</h5>
        <p className="card-text">Challenge Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ultrices ipsum, at rutrum lorem. Phasellus orci metus, lobortis a rutrum in, venenatis nec lorem. Duis a nisl gravida, luctus tortor aliquam, consequat enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rutrum ac dolor in ornare. Proin non sollicitudin eros. Nunc ante dolor, cursus a nunc id, eleifend pulvinar dolor. Maecenas arcu tellus, luctus eget egestas et, convallis quis velit. Aliquam auctor, odio sed sollicitudin bibendum, elit libero rhoncus velit, sed maximus mauris purus et felis. Morbi ipsum neque, commodo egestas lacinia lacinia, iaculis eget massa.</p>
        <p className="card-text">Start Date: July 1st, 2022</p>
        <div className="d-flex flex-row justify-content-end">
          <a onClick={props.onJoin} className="btn btn-primary mx-2">Join</a>
          <a onClick={props.onShow} className="btn btn-primary mx-2">See Details</a>
        </div>
        <br />
      </div>
    </li>
    </section>
  )

}