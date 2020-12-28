import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {

        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:'transparent'
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent:"center",
        backgroundColor:'transparent'
    },
    image:{
        width:22,
        height:25,
    },
    large:{
        textAlignVertical:"bottom",
        fontSize:14,
    },
    small:{
        fontSize:12
    }
});
