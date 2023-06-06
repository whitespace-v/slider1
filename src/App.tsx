import React from 'react';
import './styles/_index.scss'
import Slider from "./components/Slider";
import Thumb from "./components/Thumb";
const App = () => {
    return (
        <React.Fragment>
            <Thumb/>
            <Thumb/>
            <Slider/>
            <Thumb/>
        </React.Fragment>
    );
};

export default App;