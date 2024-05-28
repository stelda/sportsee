import React from 'react';
import Widget from './Widget';

function WidgetsContainer() {
    return (
        <div className="widgets-container">
            <Widget title="Durée moyenne des sessions"/>
            <Widget title="Intensité"/>
            <Widget title="Score"/>
        </div>
    );
}

export default WidgetsContainer;
