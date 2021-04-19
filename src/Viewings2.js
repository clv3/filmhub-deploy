import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
import "./Viewings2.css";

class Viewings2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showings: [],
      wk2showings: [],
    };
  }

  componentDidMount() {
    const showRef = firebase.database().ref("wk1movies");
    showRef.on("value", (snapshot) => {
      let showings = snapshot.val();
      let newState = [];
      for (let show in showings) {
        newState.push({
          title: showings[show].title,
          location: showings[show].location,
          date: showings[show].date,
        });
      }
      this.setState({
        showings: newState,
      });
    });

    const wk2Ref = firebase.database().ref("wk2movies");
    wk2Ref.on("value", (snapshot) => {
      let wk2showings = snapshot.val();
      let wk2newState = [];
      for (let wk2show in wk2showings) {
        wk2newState.push({
          wk2title: wk2showings[wk2show].title,
          wk2location: wk2showings[wk2show].location,
          wk2date: wk2showings[wk2show].date,
        });
      }
      this.setState({
        wk2showings: wk2newState,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Showings</h1>
        <div className="ALL">
          <div className="titles">
            <h2 className="t_week">This week</h2>
          </div>
          <div className="this_week">
            <table class="table table-dark table-striped">
              <thead>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                
              </thead>
              <tbody>
                {this.state.showings.map((show) => {
                  return (
                    <tr>
                      <td>{show.title}</td>
                      <td>{show.location}</td>
                      <td>{show.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="titles">
            <h2 className="n_week">Next week</h2>
          </div>
          <div className="next_week">
            <table class="table table-dark table-striped">
              <thead>
                
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                
              </thead>
              <tbody>
                {this.state.wk2showings.map((wk2show) => {
                  return (
                    <tr>
                      <td>{wk2show.wk2title}</td>
                      <td>{wk2show.wk2location}</td>
                      <td>{wk2show.wk2date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Viewings2;
