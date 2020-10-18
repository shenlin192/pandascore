import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import { webSocketService } from './services/webSocketservics';
import TeamHeader from './components/team-header';
import { ScoreBoard } from './components/score-board';
import { GoldGraph } from './components/gold-graph';
import { LolFrame } from './WebsocketLolFrame';
import './App.css';

function App() {
  const [ lolFrame, seLolFrame ] = useState<LolFrame | null>(null);

  useEffect(() => {
    const subscription = webSocketService('ws://localhost:4000', 1000)
      .subscribe(
        data => {
          seLolFrame(data as LolFrame);
        },
        err => console.error(err),
      );
    return subscription.unsubscribe;
  }, []);

  return (
    <div className="App">
      <Row justify="center">
        <Col xs={{ span: 22 }} md={{ span: 18 }}>     
          {
            lolFrame &&        
              <>
                <TeamHeader
                  blueName={lolFrame.blue.name}
                  redName={lolFrame.red.name}
                />
                <ScoreBoard
                  timestamp={lolFrame.current_timestamp}
                  blueTeamScore={lolFrame.blue}
                  redTeamScore={lolFrame.red}
                />
                <GoldGraph
                  timestamp={lolFrame.current_timestamp}
                  blueGold={lolFrame.blue.gold}
                  redGold={lolFrame.red.gold}
                />
              </>       
          }
        </Col>
      </Row>
    </div>
  );
}

export default App;
