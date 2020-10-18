import React, { useEffect, useState } from 'react';
import { Chart, LineAdvance, Axis } from 'bizcharts';
import { blueTeamColor, redTeamColor } from '../../constants';
import './style.css';

export interface GoldGraphProps {
  timestamp: number,
  blueGold: number,
  redGold: number,
}

type GoldData = {
  timestamp: string;
  team: string; 
  gold: number;
};

const MAX_DATA_POINT = 200;
const SAMPLING_INTERVAL = 4;

export const GoldGraph: React.FC<GoldGraphProps> = (props) => {
  const [goldData, setGoldData] = useState<GoldData[]>([]);
  
  useEffect(()=>{
    setGoldData(prevState => {
      const timestamp = new Date(props.timestamp * 1000).toISOString().substr(14, 5);
      const newData = [
        {
          timestamp,
          team: 'blue',
          gold: props.blueGold,
        },  {
          timestamp,
          team: 'red',
          gold: props.redGold,
        },
      ];

      // if there're too many data points, make a sampling in every N points
      return prevState.length < MAX_DATA_POINT ? [...prevState, ...newData] :
        [...prevState.filter((value, index) => 
          (index % SAMPLING_INTERVAL === 0) || ((index - 1) % SAMPLING_INTERVAL === 0),
        ), 
        ...newData];
    });
  }, [props]);

  return (
    <div className='gold-graph'>
      <p>GOLD</p> 
      <Chart 
        padding={[10, 20, 50, 40]} 
        autoFit
        height={300} 
        data={goldData} 
        scale={{ timestamp : {
          tickCount : 10,
        } }}
      >
        <Axis
          name="gold"
          label={{
            formatter(text) {
              return `${Number(text) / 1000}k`;
            },
          }}
        />
        <LineAdvance
          color={['team', (team) => team === 'red' ? redTeamColor : blueTeamColor]} 
          position="timestamp*gold"
        />
      </Chart>
    </div>
  );
};