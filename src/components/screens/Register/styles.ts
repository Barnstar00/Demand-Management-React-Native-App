import {I18nManager, StyleSheet} from 'react-native';
import {Colors} from "@src/constants"
import Accordion from "react-native-collapsible/Accordion";
import * as React from "react";

export default StyleSheet.create({
    root: {
        flex: 1,
    },

    headerLeftContainer: {
        paddingLeft: 10,
    },
    headerRightContainer: {
        paddingRight: 10,
    },
    headerBackIcon: {
        width: I18nManager.isRTL ? 'auto' : 100,
        height: 25,
    },
    headerBack: {
        height: 25,
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: "space-between",
        backgroundColor: Colors.mainBackground,
        flexGrow: 1
    },
    formContainer: {
        paddingTop: '5%',
        marginBottom: 30,
        marginTop: 20,
        justifyContent: "center",
    },
    page_title: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    page_header: {
        color: Colors.text,
        fontSize: 18,
    },
    page_sub_header: {
        color: Colors.text,
        fontSize: 16,
        marginBottom: 10,
    },
    footer: {
        position: "absolute",
        bottom: 5,
    },
    section_title: {
        fontSize: 18,
        lineHeight: 30,
        fontWeight:'500'
    },
    section_header: {
        fontSize: 16,
        lineHeight: 27,
        fontWeight:'normal',
        marginVertical: 15
    },
    section_sub_header: {
        fontSize: 16,
        lineHeight: 30,
        height: 30,
        fontWeight:'100',
        color:Colors.text
    },
    accordion_section_title_container: {
        marginTop: 10,
        width: '100%',
        paddingHorizontal: 20,
    },
    accordion_section_header_container: {
        flexGrow: 1,
        paddingTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    accordion_section_content_container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    image_container: {
        minHeight: 30,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: "rgba(34,34,34,0.8)",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 1,
    },
    upload_text: {
        textAlignVertical: "center",
        color: 'grey'
    },
    comment_text: {
        marginTop: 10,
        color: Colors.text,
        marginBottom: 10,
        fontSize: 16,
    },
    description_container: {
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 10,
        minHeight: 200,
        shadowColor: "rgba(34,34,34,0.8)",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 5,
    },
    round: {
        borderRadius: 5,
        marginTop: 5,
        shadowColor: "rgba(34,34,34,0.8)",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.8,
        shadowRadius: 25,
        elevation: 3,
    },

    description_text: {
        borderRadius: 5,
        shadowColor: "rgba(34,34,34,0.8)",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 3,
        height: 80,
    },
    text_input: {
        backgroundColor: 'white',
    },
    gradient_btn: {
        maxHeight: 40,
        marginTop: 10,
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
    },
    gradient_btn_text: {
        fontSize: 17,
        lineHeight: 30,
        color: Colors.text,
    },
    next_btn: {
        backgroundColor: Colors.mainBackground,
        flexGrow: 1,
        padding: 20,
    },
    divideLine: {
        height: 1,
        marginTop: 20,
        marginBottom: 10,
        width: '70%',
        marginLeft: '15%',
        justifyContent: "center",
        backgroundColor: 'grey'
    },

    emailTextField: {
        marginTop: 30,
    },
    modalContainer: {
        padding: 20,
    },
    passwordText: {
        marginTop: 15,
        marginBottom: 15,
    },
    confirmButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    cancelButtonContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    trans_container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 40,
    },
    trans_cardContainer: {
        flexGrow: 1,
        backgroundColor: '#e5e5e5',
    },
    card: {
        flexGrow: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    heading: {
        textTransform: "uppercase",
        letterSpacing: -2,
    },
    text_container: {
        backgroundColor: 'transparent',
        flexGrow: 1,
        borderRadius: 5,
    },
    accordionStyle: {
      backgroundColor: Colors.mainBackground
    },
    accordionSection: {
      backgroundColor: Colors.mainBackground
    }
});
