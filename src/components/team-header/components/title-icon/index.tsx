import React from 'react';
import './style.css';

export interface TitleIconProps {
  title: string,
  icon: string,
  reverse?: boolean,
}

export const TitleIcon: React.FC<TitleIconProps> = (props) => {
  return (
    <div className={`title-icon ${props.reverse ? 'title-icon-reverse' : ''}`}>
      <p>{props.title}</p>
      <img src={props.icon} alt="icon" />    
    </div>
  );
};

TitleIcon.defaultProps = {
  reverse: false,
};