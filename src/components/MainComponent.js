import React from 'react';
import NivoChordChart from './NivoChordChart';
import NivoRadarChart from './NivoRadarChart';
import NivoCalendarChart from './NivoCalendarChart';

const MainComponent = props => {
  if (!props.fields || !props.tables || !props.tables.DEFAULT) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div style={{height:400, width: 400}}>
      <NivoChordChart />
      </div>
        <div style={{height:600, width: 600}}>
            <NivoRadarChart />
        </div>
        <div style={{height:300, width: 800}}>
            <NivoCalendarChart />
        </div>
    </React.Fragment>
  );
};

export default MainComponent;
