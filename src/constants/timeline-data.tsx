import { MdOutlineSchool, MdWorkOutline } from "react-icons/md"
import { TbCertificate } from "react-icons/tb"

const workIcon = {
  icon: <MdWorkOutline/>,
  iconStyle: {background: 'var(--color-primary)', color: '#fff'},
};
const schoolIcon = {
  icon: <MdOutlineSchool/>,
  iconStyle: {background: 'var(--color-danger)', color: '#fff'},
};
const certificationIcon = {
  icon: <TbCertificate/>,
  iconStyle: {background: 'var(--color-success)', color: '#fff'},
};

export const timeline = [
  {
    icon: schoolIcon,
    type: 'school',
    date: '2018 - 2019',
    title: 'Web Developer-Integrator (Esecad & OpenClassrooms)',
    subtitle: 'Online Course',
    desc: 'Distance learning in web development to master the basics of HTML, CSS, and PHP languages.',
  },
  {
    icon: workIcon,
    type: 'work',
    date: 'April 2019 - May 2019',
    title: 'Web Developer Internship',
    subtitle: 'Lyon, France',
    desc: 'In an environment requiring PHP language, Wordpress CMS and agile methodology, I assisted developers with various tasks and meetings.',
  },
  {
    icon: schoolIcon,
    type: 'school',
    date: '2019 - 2020',
    title: 'Web and Mobile Web Developer (WebForce3)',
    subtitle: 'Lyon, France',
    desc: 'Intensive in-person training. Study of all essential concepts for developing a web application using various technologies, starting from front-end, back-end, WordPress, and responsive web design.',
  },
  {
    icon: certificationIcon,
    type: 'diploma',
    title: 'Diploma of Bachelor\'s Degree Level',
    subtitle: 'Lyon, France',
    desc: 'Obtaining of CNCP certifications in Web Integration Techniques No. 1447 & Web Development Techniques No. 1448 in web and mobile development (equivalent to a Bachelor\'s degree level).',
  },
  {
    icon: schoolIcon,
    type: 'school',
    date: '2020 - 2021',
    title: 'PHP/Symfony Developer',
    subtitle: 'Online Course',
    desc: 'Distance learning for back-end to deepen current PHP skills in the areas of OOP and modeling, ',
  },
  {
    icon: workIcon,
    type: 'work',
    date: '2021 - 2022',
    title: 'Angular & Node.JS/Express Developer',
    subtitle: 'Lyon, France',
    desc: 'Developer role in the Web Factory team to maintain and troubleshoot bugs & develop new features for the company\'s intranet CRM website. ' +
      '\nDevelopment process based on AGILE methodology. In this context, my role was also to attend Daily Meetings, Sprint Planning, Sprint Review and Sprint Retrospective meetings to facilitate development and address various issues.',
  },
  {
    icon: workIcon,
    type: 'work',
    date: '2022 - 2023',
    title: 'Full Stack Web Developer',
    subtitle: 'Lyon, France',
    desc: 'Web application development using Angular, Vue, React, PHP and Laravel technologies through multiple clients :\n' +
      '- Development of new features\n' +
      '- Maintenance and bug resolution\n' +
      '- Meeting requirements through mockups and technical specifications',
  },
];