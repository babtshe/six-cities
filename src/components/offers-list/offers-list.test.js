import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from './offers-list';

it(`OffersList should render correctly`, ()=>{
  const mockCards = [
    {
      name: `test1`,
      type: `Apartment`,
      price: 1,
      rating: 1,
      image: `test`,
      link: `#`,
      mark: `Premium`,
    },
    {
      name: `test2`,
      type: `Private room`,
      price: 1,
      rating: 1,
      image: `test`,
      link: `#`,
      bookmarked: true,
    }
  ];
  const tree = renderer
  .create(
      <OffersList
        cards = {mockCards}
      />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});