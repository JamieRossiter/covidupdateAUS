import React from "react";
import ReactDom from "react-dom";
import InformationSection from "../subcomponents/InformationSection.js";
import { Container, Responsive } from "semantic-ui-react";
import coronavirusImg from "../img/coronavirus.png";
import coughImg from "../img/cough.png";
import spreadImg from "../img/spread.png";
import preventImg from "../img/prevent.png";
import curveImg from "../img/curve.png";
import curveGif from "../img/flatten-the-curve.gif";

//Section of the site that contains information about COVID-19.
const Information = () => {
  return (
    <Container>
      <div id="nav-information"></div>
      <InformationSection image={coronavirusImg} header="What is COVID-19?">
        <p>
          <strong>COVID-19</strong> is a respiratory illness caused by a new
          form of coronavirus - a large family of viruses responsible for
          diseases such as{" "}
          <a href="https://www.who.int/ith/diseases/sars/en/">
            Severe Acute Respiratory Syndrome (SARS)
          </a>{" "}
          and{" "}
          <a href="https://www.who.int/news-room/fact-sheets/detail/middle-east-respiratory-syndrome-coronavirus-(mers-cov)">
            Middle Eastern Respiratory Syndrome (MERS)
          </a>
          .
        </p>
        <p>
          {" "}
          COVID-19 stands for "<strong>Co</strong>rona
          <strong>v</strong>irus <strong>D</strong>isease 20<strong>19</strong>
          ". It gets its name from the Latin word <em>corona</em>, meaning
          "crown". This corresponds to the appearance of the virus. The virus is
          surrounded in crown-shaped particles that give it its infectious
          properties.
        </p>
        <p>
          The disease was first identified in December 2019 in Wuhan, Hubei
          Province, China. Since then, it has spread globally. The resulting
          pandemic has affected hundreds of millions of lives around the world.
        </p>
        <p>(Source: health.gov.au)</p>
      </InformationSection>
      <InformationSection header="What are the symptoms?" image={coughImg}>
        <p>
          COVID-19 symptoms can range from mild to pneumonia-like. Some people
          may recover with ease, others may become very sick.
        </p>
        <p>Those who suffer from COVID-19 may experience:</p>
        <ul>
          <li>shortness of breath</li>
          <li>dry cough</li>
          <li>sore throat</li>
          <li>fever</li>
          <li>fatigue</li>
        </ul>
        <p>If you believe you are showing symptoms of COVID-19:</p>
        <ul>
          <li>stay home</li>
          <li>
            use a{" "}
            <a href="https://www.healthdirect.gov.au/symptom-checker">
              symptom-checker
            </a>
          </li>
          <li>seek medical advice</li>
        </ul>
        <p>
          If you develop a fever, shortness of breath or cough within 14 days of
          arriving home from international travel, you should seek immediate
          medical attention.
        </p>
        <p>(Source: health.gov.au)</p>
      </InformationSection>
      <InformationSection header="How does it spread?" image={spreadImg}>
        <p>
          The virus is highly contagious and can spread from person-to-person.
          It most commonly spread through:
        </p>
        <ul>
          <li>close contact with an infectious person</li>
          <li>
            contact with droplets from an infected person's sneeze or cough
          </li>
          <li>
            touching objects or surfaces that have droplets from an infected
            person, and then touching your mouth or face
          </li>
        </ul>
        <p>
          Infectious people are most contagious in the first three days of
          showing symptoms, however transmission may still be possible before
          symptoms appear.
        </p>
        <p>The virus can survive on surfaces for up to 72 hours.</p>
        <p>(Source: health.gov.au)</p>
      </InformationSection>
      <InformationSection header="How can I prevent it?" image={preventImg}>
        <p>
          As COVID-19 is a new disease, there is no <em>herd immunity</em>{" "}
          within the Australian community. There is also currently no vaccine
          for COVID-19.
        </p>
        <p>
          We all must do the following things to help curb the spread of
          COVID-19 and protect ourselves and others around us:
        </p>
        <ul>
          <li>
            <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/good-hygiene-for-coronavirus-covid-19">
              practice good hygiene
            </a>
          </li>
          <li>
            <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/social-distancing-for-coronavirus-covid-19 ">
              practice social distancing
            </a>
          </li>
          <li>
            <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/limits-on-public-gatherings-for-coronavirus-covid-19">
              avoid public gatherings
            </a>
          </li>
          <li>
            <a href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/self-isolation-self-quarantine-for-coronavirus-covid-19">
              stay at home
            </a>
          </li>
        </ul>
        <p>
          Doing all of these things is essential to{" "}
          <strong>flattening the curve</strong> in Australia.
        </p>
        <p>(Source: health.gov.au)</p>
      </InformationSection>
      <InformationSection
        header="What does 'flattening the curve' mean?"
        image={curveImg}
      >
        <p>Flattening the curve has two main benefits.</p>
        <p>
          Firstly, it prevents health-care systems from being overwhelmed by an
          influx of infected people. Without any preventative measures, the
          number of infected people grows quickly - so quickly, in fact, that
          hospitals and clinics won't have enough space to treat everybody.
        </p>
        <p>This means fewer people get treatment, and more people die.</p>
        <p>
          With preventative measures, however, the rate of infection lowers.
          There aren't as many infected people at any given time, meaning
          healthcare systems can treat everybody without sacrifice.
        </p>
        <Responsive minWidth={992}>
          <figure>
            <img src={curveGif} />
            <figcaption>(Source: ScienceAlert)</figcaption>
          </figure>
        </Responsive>
        <p>
          Secondly, it may reduce the total number of infections throughout the
          pandemic. This is a byproduct of the prevention tactics we take in
          order to flatten the curve, e.g. self-isolation, social distancing,
          good hygiene.
        </p>
      </InformationSection>
    </Container>
  );
};

export default Information;
