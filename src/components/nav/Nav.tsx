import { Component } from 'react';
import './nav.scss';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineTimeline } from "react-icons/md";
import { ActiveNav } from "../../models/activeNav";

class Nav extends Component<{}, ActiveNav> {
  constructor(props: ActiveNav) {
    super(props);

    this.state = {
      activeNav: '#'
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  setActiveNav(anchor: string) {
    this.setState({
      activeNav: anchor
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is above the first section
    const firstSectionTop = sections[0].offsetTop;
    if (scrollPosition < firstSectionTop - 50) {
      this.setState({
        activeNav: '#'
      });
      return;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const currentSection = sections[i];
      const currentSectionTop = currentSection.offsetTop;
      const currentSectionId = currentSection.getAttribute('id');

      if (scrollPosition >= currentSectionTop - 50) {
        this.setState({
          activeNav: `#${currentSectionId}`
        });
        break;
      }
    }
  }

  render() {
    return (
      <nav id="nav">
        <a href="/#" onClick={() => this.setActiveNav('#')}
           className={this.state.activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href={'#about'} onClick={() => this.setActiveNav('#about')}
           className={this.state.activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href={'#experience'} onClick={() => this.setActiveNav('#experience')}
           className={this.state.activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        <a href={'#services'} onClick={() => this.setActiveNav('#services')}
           className={this.state.activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href={'#background'} onClick={() => this.setActiveNav('#background')}
           className={this.state.activeNav === '#background' ? 'active' : ''}><MdOutlineTimeline/></a>
      </nav>
    );
  }
}

export default Nav;