import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Dish = {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: ImageSourcePropType;
  coverImage?: ImageSourcePropType;
  sideDishes?: DishSection[];
};

export type DishSection = {
  title: string;
  data: Dish[];
};

export type Place = {
  id: string;
  title: string;
  coverImage?: ImageSourcePropType;
  image: ImageSourcePropType;
  subTitle: string;
  distance: number;
  time: number;
  rating: number;
  dishSection?: DishSection[];
};

export type RemarkablePlaceTab = {
  [name: string]: Place[];
};

export const mockDishDetails: Dish = {
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  description: faker.lorem.lines(3),
  price: faker.commerce.price(5, 60),
  coverImage: require('@src/assets/dish-details/cover-photo.jpg'),
  sideDishes: [
    {
      title: 'OnDemand Services',
      data: Array(2)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Scheduled Packages',
      data: Array(2)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
   
  ],
};

export const mockPlaceDetails: Place = {
  id: '1',
  title: 'Michael and Sons Plumbing, Danville',
  coverImage: require('@src/assets/place-details/cover-photo.jpg'),
  image: require('@src/assets/place-details/main-photo.jpg'),
  subTitle: 'Emergency Plumbing Services',
  distance: 75,
  time: 90,
  rating: 4,
  dishSection: [
    {
      title: 'Overflowing Sink',
      data: Array(2)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Plumbing Remodeling',
      data: Array(1)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Septic Tank Cleaning',
      data: Array(1)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
  /*  {
      title: 'Pasta',
      data: Array(1)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Dessert',
      data: Array(1)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },*/
  ],
};

export const mockPlaceList: Place[] = Array(10)
  .fill(0)
  .map((_) => {
    const image = require('@src/assets/place-details/main-photo.jpg');
    return {
      id: faker.random.uuid(),
      title: faker.commerce.department(),
      image,
      subTitle: faker.lorem.lines(2),
      distance: 75,
      time: 90,
      rating: 4,
    };
  });

export const mockPlaces: Place[] = Array(3)
  .fill(0)
  .map((_) => {
    const image = require('@src/assets/place-details/main-photo.jpg');
    return {
      id: faker.random.uuid(),
      title: faker.commerce.department(),
      image,
      subTitle: faker.lorem.lines(2),
      distance: 75,
      time: 90,
      rating: 4,
    };
  });

export const mockRemarkablePlace: RemarkablePlaceTab = {
  featured: [
    {
      id: '1',
      title: 'Michael & Sons Plumbing',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      title: 'James John  - Electrical',
      image: require('@src/assets/place-details/main-photo1.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      title: 'Edgars Automotive Services',
      image: require('@src/assets/place-details/main-photo2.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      title: 'Jessie Construction',
      image: require('@src/assets/place-details/main-photo3.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      title: 'Courtney Kim ',
      image: require('@src/assets/place-details/main-photo4.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo9.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      title: 'Otis Carpenter',
      image: require('@src/assets/place-details/main-photo6.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      title: 'Courtney Kim ',
      image: require('@src/assets/place-details/main-photo7.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo8.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
  newest: [
    {
      id: '1',
      title: 'Jessie Construction',
      image: require('@src/assets/place-details/main-photo9.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      title: 'Courtney Kim ',
      image: require('@src/assets/place-details/main-photo2.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo8.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      title: 'Haggis, neeps and tatties, Scotland',
      image: require('@src/assets/place-details/main-photo7.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      title: 'Courtney Kim ',
      image: require('@src/assets/place-details/main-photo6.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo4.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      title: 'Michael & Sons Plumbing',
      image: require('@src/assets/place-details/main-photo3.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      title: 'Haggis, neeps and tatties, Scotland',
      image: require('@src/assets/place-details/main-photo10.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo1.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
  trending: [
    {
      id: '1',
      title: 'Vinnie Housecare',
      image: require('@src/assets/place-details/main-photo6.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      title: 'Courtney Kim ',
      image: require('@src/assets/place-details/main-photo5.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      title: 'Jimbo Auto Shop',
      image: require('@src/assets/place-details/main-photo4.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      title: 'Jessie Construction',
      image: require('@src/assets/place-details/main-photo3.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      title: 'Courtney Kim ',
      image: require('@src/assets/place-details/main-photo2.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo1.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      title: 'Jollof Creations',
      image: require('@src/assets/place-details/main-photo10.jpg'),
      subTitle: 'Estimations, Remodeling',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      title: 'The Shocker Wiring',
      image: require('@src/assets/place-details/main-photo9.jpg'),
      subTitle: 'Wiring, Estimation, Remodeling',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      title: 'Driggs Autocare',
      image: require('@src/assets/place-details/main-photo8.jpg'),
      subTitle: 'Tune-ups, Oil Changes, Engines',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
};
