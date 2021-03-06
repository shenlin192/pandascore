import React from 'react';
import { Row, Col } from 'antd';
import { TitleIcon } from './components/title-icon';
import teamLogo1 from './images/Team_logo_1.png';
import teamLogo2 from './images/Team_logo_2.png';
import './style.css';

export interface TeamHeaderProps {
  blueName: string,
  redName: string,
}

export const TeamHeader: React.FC<TeamHeaderProps> = (props) => {
  return (
    <Row align="middle" className="team-header">
      <Col xs={{ span: 24 }} md={{ span: 11 }}><TitleIcon title={props.redName} icon={teamLogo1} /></Col>
      <Col xs={{ span: 24 }} md={{ span: 2 }}>vs</Col>
      <Col xs={{ span: 24 }} md={{ span: 11 }}><TitleIcon title={props.blueName} icon={teamLogo2} reverse /></Col>
    </Row>
  );
};

export default React.memo(TeamHeader);
