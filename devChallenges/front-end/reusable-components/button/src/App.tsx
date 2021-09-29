import React from 'react';
import './App.css';
import { Button } from './Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        id="button-default-lg"
        size="lg"
      >
        Default Larget
      </Button>
      <Button
        id="button-default-md"
        size="md"
      >
        Default Medium
      </Button>
      <Button
        id="button-default-sm"
        size="sm"
      >
        Default Small
      </Button>
      <Button
        id="button-outline-md"
        size="md"
        variant="outline"
      >
        Outline
      </Button>
      <Button
        id="button-disabled-md"
        size="md"
        disabled
      >
        Disabled
      </Button>
    </div>
  );
}

export default App;
