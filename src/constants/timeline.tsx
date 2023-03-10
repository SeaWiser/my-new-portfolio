import { MdOutlineSchool, MdWorkOutline } from "react-icons/md"
import { TbCertificate } from "react-icons/tb"
import React from "react";

export const workIcon = {
  icon: <MdWorkOutline/>,
  iconStyle: {background: 'var(--color-primary)', color: '#fff'},
};
export const schoolIcon = {
  icon: <MdOutlineSchool/>,
  iconStyle: {background: 'var(--color-danger)', color: '#fff'},
};
export const certificationIcon = {
  icon: <TbCertificate/>,
  iconStyle: {background: 'var(--color-success)', color: '#fff'},
};

export const workContentStyle = {
  background: 'var(--color-primary)',
  color: '#fff',
  border: "2px solid var(--color-primary)",
  borderRadius: '0.5rem'
};
export const schoolContentStyle = {
  background: 'var(--color-danger)',
  color: '#fff',
  border: "2px solid var(--color-danger)",
  borderRadius: '0.5rem'
};
export const diplomaContentStyle = {
  background: 'var(--color-success)',
  color: '#fff',
  border: "2px solid var(--color-success)",
  borderRadius: '0.5rem'
};
export const blueArrowStyle = {borderRight: '12px solid var(--color-primary)'};
export const redArrowStyle = {borderRight: '12px solid var(--color-danger)'};
export const greenArrowStyle = {borderRight: '12px solid var(--color-success)'};