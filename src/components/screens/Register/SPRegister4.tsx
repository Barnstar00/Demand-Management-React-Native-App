import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert, I18nManager, TextInput,TouchableOpacity, Image} from 'react-native';
import {Text, TextField, Button, Icon, Container} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {ScreenNavigationProps} from "@src/components/routes/Stacks/types";
import Footer from "@src/components/elements/Footer/Footer";

import LinearGradient from 'react-native-linear-gradient';
import  {Colors} from "@src/constants"
import Accordion from "react-native-collapsible/Accordion";


const SECTIONS = [
    {
        title: 'My Home Services are',
        header:"",
        content: 'home',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
    {
        title: 'My Automotive Services are',
        header:"",
        content: 'automotive',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
];

type SPRegisterProps = {}  & ScreenNavigationProps;

const SPRegister4: React.FC<SPRegisterProps> = (props) => {

    const {navigation} = props;

    const {card} = useThemeColors();
    const [home_service, setHomeService] = React.useState('');
    const [automotive, setAutomotive] = React.useState('');

    const [home_name, setHomeName] = React.useState('');
    const [home_price, setHomePrice] = React.useState('');

    const _onHomeNameChange = (value: string) => {
        setHomeName(value);
    };
    const _onHomePriceChange = (value: string) => {
        setHomePrice(value);
    };


    const [auto_name, setAutoName] = React.useState('');
    const [auto_price, setAutoPrice] = React.useState('');

    const _onAutoNameChange = (value: string) => {
        setAutoName(value);
    };
    const _onAutoPriceChange = (value: string) => {
        setAutoPrice(value);
    };

    const [home_des, setHomeDes] = React.useState('');

    const _onHomeDesChange = (value: string) => {
        setHomeDes(value);
    };

    const [auto_des, setAutoDes] = React.useState('');

    const _onAutoDesChange = (value: string) => {
        setAutoDes(value);
    };



    const _onHomeServiceChange = (value: string) => {
        setHomeService(value);
    };

    const _onAutomotiveChange = (value: string) => {
        setAutomotive(value);
    };

    const _onNextButtonPressed = () => {
        navigation.navigate('SPRegister5');
    };


    const _renderHeader = (section:any) => {
        return (
            <View style={[styles.accordion_section_header_container,{backgroundColor:section.bg}]}>
                <Text isHeadingTitle isCenter isBold style={[styles.section_title,{color:section.color,marginBottom:15}]}>{section.title}</Text>
            </View>
        );
    };


    const _renderContent = (section:any) => {
        if(section.content == "home"){
            return (
                <View style={[styles.accordion_section_content_container,{backgroundColor:section.bg}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-around",width:"100%"}}>
                        <View style={{flexDirection:"column",width:"45%"}}>
                            <Text isSecondary isBold  isCenter style={styles.section_sub_header}>
                                Name
                            </Text>
                            <TextInput
                                style={[{backgroundColor: card,paddingLeft:15,marginBottom:10}, styles.round,]}
                                value={home_name}
                                onChangeText={_onHomeNameChange}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={{flexDirection:"column",width:"45%"}}>
                            <Text isSecondary isBold  isCenter style={styles.section_sub_header}>
                                Price
                            </Text>
                            <TextInput
                                style={[{backgroundColor: card,paddingLeft:15,marginBottom:10}, styles.round,]}
                                value={home_price}
                                onChangeText={_onHomePriceChange}
                                keyboardType="email-address"
                            />
                        </View>
                    </View>
                    <Text isSecondary isCenter style={styles.comment_text}>
                        Describe this service
                    </Text>
                    <TextInput
                        style={[ styles.description_text,{backgroundColor: card,width:"80%",marginTop:0,paddingLeft:15,marginHorizontal:30,},]}
                        value={home_des}
                        onChangeText={_onHomeDesChange}
                        placeholder=""
                        multiline
                        editable
                        keyboardType="name-phone-pad"
                    />
                </View>
            );
        }else{
            return (
                <View style={[{paddingHorizontal:20,flexDirection:'column',justifyContent:'center',paddingBottom:30,backgroundColor:section.bg}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-around",width:"100%"}}>
                        <View style={{flexDirection:"column",width:"45%"}}>
                            <Text isSecondary isBold  isCenter style={styles.section_sub_header}>
                                Name
                            </Text>
                            <View style={{height:20}}/>
                            <TextInput
                                style={[{backgroundColor: card,paddingLeft:15,marginBottom:10}, styles.round,]}
                                value={auto_name}
                                onChangeText={_onAutoNameChange}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={{flexDirection:"column",width:"45%"}}>
                            <Text isSecondary isBold  isCenter style={styles.section_sub_header}>
                                Price
                            </Text>
                            <View style={{height:20}}/>
                            <TextInput
                                style={[{backgroundColor: card,paddingLeft:15,marginBottom:10}, styles.round,]}
                                value={auto_price}
                                onChangeText={_onAutoPriceChange}
                                keyboardType="email-address"
                            />
                        </View>
                    </View>

                    <Text isSecondary isCenter style={styles.comment_text}>
                        Describe this service
                    </Text>
                    <TextInput
                        style={[ styles.description_text,{backgroundColor:card,width:"80%",marginTop:0,paddingLeft:15,marginHorizontal:30,},]}
                        value={auto_des}
                        onChangeText={_onAutoDesChange}
                        placeholder=""
                        multiline
                        editable
                        keyboardType="name-phone-pad"
                    />

                </View>
            )
        }
    };

    const [activeSections, setActiveSections] = React.useState([]);

    const _updateSections = (activeSections:[]) => {
        setActiveSections(activeSections);
    };

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <Text isHeadingTitle isBold isCenter style={styles.page_title}>
                        Service Provider Registration
                    </Text>

                    <Text isHeadingTitle isCenter style={styles.page_header}>
                        My Services
                    </Text>

                    <View style={{flexDirection:"row",justifyContent:"space-around",width:"100%",marginBottom:20}}>
                        <View style={{flexDirection:"column",width:"45%"}}>
                            <Text isSecondary isBold  isCenter style={styles.section_sub_header}>
                                Home
                            </Text>
                            <TextField
                                containerStyle={[styles.text_container]}
                                style={[{backgroundColor: card}, styles.round,]}
                                value={home_service}
                                onChangeText={_onHomeServiceChange}
                                hasMargin
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={{flexDirection:"column",width:"45%"}}>
                            <Text isSecondary isBold isCenter style={styles.section_sub_header}>
                                Automotive
                            </Text>
                            <TextField
                                containerStyle={[styles.text_container]}
                                style={[{backgroundColor: card}, styles.round,]}
                                value={automotive}
                                onChangeText={_onAutomotiveChange}
                                hasMargin
                                keyboardType="email-address"
                            />
                        </View>
                    </View>

                    <Accordion
                        containerStyle={styles.accordionStyle}
                        sectionContainerStyle={[styles.accordionSection,{display:"flex"}]}
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
                                colors={[Colors.gradient1, Colors.gradient2]}
                                style={styles.gradient_btn}
                            >
                                <Text style={styles.gradient_btn_text}>Next</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer/>
            </ScrollView>

        </SafeAreaView>
    );
};

export default SPRegister4;
