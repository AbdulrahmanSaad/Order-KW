import React,{Component} from 'react'
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableNativeFeedback} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


const bannerWidth = Dimensions.get('window').width;

class Category extends Component {
    render(){
        const item = this.props.item
        //console.log(item)
        const {text, imageBackground, contentView, categoryText, 
            buttonText, contentContainer, buttonView} = styles
        const { title } = this.props
        return(
            <View style={contentContainer}>
            <ImageBackground style = {imageBackground} source={{ uri: item.cover.url }}>
                <LinearGradient style= {{height: 170, top: 30}}
                    //style={styles.imageBackground}
                    colors={['transparent', 'transparent', '#000000']}>
                        <View style={contentView}>
                            <Text style={categoryText}>{item.title}</Text>
                                <Text style={buttonText} onPress={() => this.props.navigation.navigate('CategoryWindow', {item})}>شاهد الكل</Text>
                                <Icon name='keyboard-arrow-left' color={'#ffffff'} size={30}/>
                               
                        </View>
                </LinearGradient>
            </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    contentContainer: {
        marginBottom: 15
    },
    text:{
        backgroundColor: 'black',
    },
    imageBackground:{
        width: bannerWidth,
        height: 200
    },
    contentView: {
        flexDirection: 'row-reverse',
        top: 120,
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    categoryText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
       position: 'absolute',
       right: 50
    },
    buttonView: {
        flexDirection: 'row-reverse'
    }
})

const CategoryView = withNavigation(Category);
export {CategoryView}