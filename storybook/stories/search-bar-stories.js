import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, SearchBar} from '@src/components/elements';

storiesOf('SearchBar', module).add('SearchBar', () => (
  <Container style={{padding: 10}}>
    <SearchBar placeholder="Find services near you..." />
  </Container>
));
