import React, { Component } from 'react';
import './testimonials.css';
import Avt1 from '../../assets/avatar1.jpg';
import Avt2 from '../../assets/avatar2.jpg';
import Avt3 from '../../assets/avatar3.jpg';
import Avt4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from "swiper";

const data = [
  {
    avatar: Avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda autem cum ducimus eveniet' +
      ' iure numquam sed tenetur, vitae voluptate! Delectus doloribus itaque maxime mollitia non, placeat possimus' +
      ' tempore voluptatum?'
  },
  {
    avatar: Avt2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda autem cum ducimus eveniet' +
      ' iure numquam sed tenetur, vitae voluptate! Delectus doloribus itaque maxime mollitia non, placeat possimus' +
      ' tempore voluptatum?'
  },
  {
    avatar: Avt3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda autem cum ducimus eveniet' +
      ' iure numquam sed tenetur, vitae voluptate! Delectus doloribus itaque maxime mollitia non, placeat possimus' +
      ' tempore voluptatum?'
  },
  {
    avatar: Avt4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda autem cum ducimus eveniet' +
      ' iure numquam sed tenetur, vitae voluptate! Delectus doloribus itaque maxime mollitia non, placeat possimus' +
      ' tempore voluptatum?'
  },
];

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}}>
          {data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One"/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    );
  }
}

export default Testimonials;