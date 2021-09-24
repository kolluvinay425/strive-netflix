import React from "react";

import LeaveComment from "./LeaveComment";
import CommentList from "./CommentList";

class SingleMovie extends React.Component {
  state = {};

  render() {
    return (
      <div
        className="single-movie-container"
        style={{
          backgroundImage: `linear-gradient(
        270deg,
        rgba(164, 164, 164, 0.13) 0%,
        rgba(0, 0, 0, 0.8883928571428571) 50%,
        rgba(0, 0, 0, 1) 65%
      ),
      url("https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfHVUAAEhu-G5QHH31CutuqX0wBfTK4nzyJXSyUkXm13Stw-yFpmeMzfTkBcmlsWu_CHM-JNr2d2sjncwPLkqG968JMe.jpg?r=321")`,
        }}
      >
        <div className="single-movie-info">
          <h2 className="single-movie-title">Narcos</h2>
          <small className="single-movie-year">2018</small>
          <LeaveComment
            fetchComments={CommentList.fetchComments}
            id={"tt3896198"}
          />
        </div>
        <CommentList id={"tt3896198"} />
      </div>
    );
  }
}
export default SingleMovie;
