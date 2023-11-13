import React from 'react';
import { DashboardPageProps } from './interfaces'; // Import the interfaces


const DashboardPage: React.FC<DashboardPageProps> = ({ listUrlPerDish, setListUrlPerDish }) => {
  console.log('listUrlPerDish from DashboardPage', listUrlPerDish);

  return (
    <div>
      {listUrlPerDish?.map((dish, index) => (
        <div key={index}>
          <h3>{index}</h3>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;