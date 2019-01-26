import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uuid from 'uuid';

export default function DirectorTimeline({ info }) {
  const timeLineItems = info.map(period => {
    const years = period['years'],
          info = period['info'];
    return (
      <TimelineItem
        key={uuid.v4()}
        dateText={years}
        style={{ color: '#e86971' }}
      >
        <p>{info}</p>
      </TimelineItem>
    )
  })
  return (
    <Timeline lineColor={'#ddd'}>
      {timeLineItems}
      {/*<TimelineItem
          key="002"
          dateText="04/2009 – 11/2010"
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
          <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateComponent={(
            <div
              style={{
                display: 'block',
                float: 'left',
                padding: '10px',
                background: 'rgb(150, 150, 150)',
                color: '#fff',
              }}
            >
              11/2008 – 04/2009
            </div>
          )}
        >
          <h3>Title, Company</h3>
          <h4>Subtitle</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
        </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h3>Title, Company</h3>
          <h4>Subtitle</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
            </TimelineItem>*/}
    </Timeline>
  )
}
