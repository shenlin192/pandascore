import * as React from 'react';
import herald from '../../images/herald.svg';

type ItemType = {
  icon: SVGElement;
  label: string;
};

export interface ScoreBarProps {
  items: ItemType[];
  backgroundColor?: string;
  iconColor?: string;
  className?: string;
  ltr?: boolean;
}

export const ScoreBar: React.FC<ScoreBarProps> = (props) => {
  return (
    <div className={props.className}>
      hello
      {/* <img src={herald}/> */}
    </div>
  );
};