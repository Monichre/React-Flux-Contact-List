import React, { Component } from 'react';
import './App.css';

// Components
import Header from './Components/Header.js';
import Contacts from './Components/Contacts.js';
import AddContact from './Components/AddContact.js';

import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Grid>
              <Row>
                  <Col>
                      <AddContact />
                      <Contacts />
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
