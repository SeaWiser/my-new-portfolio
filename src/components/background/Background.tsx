import React from 'react';
import "./background.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiOutlineStar } from "react-icons/ai"
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import {
  blueArrowStyle,
  certificationIcon,
  diplomaContentStyle,
  greenArrowStyle,
  redArrowStyle,
  schoolContentStyle,
  schoolIcon,
  workContentStyle,
  workIcon
} from "../../constants/timeline";

function Background() {
  const {t} = useTranslation();

  return (
    <section id="background">
      <Fade left>
        <h5>{t('background.subtitle')}</h5>
      </Fade>
      <Fade right>
        <h2>{t('background.title')}</h2>
      </Fade>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--school"
          contentStyle={schoolContentStyle}
          contentArrowStyle={redArrowStyle}
          date={t('background.school_experience_date_1')}
          iconStyle={schoolIcon.iconStyle}
          icon={schoolIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.school_experience_title_1')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.school_experience_subtitle_1')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.school_experience_description_1')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--work"
          contentStyle={workContentStyle}
          contentArrowStyle={blueArrowStyle}
          date={t('background.work_experience_date_2')}
          iconStyle={workIcon.iconStyle}
          icon={workIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.work_experience_title_2')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.work_experience_subtitle_2')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.work_experience_description_2')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--school"
          contentStyle={schoolContentStyle}
          contentArrowStyle={redArrowStyle}
          date={t('background.school_experience_date_3')}
          iconStyle={schoolIcon.iconStyle}
          icon={schoolIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.school_experience_title_3')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.school_experience_subtitle_3')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.school_experience_description_3')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--diploma"
          contentStyle={diplomaContentStyle}
          contentArrowStyle={greenArrowStyle}
          iconStyle={certificationIcon.iconStyle}
          icon={certificationIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.diploma_experience_title_4')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.diploma_experience_subtitle_4')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.diploma_experience_description_4')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--school"
          contentStyle={schoolContentStyle}
          contentArrowStyle={redArrowStyle}
          date={t('background.school_experience_date_5')}
          iconStyle={schoolIcon.iconStyle}
          icon={schoolIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.school_experience_title_5')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.school_experience_subtitle_5')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.school_experience_description_5')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--work"
          contentStyle={workContentStyle}
          contentArrowStyle={blueArrowStyle}
          date={t('background.work_experience_date_6')}
          iconStyle={workIcon.iconStyle}
          icon={workIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.work_experience_title_6')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.work_experience_subtitle_6')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.work_experience_description_6')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--no-children vertical-timeline-element--work"
          contentStyle={workContentStyle}
          contentArrowStyle={blueArrowStyle}
          date={t('background.work_experience_date_7')}
          iconStyle={workIcon.iconStyle}
          icon={workIcon.icon}>
          <h3 className="vertical-timeline-element-title">{t('background.work_experience_title_7')}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {t('background.work_experience_subtitle_7')}
          </h4>
          <p className="vertical-timeline-element-text">{t('background.work_experience_description_7')}</p>
        </VerticalTimelineElement>
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