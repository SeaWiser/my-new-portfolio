import { Component } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { ActiveNav } from "../../models/activeNav";

class Nav extends Component<{}, ActiveNav> {
  constructor(props: ActiveNav) {
    super(props);

    this.state = {
      activeNav: '#'
    }
  }

  setActiveNav(anchor: string) {
    this.setState({
      activeNav: anchor
    })
  }

  render() {
    return (
      <nav>
        <a href="/#" onClick={() => this.setActiveNav('#')} className={this.state.activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href={'#about'} onClick={() => this.setActiveNav('#about')}
           className={this.state.activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href={'#experience'} onClick={() => this.setActiveNav('#experience')}
           className={this.state.activeNav==='#experience' ? 'active' : ''}><BiBook/></a>
        <a href={'#services'} onClick={() => this.setActiveNav('#services')}
           className={this.state.activeNav==='#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href={'#contact'} onClick={() => this.setActiveNav('#contact')}
           className={this.state.activeNav==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      </nav>
    );
  }
}

export default Nav;