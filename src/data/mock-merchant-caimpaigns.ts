import {ImageSourcePropType} from 'react-native';

export type MerchantCampaign = {
  id: string;
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  backgroundColor: string;
};

export const mockMerchantCaimpaigns: MerchantCampaign[] = [
  {
    id: '1',
    title: 'Enter PLX50 off plumbing',
    subTitle: '50% Off | 11:00PM - 2:00PM',
    image: require('@src/assets/campaigns/campaign-1.png'),
    backgroundColor: '#FB6930',
  },
  {
    id: '2',
    title: 'Enter FREEAUTO2',
    subTitle: 'Free automotive inspection',
    image: require('@src/assets/campaigns/campaign-2.png'),
    backgroundColor: '#75CCD3',
  },
  {
    id: '3',
    title: 'Enter ESTIMATE@4!',
    subTitle: 'Free building inspection on Oct 1.',
    image: require('@src/assets/campaigns/campaign-3.png'),
    backgroundColor: '#FB6930',
  },
  {
    id: '4',
    title: 'Enter HAPPYTIMES',
    subTitle: '70% Off Any service | 1:00PM - 3:00PM',
    image: require('@src/assets/campaigns/campaign-4.png'),
    backgroundColor: '#28BBC7',
  },
];
