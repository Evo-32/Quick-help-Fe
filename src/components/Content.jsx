import React from 'react';
import "../styles/content.css";
import ContentHeader from './ContentHeader';
import Card from '../Components/Card';
import ChartsContainer from '../charts/ChartsContainer';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <div className="cards-wrapper"> {/* Wrap the cards in a div */}
        <Card />
      </div>
      <ChartsContainer /> {/* Add the ChartsContainer component below the Card component */}
    </div>
  );
}

export default Content;
