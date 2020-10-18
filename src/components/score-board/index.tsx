import React from 'react';
import { Row, Col } from 'antd';
import { LolTeamStats } from '../../WebsocketLolFrame';
import { ScoreBar } from './components/score-bar';
import { blueTeamColor, redTeamColor } from '../../constants';
import { ReactComponent as Inhibitor } from './images/inib.svg';
import { ReactComponent as Gold } from './images/gold.svg';
import { ReactComponent as Tower } from './images/tower.svg';
import { ReactComponent as Drake } from './images/drake.svg';
import { ReactComponent as Herald } from './images/herald.svg';
import { ReactComponent as Nashor } from './images/nashor.svg';
import { ReactComponent as Kills } from './images/kills.svg';
import './style.css';

export interface ScoreBoardProps {
  timestamp: number,
  blueTeamScore: LolTeamStats,
  redTeamScore: LolTeamStats,
}

type ScoreItems = 'inhibitors' | 'towers' | 'gold' |'herald' | 'drakes' | 'nashors';

const resources: ScoreItems[] = ['inhibitors', 'towers', 'gold'];
const neutralCreeps: ScoreItems[] = ['herald', 'nashors', 'drakes'];

const ScoreIconList = {
  inhibitors: <Inhibitor />,
  towers: <Tower />,
  gold: <Gold />,
  drakes: <Drake />,
  nashors: <Nashor />,
  herald: <Herald />,
};

const getItems = (keys: ScoreItems[], teamScore: LolTeamStats) => keys.map(key => ({
  icon: ScoreIconList[key],
  label: key !== 'gold' ?  `${teamScore[key]}` :  `${teamScore[key] / 1000} K`,
}));

export const ScoreBoard: React.FC<ScoreBoardProps> = (props) => {
  return (
    <div className="score-board">
      <Row justify="center" align="middle">
        <Col flex={10}>
          <ScoreBar items={getItems(resources, props.blueTeamScore)} iconColor={blueTeamColor} backgroundColor='#F4F7FA' />
        </Col>
        <Col flex={4}> 
          <div className="kill-block">
            {props.blueTeamScore.kills} <Kills /> {props.redTeamScore.kills}
          </div> 
        </Col>
        <Col flex={10}>
          <ScoreBar items={getItems(resources, props.redTeamScore)} iconColor={redTeamColor} backgroundColor='#F4F7FA' reverse />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col flex={21}>
          <ScoreBar items={getItems(neutralCreeps, props.blueTeamScore)} iconColor={blueTeamColor} />
        </Col>
        <Col flex={6}> 
          <div className="time-block">
            {new Date(props.timestamp * 1000).toISOString().substr(14, 5)}
          </div> 
        </Col>
        <Col flex={21}>
          <ScoreBar items={getItems(neutralCreeps, props.redTeamScore)} iconColor={redTeamColor} reverse />
        </Col>
      </Row>
    </div>     
  );
};
