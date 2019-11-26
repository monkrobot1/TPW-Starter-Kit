import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Headline } from './components/FontStyles';
import { Flex } from 'rebass/styled-components';
import baseTheme from './themes/baseTheme';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

import './App.css';

function App() {
  const startData = [
    {
      'follower Name': 'Aaron Jellyfish',
      MRN: '010',
      status: 'One week ago',
      'Avg glucose': '196',
      'time in range': '68',
      timeSubmitted: '7/6/2019'
    },
    {
      'follower Name': 'Bridget Jellyfish',
      MRN: '011',
      status: 'pending prescription',
      'Avg glucose': '128',
      'time in range': '82',
      timeSubmitted: '7/26/2019'
    },
    {
      'follower Name': 'Iona Jellyfish',
      MRN: '012',
      status: 'looping',
      'Avg glucose': '142',
      'time in range': '79',
      timeSubmitted: '8/9/2019'
    },
    {
      'follower Name': 'James Jellyfish',
      MRN: '013',
      status: 'looping',
      'Avg glucose': '119',
      'time in range': '84',
      timeSubmitted: '8/10/2019'
    },
    {
      'follower Name': 'Jill Jellyfish',
      MRN: '014',
      status: 'One week ago',
      'Avg glucose': '178',
      'time in range': '68',
      timeSubmitted: '9/1/2019'
    },
    {
      'follower Name': 'Keira Jellyfish',
      MRN: '015',
      status: 'pending prescription',
      'Avg glucose': '132',
      'time in range': '81',
      timeSubmitted: '9/3/2019'
    },
    {
      'follower Name': 'Maurice Jellyfish',
      MRN: '016',
      status: 'looping',
      'Avg glucose': '125',
      'time in range': '85',
      timeSubmitted: '9/3/2019'
    },
    {
      'follower Name': 'NewRx Jellyfish',
      MRN: '017',
      status: 'looping',
      'Avg glucose': '148',
      'time in range': '76',
      timeSubmitted: '9/5/2019',
      allSettings: {
        user_id: '91376b8a-7b2e-454f-aeec-1fdb39244e66',
        firstName: 'NewRx',
        lastName: 'Jellyfish',
        birthday: '2019-09-09',
        mrn: '',
        email: 'daniel@monkrobot.com',
        sex: 'male',
        weight: '',
        yearOfDiagnosis: '',
        phoneNumber: '2024366418',
        street1Address: '3600 Fillmore St',
        street2Address: '#404',
        cityAddress: 'San Francisco',
        zipcodeAddress: '94123',
        stateAddress: 'Arkansas',
        basalArray: [
          {
            id: 'VAfO5Hu-',
            time: '00:00',
            val: 0.05,
            isFirst: true
          },
          {
            id: 'pBTnppY',
            time: '00:30',
            val: 0.05,
            isFirst: false
          }
        ],
        bolusArray: [
          {
            id: 'XjFj7QYb',
            time: '00:00',
            val: 10,
            isFirst: true
          }
        ],
        sensitivityArray: [
          {
            id: 'Iw7Y0n--',
            time: '00:00',
            val: 100,
            isFirst: true
          }
        ],
        suspendThreshold: 80,
        correctionRange: [
          {
            id: 'p2NPUlb',
            time: '00:00',
            lowerLimit: 110,
            upperLimit: 120,
            isFirst: true
          },
          {
            id: 'wzTW9Me',
            time: '00:30',
            lowerLimit: 110,
            upperLimit: 120,
            isFirst: false
          }
        ],
        insulinModel: 'rapidAdult',
        maxBasal: 5,
        maxBolus: 10,
        selfStart: '',
        therapySetting: '',
        loopMode: 'som',
        acknowledgedTerms: true,
        timeSubmitted: '2019-09-11T15:25:46.594Z',
        activeStep: 4
      }
    }
  ];

  const [data, updateData] = useState(startData);

  const [navShown, changeNavVisibility] = useState(true);

  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <Router>
          <Route
            path="/"
            exact
            render={props => (
              <Flex width={1} justifyContent="center" css="min-height: 500px; ">
                <Flex width={[1, 1, 1, 0.66]} mt={5} flexWrap="wrap">
                  <Flex
                    justifyContent="center"
                    p={[3, 4, 5]}
                    bg="background"
                    flexWrap="wrap"
                    width={[1, 0.5, 0.33, 0.33]}
                  >
                    <Headline css="font-weight: 900 !important;">baseTheme container</Headline>
                  </Flex>
                  <ThemeProvider theme={lightTheme}>
                    <Flex
                      justifyContent={['flex-start', 'flex-end', 'center', 'center']}
                      bg="primaryFont"
                      p={[3, 4, 5]}
                      flexWrap="wrap"
                      width={[1, 0.5, 0.33]}
                    >
                      <Headline>lightTheme container</Headline>
                    </Flex>
                  </ThemeProvider>
                  <ThemeProvider theme={darkTheme}>
                    <Flex justifyContent="center" p={[3, 4, 5]} bg="background" flexWrap="wrap" width={[1, 0.5, 0.33]}>
                      <Headline> darkTheme container</Headline>
                    </Flex>
                  </ThemeProvider>
                </Flex>
              </Flex>
            )}
          />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
