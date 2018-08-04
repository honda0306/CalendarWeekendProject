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
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
`;

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        date: [2018, 8, 1],
        task: 'hello',
        completed: false
      }
    ],
    UItasks: []
  };

  addTask = (date, task) => {
    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks,
        {
          id: Date.now(),
          date,
          task,
          completed: false
        }
      ]
    }));
  };

  getTasks = date => {
    console.log(date);
    this.setState(({ tasks }) => ({
      UItasks: tasks.filter(task => {
        return moment(task.date).isSame(moment(date));
      })
    }));
  };

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
          {days.map(day => (
            <Day onClick={() => this.getTasks(day.toArray().slice(0, 3))}>
              <div>{day !== '' ? day.format('D') : null}</div>
              <input
                type="text"
                onKeyDown={({ target: { value }, key }) =>
                  key === 'Enter'
                    ? this.addTask(day.toArray().slice(0, 3), value)
                    : null
                }
              />
            </Day>
          ))}
        </CalenderContainer>
        <div>{this.state.UItasks.map(task => <div>{task.task}</div>)}</div>
      </Container>
    );
  }
}

export default App;
