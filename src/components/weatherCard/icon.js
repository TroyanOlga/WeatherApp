import React from 'react';

const Icon = (props) => {
    // eslint-disable-next-line
    let icon;
    switch (props.condition) {
      case "Intermittent Clouds":
      case "Mostly Cloudy":
      case "Cloudy":
      case "Mostly Cloudy w/ Showers":
        icon = `./Mostly Cloudy-2x.png`;
        break;
      case "Clear":
        icon = `./Mostly Sunny-2x.png`;
        break;
      case "Haze":
        icon = `./Haze-2x.png`;
        break;
      case "Hail":
        icon = `./Hail-2x.png`;
        break;
      case "Fog":
        icon = `./Fog-2x.png`;
        break;
      case "Tornado":
        icon = `./Tornado-2x.png`;
        break;
      case "Dust":
        icon = `./Dust-2x.png`;
        break;
      case "Mist":
        icon = `./Fog-2x.png`;
        break;
      case "Snow":
        icon = `./Snow-2x.png`;
        break;
      case "Rain":
        icon = `./Rain-2x.png`;
        break;
      case "Drizzle":
        icon = `./Drizzle-2x.png`;
        break;
      case "Thunderstorm":
        icon = `./Severe Thunderstorm-2x.png`;
        break;
      default:
        icon = `./Fog-2x.png`;
        break;
    }
  
  return ( 
    <img src={icon} alt="Weather Icon"/>
  );
}
 
export default Icon;