import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uuid from 'uuid';

export default function DirectorTimeline({ info, lang }) {
  const timeLineItems = info.map(period => {
    const years = period['years'],
          info = period['info'][lang];
    return (
      <TimelineItem
        key={uuid.v4()}
        dateText={years}
        dateInnerStyle={innerStyle}
        bodyContainerStyle={bodyStyle}
        style={{ color: '#e86971' }}
      >
        <p>{info}</p>
      </TimelineItem>
    )
  })
  return (
    <Timeline lineColor={'#ddd'}>
      {timeLineItems}
    </Timeline>
  )
}

const bodyStyle = {
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
}

const innerStyle = {
  background: "#61b8ff",
  color: "#000"
};
