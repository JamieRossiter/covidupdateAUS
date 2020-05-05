import React, { Component, useState, useEffect } from "react";
import ReactDom from "react-dom";
import { Grid, Segment, Loader } from "semantic-ui-react";
import Infopiece from "../subcomponents/Infopiece.js";

//Images
import InfectedImg from "../img/hospital-bed.png";
import RecoveredImg from "../img/ambulance.png";
import DeathImg from "../img/death.png";

const Infographic = (props) => {
  //State Declaration
  const [isLoading, updateIsLoading] = useState(true);
  const [infographicData, updateInfographicData] = useState({});
  const [lastUpdated, updateLastUpdated] = useState();
  //Effect Hooks
  useEffect(() => {
    //Makes the Loader active and clears the deata in the Infographic component
    updateIsLoading(true);
    clearInfographicData();
    //
    if (props.displayedState == "Australia Total") {
      //Grabs Data for Australia
      fetch("https://corona.lmao.ninja/v2/countries/au")
        .then((res) => res.json())
        .then((data) => {
          filterNationalData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      //Grabs Data for Specified State
      fetch("https://corona.lmao.ninja/v2/jhucsse")
        .then((res) => res.json())
        .then((data) => {
          filterStateData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [props.displayedState]);

  //Function
  //Filters state data from Effect Hook.
  function filterStateData(data) {
    let ausData = data.filter((ausData) => ausData.country == "Australia");
    let displayedState = props.displayedState;
    let stateData = ausData.filter(
      (stateData) => stateData.province === displayedState
    );
    updateInfographicData({
      infected: stateData[0].stats.confirmed,
      recovered: stateData[0].stats.recovered,
      deaths: stateData[0].stats.deaths,
    });
    updateIsLoading(false);
    updateLastUpdated(stateData[0].updatedAt);
  }

  //Filters national data from Effect Hook.
  function filterNationalData(data) {
    let nationalData = data;
    updateInfographicData({
      infected: nationalData.cases,
      recovered: nationalData.recovered,
      deaths: nationalData.deaths,
    });
    updateIsLoading(false);
    updateLastUpdated(new Date(nationalData.updated).toDateString());
  }

  //Clears data from the Infographic component
  function clearInfographicData() {
    updateInfographicData({ infected: null, recovered: null, deaths: null });
  }

  return (
    <div className="infographic-container">
      <Segment.Group size="massive" horizontal>
        <Infopiece
          statColor="blue"
          statImg={InfectedImg}
          statGroup={`Infected in ${props.displayedState}`}
          statNumber={infographicData.infected}
          isLoading={isLoading}
        />
        <Infopiece
          statColor="green"
          statImg={RecoveredImg}
          statGroup={`Recovered in ${props.displayedState}`}
          statNumber={infographicData.recovered}
          isLoading={isLoading}
        />
        <Infopiece
          statColor="red"
          statImg={DeathImg}
          statGroup={`Deaths in ${props.displayedState}`}
          statNumber={infographicData.deaths}
          isLoading={isLoading}
        />
      </Segment.Group>
      <p className="last-updated">Last Updated: {lastUpdated}</p>
      <p className="last-updated">
        <strong>Data Source:</strong>{" "}
        <a
          href="https://systems.jhu.edu/research/public-health/ncov/"
          target="_blank"
        >
          Johns Hopkins University (Center for Systems Science and Engineering).
        </a>
      </p>
    </div>
  );
};

export default Infographic;
