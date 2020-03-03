import React from 'react';
import NivoChordChart from './NivoChordChart';
import NivoRadarChart from './NivoRadarChart';
import NivoCalendarChart from './NivoCalendarChart';

const MainComponent = props => {
  if (!props.fields || !props.tables || !props.tables.DEFAULT) {
      // TODO replace with Vantage Spinner
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
        <div style={{height:400, width: 400}}>
             <NivoChordChart {...props}/>
        </div>
        <div style={{height:600, width: 600}}>
            <NivoRadarChart {...props}/>
        </div>
        <div style={{height:300, width: 800}}>
            <NivoCalendarChart {...props}/>
        </div>
    </React.Fragment>
  );
};

export default MainComponent;
