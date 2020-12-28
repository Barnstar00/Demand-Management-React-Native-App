import {ImageSourcePropType} from 'react-native';

type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Plumbing',
    image: require('@src/assets/categories/category-1.png'),
  },
  {
    id: '2',
    name: 'Electrical',
    image: require('@src/assets/categories/category-2.png'),
  },
  {
    id: '3',
    name: 'Painting',
    image: require('@src/assets/categories/category-3.png'),
  },
  {
    id: '4',
    name: 'Maintenance',
    image: require('@src/assets/categories/category-4.png'),
  },
  {
    id: '5',
    name: 'Auto Care',
    image: require('@src/assets/categories/category-5.png'),
  },
  {
    id: '6',
    name: 'Oil Change',
    image: require('@src/assets/categories/category-6.png'),
  },
  {
    id: '7',
    name: 'Tune-up',
    image: require('@src/assets/categories/category-7.png'),
  },
  {
    id: '8',
    name: 'Body Repair',
    image: require('@src/assets/categories/category-8.png'),
  },
];
