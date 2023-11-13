import React from 'react';

interface Dish {
  model: string;
  pk: number;
  fields: {
    menu: number;
    nombre: string;
    plato: string;
    dish_items: number[]; // Assuming dish_items is an array of IDs
  };
  dish_items: Array<any>; // Update this type based on the actual structure
}

interface DashboardPageProps {
  listUrlPerDish: Dish[] | null;
  setListUrlPerDish: React.Dispatch<React.SetStateAction<Dish[] | null>>;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ listUrlPerDish, setListUrlPerDish }) => {
  console.log('listUrlPerDish from DashboardPage', listUrlPerDish);

  return (
    <div>
      {listUrlPerDish?.map((dish, index) => (
        <div key={index}>
          {/* Your rendering logic for each dish */}
          <h3>{dish.fields.nombre}</h3>
          {/* Render other details as needed */}
          <ul>
            {dish.dish_items.map((item, itemIndex) => (
              <li key={itemIndex}>{/* Render individual items */}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;