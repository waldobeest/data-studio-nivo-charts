import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
const MyResponsiveRadar = () => {
    const data = [
        {
            "taste": "fruity",
            "chardonay": 112,
            "carmenere": 103,
            "syrah": 89
        },
        {
            "taste": "bitter",
            "chardonay": 73,
            "carmenere": 45,
            "syrah": 119
        },
        {
            "taste": "heavy",
            "chardonay": 58,
            "carmenere": 33,
            "syrah": 77
        },
        {
            "taste": "strong",
            "chardonay": 78,
            "carmenere": 105,
            "syrah": 25
        },
        {
            "taste": "sunny",
            "chardonay": 48,
            "carmenere": 88,
            "syrah": 28
        }
    ]
    return (


        <ResponsiveRadar
            data={data}
            keys={['chardonay', 'carmenere', 'syrah']}
            indexBy="taste"
            maxValue="auto"
            margin={{top: 70, right: 80, bottom: 40, left: 80}}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{from: 'color'}}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{theme: 'background'}}
            dotBorderWidth={2}
            dotBorderColor={{from: 'color'}}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{scheme: 'nivo'}}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    );
}
export default  MyResponsiveRadar