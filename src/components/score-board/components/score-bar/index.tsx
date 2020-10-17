import * as React from 'react';
import './style.css';

type ItemType = {
  icon: React.ReactElement;
  label: string;
};

export interface ScoreBarProps {
  items: ItemType[];
  backgroundColor?: string;
  iconColor?: string;
  className?: string;
  reverse?: boolean;
}

export const ScoreBar: React.FC<ScoreBarProps> = (props) => {
  return (
    <div
      className={`score-bar ${props.reverse ? 'score-bar-reverse' : ''}`}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {
        props.items.map((item)=> 
          [
            <span className="item-label" key={item.label}>{item.label}</span>,
            <span style={{ color: props.iconColor }} key={`${item.label}-icon`}> 
              {item.icon}
            </span>,
          ])
      }
    </div>
  );
};

ScoreBar.defaultProps = {
  reverse: false,
};