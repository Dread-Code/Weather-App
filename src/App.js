import React, { Component} from 'react';
import { Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import './App.css';
import LocationListContainer from './containers/LocationListContainer.jsx';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

const cities = [
  "Seoul",
  "Medellin",
  "Ciudad de Mexico",
  "Bogota",
  "Tokio",
  "Reykjavik",
  "Oslo"
];


class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position = "sticky" >
            <ToolBar> 
                <Typography variant="h5" color ="inherit">
                  Weather App
                </Typography>
            </ToolBar>
          </AppBar>
        </Row>
        <Row>
          <Col xs = {12} md = {6}>
            <LocationListContainer cities = {cities}/>
          </Col>
          <Col xs ={12} md = {6}>
            <Paper elevation = {4}>
              <div className = "details">
                   <ForecastExtendedContainer/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      
    )
  }

}

export default App;



