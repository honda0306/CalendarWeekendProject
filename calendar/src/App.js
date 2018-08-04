import React, { Component } from 'react';
import { Container, PrimaryHeading } from './Styles';
import styled from 'styled-components';
import moment from 'moment';

const CalenderContainer = styled.div`
  display: grid;
  grid-template-rows: auto repeat(6, 100px);
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0;
`;

const Day = styled.div`
  background-color: #cdcdcd;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const DaysOfTheWeek = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
`;

const DayName = styled.div`
  padding: 2rem 0;
`;

class App extends Component {
  render() {
    let days = [];
    for (
      let i = moment([2018, 8, 1]);
      i.isSameOrBefore(moment([2018, 8, 30]));
      i.add(1, 'd')
    ) {
      days.push(i.clone());
    }
    let len = Number(days[0].format('d'));
    for (let i = 0; i < len; i++) {
      days.unshift('');
    }

    return (
      <Container>
        <header>
          <PrimaryHeading my={2}>Calendar</PrimaryHeading>
        </header>

        <CalenderContainer>
          <div style={{ textAlign: 'center' }}>Sunday</div>
          <div style={{ textAlign: 'center' }}>Monday</div>
          <div style={{ textAlign: 'center' }}>Tuesday</div>
          <div style={{ textAlign: 'center' }}>Wednesday</div>
          <div style={{ textAlign: 'center' }}>Thursday</div>
          <div style={{ textAlign: 'center' }}>Friday</div>
          <div style={{ textAlign: 'center' }}>Saturday</div>
          {days.map(day => <Day>{day !== '' ? day.format('D') : null}</Day>)}
        </CalenderContainer>
      </Container>
    );
  }
}

export default App;
