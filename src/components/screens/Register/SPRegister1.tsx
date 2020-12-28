import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert, I18nManager,TouchableOpacity} from 'react-native';
import {Text, TextField, Button, Icon, Container} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {ScreenNavigationProps} from "@src/components/routes/Stacks/types";

import Footer from "@src/components/elements/Footer/Footer";

import Accordion from 'react-native-collapsible/Accordion';

import LinearGradient from 'react-native-linear-gradient';
import  {Colors} from "@src/constants"

import * as Animatable from 'react-native-animatable';


type SPRegisterProps = {}  & ScreenNavigationProps;


const SECTIONS = [
    {
        title: 'Who Am I?',
        header:"Enter your name",
        content: 'Name',
        bg:Colors.mainBackground,
        color:Colors.text,
    },
    {
        title: 'Operations',
        header:"Enter your primary place of operation",
        content: 'Address',
        color:Colors.text,
        bg:Colors.mainBackground,

    },
];

const SPRegister1: React.FC<SPRegisterProps> = (props) => {

    const {navigation} = props;

    const {card} = useThemeColors();
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [MI, setMI] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');

    const [use_profile_name, setUseProfileName] = React.useState(false);
    const [use_profile_name1, setUseProfileName1] = React.useState(false);

    const [activeSections, setActiveSections] = React.useState([]);

    const _onFNameChange = (value: string) => {
        setFName(value);
    };

    const _onMIChange = (value: string) => {
        setMI(value);
    };

    const _onLNameChange = (value: string) => {
        setLName(value);
    };

    const _onCompanyChange = (value: string) => {
        setCompany(value);
    };


    const _onAddressChange = (value: string) => {
        setAddress(value);
    };


    const _onCityChange = (value: string) => {
        setCity(value);
    };


    const _onZipcodeChange = (value: string) => {
        setZipcode(value);
    };

    const _onUseProfileNameChange = (value: boolean) => {
        setUseProfileName(value);
    };

    const _onNextButtonPressed = () => {
        navigation.navigate('SPRegister2');
    };

    const _renderHeader = (section:any) => {
        return (
            <View style={[styles.accordion_section_header_container,{backgroundColor:section.bg}]}>
                <Text isHeadingTitle isCenter isBold style={[styles.section_title,{color:section.color,}]}>{section.title}</Text>
                <Text isSecondary isCenter isBold style={[styles.section_header,{color:section.color}]}>
                    {section.header}
                </Text>
            </View>
        );
    };

    const _renderContent = (section:any) => {
        if(section.content == "Name"){
            return (
                <Animatable.View
                    duration={300}
                    transition={"backgroundColor"}
                    style={[styles.accordion_section_content_container,{backgroundColor:section.bg}]}>
                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card,color:section.color}, styles.round,]}
                        value={fName}
                        onChangeText={_onFNameChange}
                        hasMargin
                        placeholder="First Name"
                        keyboardType="name-phone-pad"
                    />

                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card}, styles.round,]}
                        value={MI}
                        onChangeText={_onMIChange}
                        hasMargin
                        placeholder="MI"
                        keyboardType="name-phone-pad"
                    />

                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card}, styles.round,]}
                        value={lName}
                        onChangeText={_onLNameChange}
                        hasMargin
                        placeholder="Last  Name"
                        keyboardType="name-phone-pad"
                    />

                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card}, styles.round,]}
                        value={company}
                        onChangeText={_onCompanyChange}
                        hasMargin
                        placeholder="Company Name"
                        keyboardType="name-phone-pad"
                    />
                </Animatable.View>
            );
        }else{
            return (
                <Animatable.View duration={300} transition={"backgroundColor"} style={[styles.accordion_section_content_container,{backgroundColor:section.bg}]}>
                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card}, styles.round,]}
                        value={address}
                        onChangeText={_onAddressChange}
                        hasMargin
                        placeholder="Address"
                        keyboardType="email-address"
                    />

                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card}, styles.round,]}
                        value={city}
                        onChangeText={_onCityChange}
                        hasMargin
                        placeholder="City"
                        keyboardType="name-phone-pad"
                    />

                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card}, styles.round,]}
                        value={zipcode}
                        onChangeText={_onZipcodeChange}
                        hasMargin
                        placeholder="Zip Code"
                        keyboardType="number-pad"
                    />
                </Animatable.View>
            )
        }
    };



    const _updateSections = (activeSections:[]) => {
        console.log('update',activeSections)
        setActiveSections(activeSections);
    };

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <Text isHeadingTitle isBold isCenter style={styles.page_title}>
                        Service Provider Registration
                    </Text>

                    <Accordion
                        containerStyle={{backgroundColor:Colors.mainBackground,marginTop:0}}
                        sectionContainerStyle={{backgroundColor:Colors.mainBackground}}
                        sections={SECTIONS}
                        activeSections={activeSections}
                        renderHeader={_renderHeader}
                        renderContent={_renderContent}
                        onChange={_updateSections}
                        expandMultiple={true}
                        touchableProps={{activeOpacity:0.95}}
                        touchableComponent={TouchableOpacity}
                    />

                    <View style={styles.next_btn}>
                        <TouchableOpacity
                            onPress={() => {
                                _onNextButtonPressed()
                            }}>
                            <LinearGradient
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 1}}
                                colors={[Colors.gradient1, Colors.gradient1]}
                                style={styles.gradient_btn}
                            >
                                <Text style={styles.gradient_btn_text}>Next</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <Text isSecondary isCenter style={styles.comment_text}>
                            UPLOAD YOUR PHOTO OR LOGO
                        </Text>
                    </View>
                </View>

                <Footer/>
            </ScrollView>

        </SafeAreaView>
    );
};

export default SPRegister1;
