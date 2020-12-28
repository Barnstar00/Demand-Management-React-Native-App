import * as React from 'react';
import {Image, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import Container from '../Container';
import Text from '../Text';
import Icon from "@src/components/elements/Icon";
import {Button} from "@src/components/elements";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
    const {
        colors: {primary, text},
    } = useTheme();

    return (
        <View style={styles.container}>
            <Container style={styles.footerContainer}>
                <Text style={styles.large}>Home</Text>
                <Image
                    source={require('@src/assets/footer/footer.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.large}>AUTOMOTIVE</Text>
            </Container>
            <Text style={styles.small}>2020</Text>
        </View>
    );
};

export default Footer;
