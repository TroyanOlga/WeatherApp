import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './icon';

const WeatherCard = ({temp, condition}) => {
  let highColor;
  let lowColor;
  let background;
  if (temp > 12) {
    highColor = (1 - ((temp - 12)/28)) * 255;
    lowColor = highColor - 150;
    background = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
      )`;
  } else {
    highColor = (1 - (temp + 20) /32) * 255;
    lowColor = highColor + 100;
    background = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
      )`;  
  }

  const Card = styled.div`
    margin: 10 auto;
    background: ${background};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `
  
  return ( 
    <Card>
      <Location />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition}/>
    </Card>
  );
}
 
export default WeatherCard;