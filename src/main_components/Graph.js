import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { Line } from "react-chartjs-2";

const Graph = (props) => {
  //State Declaration
  const [graphData, updateGraphData] = useState(null);
  const [labelData, updateLabelData] = useState(null);
  const [infectedData, updateInfectedData] = useState(null);
  const [recoveredData, updateRecoveredData] = useState(null);
  const [deathsData, updateDeathsData] = useState(null);
  //Effect Hooks
  useEffect(() => {
    //Get Graph Data for Australia
    if (props.displayedState == "Australia Total") {
      fetch("https://api.thevirustracker.com/free-api?countryTimeline=AU")
        .then((res) => res.json())
        .then((data) => {
          filterNationalData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      //Get Graph Data for a Specified State
      fetch("https://corona.lmao.ninja/v2/historical")
        .then((res) => res.json())
        .then((data) => {
          filterStateData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [props.displayedState]);

  useEffect(() => {
    //Update Graph Data every time labelData, infectedData, recoveredData or deathsData is updated
    updateGraphData({
      labels: labelData,
      datasets: [
        {
          label: `Infected in ${props.displayedState}`,
          borderColor: "#2185d0",
          data: infectedData,
        },
        {
          label: `Recovered in ${props.displayedState}`,
          borderColor: "#21ba45",
          data: recoveredData,
        },
        {
          label: `Deaths in ${props.displayedState}`,
          borderColor: "#db2828",
          data: deathsData,
        },
      ],
    });
  }, [labelData, infectedData, recoveredData, deathsData]);

  //Functions
  //Filters state data obtained in the Effect Hook.
  function filterStateData(data) {
    let ausData = data.filter((ausData) => ausData.country == "Australia");
    let displayedState = props.displayedState;
    let stateData = ausData.filter(
      (stateData) => stateData.province == displayedState.toLowerCase()
    );
    let timelineData = stateData[0].timeline;
    let labelData = Object.keys(timelineData.cases);
    updateLabelData(labelData);
    let infectedData = Object.values(timelineData.cases);
    updateInfectedData(infectedData);
    let recoveredData = Object.values(timelineData.recovered);
    updateRecoveredData(recoveredData);
    let deathsData = Object.values(timelineData.deaths);
    updateDeathsData(deathsData);
  }

  //Filters national data obtained in the Effect Hook.
  function filterNationalData(data) {
    let nationalData = data.timelineitems[0];
    let labelData = Object.keys(nationalData);
    labelData.pop();
    updateLabelData(labelData);
    let values = Object.values(nationalData);
    let infectedData = values.map((infected) => infected.total_cases);
    infectedData.pop();
    updateInfectedData(infectedData);
    let recoveredData = values.map((recovered) => recovered.total_recoveries);
    recoveredData.pop();
    updateRecoveredData(recoveredData);
    let deathsData = values.map((deaths) => deaths.total_deaths);
    deathsData.pop();
    updateDeathsData(deathsData);
  }

  return (
    <div id="nav-data" className="graph-container">
      <Line
        responsive
        data={graphData}
        width={900}
        height={400}
        options={{ maintainAspectRatio: true }}
      ></Line>
    </div>
  );
};

export default Graph;
