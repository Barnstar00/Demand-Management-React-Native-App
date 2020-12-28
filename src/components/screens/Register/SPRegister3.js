import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert, I18nManager, TextInput, TouchableOpacity, Image} from 'react-native';
import {Text, TextField, Button, Icon, Container} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {ScreenNavigationProps} from "@src/components/routes/Stacks/types";
import Footer from "@src/components/elements/Footer/Footer";

import LinearGradient from 'react-native-linear-gradient';
import {Colors} from "@src/constants"
import ImagePicker from "react-native-image-crop-picker";
import Accordion from "react-native-collapsible/Accordion";

import {Transition, Transitioning} from "react-native-reanimated";


const transition = (
    <Transition.Together>
        <Transition.In type={"fade"} durationMs={200}/>
        <Transition.Change/>
        <Transition.Out type={"fade"} durationMs={200}/>
    </Transition.Together>
)


const SECTIONS = [
    {
        title: 'Home',
        header: "",
        content: 'home',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
    {
        title: 'AUTOMOTIVE',
        header: "",
        content: 'automotive',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
];


const SPRegister3 = (props) => {

    const {navigation} = props;

    const {card} = useThemeColors();
    const [home_service, setHomeService] = React.useState('');
    const [automotive, setAutomotive] = React.useState('');

    const [image1, setImage1] = React.useState('');
    const [image2, setImage2] = React.useState('');


    const _onHomeServiceChange = (value) => {
        setHomeService(value);
    };

    const _onAutomotiveChange = (value) => {
        setAutomotive(value);
    };

    const _onNextButtonPressed = () => {
        navigation.navigate('SPRegister4');
    };

    const showImagePicker = (tag) => {

        ImagePicker.openPicker({
            width: 300,
            height: 200,
            cropping: true
        }).then(image => {
            console.log(image);
            if (tag == "1") {
                setImage1(image.path)
            } else {
                setImage2(image.path)
            }
        });
    };

    const _renderHeader = (section) => {
        return (
            <View style={[styles.accordion_section_header_container,{backgroundColor:section.bg}]}>
                <Text isHeadingTitle isCenter isBold style={[styles.section_title,{color:section.color,marginBottom:10}]}>{section.title}</Text>
            </View>
        );
    };

    const _renderContent = (section) => {

        let content;
        if (section.content === "home") {
            content =
                <View  style={{backgroundColor:section.bg,width:'100%',padding:20}}>
                    <View>
                        <TextInput
                            style={[{backgroundColor: card,marginBottom:10}, styles.description_text]}
                            value={home_service}
                            onChangeText={_onHomeServiceChange}
                            hasMargin
                            placeholder=""
                            multiline
                            editable
                            keyboardType="name-phone-pad"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.image_container}
                        onPress={() => {
                            showImagePicker("1")
                        }}
                    >
                        {
                            image1 !== '' ? (
                                <Image
                                    style={{width: '100%', aspectRatio: 1.5, resizeMode: 'stretch'}}
                                    source={{uri: image1}}
                                />
                            ) : (
                                <Text isCenter isBold style={styles.upload_text}>Upload photos of previous work</Text>
                            )
                        }

                    </TouchableOpacity>
                </View>

        } else {
            content =
                <View  style={{backgroundColor:section.bg,width:'100%',padding:20}}>
                    <TextInput
                        style={[{backgroundColor: card,marginBottom:10}, styles.description_text]}
                        value={automotive}
                        onChangeText={_onAutomotiveChange}
                        hasMargin
                        placeholder=""
                        multiline
                        editable
                        keyboardType="name-phone-pad"
                    />

                    <TouchableOpacity
                        style={styles.image_container}
                        onPress={() => {
                            showImagePicker("2")
                        }}
                    >
                        {
                            image2 !== '' ? (
                                <Image
                                    style={{width: '100%', aspectRatio: 1.5, resizeMode: 'stretch'}}
                                    source={{uri: image2}}
                                />
                            ) : (
                                <Text isCenter isBold style={styles.upload_text}>Upload photos of previous work</Text>
                            )
                        }

                    </TouchableOpacity>
                </View>

        }

        return content
    };

    const [activeSections, setActiveSections] = React.useState([]);

    const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
    };

    const ref = React.useRef();
    const [activeIndex, SetActiveIndex] = React.useState(null);

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

                    <Text isHeadingTitle isPrimary isCenter style={styles.page_sub_header} >
                        Describe Your Company
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

export default SPRegister3;
