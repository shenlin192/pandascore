import * as React from 'react';

export interface GoldGraphProps {
  timestamp: number,
  blueGold: number,
  redGold: number,
}

export const GoldGraph: React.FC<GoldGraphProps> = (props) => {
  return (
    <div>
      GoldGraph
    </div>
  );
};