import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert, I18nManager, Image, TouchableOpacity} from 'react-native';
import {Text, TextField, Button, Icon, Container} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {ScreenNavigationProps} from "@src/components/routes/Stacks/types";

import Footer from "@src/components/elements/Footer/Footer";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "@src/constants";

import ActionSheet from "react-native-action-sheet";
import ImagePicker from "react-native-image-crop-picker";
import Accordion from 'react-native-collapsible/Accordion';
import RecommendedPlaces from "@src/components/screens/Home/RecommendedPlaces";

type SPRegisterProps = {}  & ScreenNavigationProps;
const SECTIONS = [
    {
        title: 'UPLOAD PHOTO',
        header:"Upload a photo that will",
        content: 'photo',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
    {
        title: 'UPLOAD LOGO',
        header:"Upload a logo that will",
        content: 'logo',
        color:Colors.text,
        bg:Colors.mainBackground,
    },
];


const SPRegister2: React.FC<SPRegisterProps> = (props) => {

    const {navigation} = props;

    const {card} = useThemeColors();
    const [photo, setPhoto] = React.useState('');
    const [logo, setLogo] = React.useState('');

    const _renderSectionTitle = (section:any) => {
        return (
            <View style={styles.accordion_section_title_container}>
                <Text isHeadingTitle isCenter>{section.title}</Text>
            </View>
        );
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

    const showImageActionSheet = (tag:string) => {
        var BUTTONSiOS = [
            'Camera',
            'Gallery',
            'Delete',
            'Cancel'
        ];

        var BUTTONSandroid = [
            'Camera',
            'Gallery',
            'Delete',
        ];

        var DESTRUCTIVE_INDEX = 2;
        var CANCEL_INDEX = 3;

        console.log('tag',tag)

        ActionSheet.showActionSheetWithOptions({
                options: BUTTONSandroid,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                tintColor: 'blue'
            },
            (buttonIndex) => {
                if(buttonIndex === 0){
                    ImagePicker.openCamera({
                        width: 300,
                        height: 200,
                        cropping: true
                    }).then(image => {
                        console.log(image);
                        console.log(tag);
                        if(tag=="photo"){
                            setPhoto(image.path)
                        }else{
                            setLogo(image.path)
                        }

                    });
                }else if(buttonIndex === 1){

                    ImagePicker.openPicker({
                        width: 300,
                        height: 200,
                        cropping: true
                    }).then(image => {
                        console.log(image);
                        console.log(tag);
                        if(tag=="photo"){
                            setPhoto(image.path)
                        }else{
                            setLogo(image.path)
                        }

                    });
                }else if(buttonIndex === 2){
                    if(tag=="photo"){
                        setPhoto("")
                    }else{
                        setLogo("")
                    }
                }else if(buttonIndex === 3){

                }
                console.log('button clicked :', buttonIndex);
            });

    };

    const _onNextButtonPressed = () => {
        navigation.navigate('SPRegister3');
    };

    const _renderContent = (section:any) => {

        let image_picker_view;
        if(section.content == "photo"){
                image_picker_view =  <TouchableOpacity
                    style={styles.image_container}
                    onPress={()=> { showImageActionSheet("photo")}}
                >
                    {
                        photo !== '' && (
                            <Image
                                style={{ width:'100%', aspectRatio:1.5,resizeMode:'stretch' }}
                                source={{uri:photo}}
                            />
                        )
                    }
                </TouchableOpacity>
        }else{
            image_picker_view = <TouchableOpacity
                    style={styles.image_container}
                    onPress={()=> { showImageActionSheet("logo")}}
                >
                    {
                        logo !== '' ? (
                            <Image
                                style={{ width:'100%', aspectRatio:1.5,resizeMode:'stretch' }}
                                source={{uri:logo}}
                            />
                        ):(
                            <View style={{height:30}}></View>
                        )
                    }

                </TouchableOpacity>
        }

        return (
            <View  style={{backgroundColor:section.bg,width:'100%',padding:20}}>
                {image_picker_view}
            </View>
        )
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
                        <TouchableOpacity  onPress={() => {}}>
                            <LinearGradient
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 1}}
                                colors={[Colors.gradient1, Colors.gradient5]}
                                style={styles.gradient_btn}
                            >
                                <Text style={styles.gradient_btn_text}>UPLOAD</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => {
                                _onNextButtonPressed()
                            }}>
                            <LinearGradient
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 1}}
                                colors={[Colors.gradient1, Colors.gradient5]}
                                style={styles.gradient_btn}
                            >
                                <Text style={styles.gradient_btn_text}>Next</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text isSecondary isCenter style={styles.comment_text}>
                            TELL US ABOUT YOUR SKILLS
                        </Text>

                    </View>


                </View>

                <Footer/>
            </ScrollView>

        </SafeAreaView>
    );
};

export default SPRegister2;
