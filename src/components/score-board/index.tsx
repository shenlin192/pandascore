import React, { useEffect, useState } from 'react';
import { LolTeamStats } from '../../WebsocketLolFrame';
import { ScoreBar } from './components/score-bar';

export interface ScoreBoardProps {
  timestamp: number,
  blueTeamScore: LolTeamStats,
  redTeamScore: LolTeamStats,
}

export const ScoreBoard: React.FC<ScoreBoardProps> = (props) => {
  return (
    <div>
      {/* <ScoreBar /> */}
    </div>
  );
};
