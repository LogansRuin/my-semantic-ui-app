import React from 'react'
import './App.css'
import {Grid, Button, Container } from 'semantic-ui-react'
import HeaderBar from './components/HeaderBar'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Grid columns={5}>
          <HeaderBar />
          <Grid.Row>
            <Grid.Column>
              <Button fluid>Number 1</Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid>Number 2</Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid>Number 3</Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid>Number 4</Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid>Number 5</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App
