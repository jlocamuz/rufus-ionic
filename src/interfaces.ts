// interfaces.ts
export interface Dish {
    lista_of_urls_perdish: any;
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
  
  export interface WebcamCaptureProps {
    listUrlPerDish: Dish[] | null;
    setListUrlPerDish: React.Dispatch<React.SetStateAction<Dish[] | null>>;
  }
  
  export interface DashboardPageProps {
    listUrlPerDish: Dish[] | null;
    setListUrlPerDish: React.Dispatch<React.SetStateAction<Dish[] | null>>;
  }
  