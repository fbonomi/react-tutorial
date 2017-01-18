import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './App.css';
import BaseLayout from '../../layouts/Base/Base';

class App extends Component {
  render() {
    return (
      <div>
        <BaseLayout title="Home">
            <p>Sono la pagina home</p>
            <Button label="Ciao sono federico" />
            <Button label="Ciao sono alessandro" />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
