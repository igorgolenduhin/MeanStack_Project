import react from 'react';
//import './Categories.css';
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

import budget from './images/budget.PNG';
import couple from './images/couple.jpg';
import family from './images/family.PNG';
import lgbtq from './images/lgbtq.jpg';
import luxury from './images/luxury.PNG';
import solotravel from './images/solotravel.PNG';
import Weekenders from './images/weekenders.PNG';

const Categories =()=>{
    const items = [
        {
          id: 1,
          header: 'Weekenders',
          description:
            'Find your best nearest Getaway',
          image: (Weekenders)
        },
        {
          id: 2,
          header: 'Budget Travelling',
          description:
            'Travel is expensive, but these travelers show you how to make the most of your budget on the road while sharing fun travel stories from around the world.',
          image: (budget)
        },
        {
          id: 3,
          header: 'Couple Travelling',
          description:
            'As a travel couple ourselves, we are always looking for other couples to inspire us. These are our favorite travel couples.',
          image: (couple)
        },
        {
          id: 4,
          header: 'LGBTQ BLOGGERS',
          description:
            'We love how diverse the travel blogging space is. Travel inspires people and breaks down barriers. These are the blogs leading the way.',
          image: (lgbtq)
        },
        {
          id: 5,
          header: 'LUXURY TRAVEL ',
          description:
            'There are a few people that really know how to travel in style. Here are some luxury blogs to check out.',
          image: (luxury)
        },
        {
            id: 6,
            header: 'FAMILY TRAVEL ',
            description:
              'A lot of family travelers we followed are all grown up. Several travel couples have now turned into families! And several solo travelers have turned into couples. How times have changed!',
            image: (family)
          },
          {
              id: 7,
              header: 'Solo TRAVEL ',
              description:
                'Adventure travel is the foundation of our travel blog so we love finding people pushing their limits. These are true adventurers that see the world through the lens of adventure. if you want to be inspired to push your limits, these are the people to follow.',
              image: (family)
            }];

        return(
        <CardView
        items={items}
        activeColor='#000'
        imageHeight='650px'
        imageWidth='800px'
      />);
}
export default Categories;