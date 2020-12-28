import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert, I18nManager, TextInput,TouchableOpacity, Image} from 'react-native';
import {Text, TextField, Button, Icon, Container} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {ScreenNavigationProps} from "@src/components/routes/Stacks/types";
import Footer from "@src/components/elements/Footer/Footer";

import LinearGradient from 'react-native-linear-gradient';
import  {Colors} from "@src/constants"
import ImagePicker from "react-native-image-crop-picker";

import InputScrollView from 'react-native-input-scroll-view';
import AuthContext from '@src/context/auth-context';
import Accordion from "react-native-collapsible/Accordion";

type SPRegisterProps = {}  & ScreenNavigationProps;

const SECTIONS = [
    {
        title: 'Hours of Operation',
        content: 'hours',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
    {
        title: 'My service location are:',
        content: 'location',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
];

const SPRegister5: React.FC<SPRegisterProps> = (props) => {

    const {navigation} = props;
    const {signIn} = React.useContext(AuthContext);
    const {card} = useThemeColors();
    const [hours, setHours] = React.useState('');
    const [days, setDays] = React.useState('');
    const [location, setLocation] = React.useState('');


    const _onHoursChange = (value: string) => {
        setHours(value);
    };

    const _onDayChange = (value: string) => {
        setDays(value);
    };

    const _onLocationChange = (value: string) => {
        setLocation(value);
    };

    const _onNextButtonPressed = () => {
        signIn()
    };

    const _renderHeader = (section:any) => {
        return (
            <View style={[styles.accordion_section_header_container,{backgroundColor:section.bg}]}>
                <Text isHeadingTitle isCenter isBold style={[styles.section_title,{color:section.color,marginBottom:10}]}>{section.title}</Text>
            </View>
        );
    };



    const [activeSections, setActiveSections] = React.useState([]);

    const _updateSections = (activeSections:[]) => {
        setActiveSections(activeSections);
    };
    const _renderContent = (section:any) => {
        if(section.content == "hours"){
            return (
                <View style={[styles.accordion_section_content_container,{backgroundColor:section.bg}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-around",width:"100%"}}>
                        <View style={{flexDirection:"column",width:"48%"}}>
                            <Text isSecondary isBold  isCenter style={styles.section_sub_header}>
                                Hours of operation
                            </Text>
                            <TextInput
                                style={[{backgroundColor: card,paddingLeft:15}, styles.round,]}
                                value={hours}
                                onChangeText={_onHoursChange}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={{flexDirection:"column",width:"48%"}}>
                            <Text isSecondary isBold isCenter style={styles.section_sub_header}>
                                Days of operation
                            </Text>
                            <TextInput
                                style={[{backgroundColor: card,paddingLeft:15,marginBottom:10}, styles.round,]}
                                value={days}
                                onChangeText={_onDayChange}
                                keyboardType="email-address"
                            />
                        </View>
                    </View>
                </View>
            );
        }else{
            return (
                <View style={[styles.accordion_section_content_container,{backgroundColor:section.bg}]}>
                    <TextField
                        containerStyle={styles.text_container}
                        style={[{backgroundColor: card,marginTop:20}, styles.round,]}
                        value={location}
                        onChangeText={_onLocationChange}
                        hasMargin
                        keyboardType="email-address"
                    />
                </View>
            )
        }
    };


    // @ts-ignore
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <Text isHeadingTitle isBold isCenter style={styles.page_title}>
                        Service Provider Registration
                    </Text>

                    <Accordion
                        containerStyle={styles.accordionStyle}
                        sectionContainerStyle={styles.accordionSection}
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
                                <Text style={styles.gradient_btn_text}>Submit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer/>
            </ScrollView>

        </SafeAreaView>
    );
};

export default SPRegister5;
