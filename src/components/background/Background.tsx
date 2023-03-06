import React from 'react';
import "./background.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timeline } from "../../constants/timeline-data";
import { AiOutlineStar } from "react-icons/ai"
import {
  blueArrowStyle,
  diplomaContentStyle,
  greenArrowStyle,
  redArrowStyle,
  schoolContentStyle,
  workContentStyle
} from "../../constants/timeline-style";
import Block from "../shared/Block";

const Background = () => {
  return (
    <section id="background">
      <Block className="animate__fadeInLeft">
        <h5>My Career Evolution</h5>
      </Block>
      <Block className="animate__fadeInRight">
        <h2>My Background</h2>
      </Block>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          return (
            <React.Fragment key={i}>
              <VerticalTimelineElement
                key={i}
                className={`vertical-timeline-element--no-children 
                  ${t.type === 'diploma' && 'vertical-timeline-element--diploma'}
                  ${t.type === 'work' && 'vertical-timeline-element--work'}
                  ${t.type === 'school' && 'vertical-timeline-element--school'}`}
                contentStyle={t.type === 'diploma' ? diplomaContentStyle : (t.type === 'school' ? schoolContentStyle : workContentStyle)}
                contentArrowStyle={t.type === 'diploma' ? greenArrowStyle : (t.type === 'school' ? redArrowStyle : blueArrowStyle)}
                date={t.date}
                {...t.icon}>
                {t.title ? (
                  <React.Fragment>
                    <h3 className="vertical-timeline-element-title">{t.title}</h3>
                    {t.subtitle && (
                      <h4 className="vertical-timeline-element-subtitle">
                        {t.subtitle}
                      </h4>
                    )}
                    {t.desc && <p className="vertical-timeline-element-text">{t.desc}</p>}
                  </React.Fragment>
                ) : undefined}
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
        <VerticalTimelineElement
          id="vertical-timeline-end"
          className="vertical-timeline-element--star"
          iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
          icon={<AiOutlineStar/>}
          contentArrowStyle={{display: 'none'}}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Background;