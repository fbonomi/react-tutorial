import React, { Component } from 'react';
import './App.css';
import BaseLayout from '../../layouts/Base/Base';
import Button from 'react-bootstrap/lib/Button';

class App extends Component {
  render() {
    return (
      <div>
        <BaseLayout title="Home" menuItem="home">
            <p>Sono la pagina home</p>
            <Button bsStyle="success" bsSize="small">
                Ciao sono federico
            </Button>
            <Button bsStyle="success" bsSize="small">
                Ciao sono alessandro
            </Button>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
