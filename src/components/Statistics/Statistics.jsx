import {  StatisticList,Title,Wrapper, } from "./Statistics.styled";
import { Element } from "../Element/Element";
import PropTypes from 'prop-types';

export const StatisticsList = ({stats})=>{
    return (
      <Wrapper>
        
        <Title>Upload stats</Title>
  <StatisticList>      
    {
      stats.map(({ id, label, percentage }) => {
        return <Element
        key={id}
        label={label}
        percentage={percentage}
        />
          }) 
    }       
        </StatisticList>
        </Wrapper>
  );
};

StatisticsList.propTypes = {
  id:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  percentage:PropTypes.number.isRequired,
}