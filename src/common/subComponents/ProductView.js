import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;

class Product extends Component {
    render() {
        const window = this.props.window
        const item = this.props.item
        const id = this.props.id
        const { image, itemContainer, textView, 
            titleText, discountText, priceText, 
            iconsContainer, icon } = styles
        return (
            <TouchableNativeFeedback 
                    onPress={() => this.props.navigation.navigate('ProductDetailsWindow', {item, id})}>
            <View style={this.props.window ? styles.windowContainer : styles.itemContainer} >
                 <View>
                <Image
                    source = {{uri: item.cover.url}}
                    resizeMode= 'contain'
                    style={image} />
                    <View style={textView}>
                <Text style={titleText} numberOfLines={2}>
                    {item.title}
                    </Text>
                <Text style={discountText}>
                    خصم {item.sale}% لمدة {item.is_daily_offer} يوم 
                    </Text>
                <Text style={priceText}>
                {item.price} ريال
                    </Text>
                    </View>
                <View style={iconsContainer}>
                        <Icon name='share' color='#c8c8c8' />
                    <View style={icon}>
                        <Icon name='local-grocery-store' color='#c8c8c8'/>
                    </View>
                        <Icon name='favorite' color='#c8c8c8' />
                </View>
                </View>
            </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 320,
        width: 210,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#dadadab3',
        alignItems: 'center', 
        backgroundColor: '#fff'
    },
    windowContainer: {
        height: 320,
       width: screenWidth/2.1,
        paddingRight: 10,
        //marginLeft: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#dadadab3',
        alignItems: 'center', 
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    image: {
        height: 150,
        width: 170,
        //backgroundColor: 'red'
    },
    textView: {
        textAlign: 'left',
        marginLeft: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 60
       // paddingBottom: 20
    },
    discountText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#c4494d'
    },
    priceText: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15
    },
    iconsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        //marginLeft: 80
    },
    icon: {
       paddingLeft: 50,
        paddingRight: 50,
    }
})

const ProductView = withNavigation(Product);
export { ProductView };
