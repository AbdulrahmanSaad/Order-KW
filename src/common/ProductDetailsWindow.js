import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Dimensions,
    ImageBackground, TouchableNativeFeedback, ScrollView,
    AsyncStorage, DeviceEventEmitter
} from 'react-native';
import { ToolBar } from './Index';
import Carousel from 'react-native-looped-carousel';
import { Icon } from 'react-native-elements';
import { SectionView } from './Index';
import { askAsync } from 'expo-permissions';

const bannerWidth = Dimensions.get('window').width;
const bannerHeight = 250;
images = [
    'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67310919_3217061071638162_1243214503286407168_n.jpg?_nc_cat=109&_nc_oc=AQm3s7L2P7ewjwgJ-2p273taH0iivEYnlLjdiwTDeH_uawhipe9SHK9MOZe0hYbveuM&_nc_ht=scontent-hbe1-1.xx&oh=595cf429ac8cedb11e36787a74a0e4ca&oe=5E0FDDEB',
    'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67310919_3217061071638162_1243214503286407168_n.jpg?_nc_cat=109&_nc_oc=AQm3s7L2P7ewjwgJ-2p273taH0iivEYnlLjdiwTDeH_uawhipe9SHK9MOZe0hYbveuM&_nc_ht=scontent-hbe1-1.xx&oh=595cf429ac8cedb11e36787a74a0e4ca&oe=5E0FDDEB',
    'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67310919_3217061071638162_1243214503286407168_n.jpg?_nc_cat=109&_nc_oc=AQm3s7L2P7ewjwgJ-2p273taH0iivEYnlLjdiwTDeH_uawhipe9SHK9MOZe0hYbveuM&_nc_ht=scontent-hbe1-1.xx&oh=595cf429ac8cedb11e36787a74a0e4ca&oe=5E0FDDEB'
]


class ProductDetailsWindow extends Component {
    state = { images: [] };
    renderPage(image, index) {
        const item = this.props.navigation.getParam('item');
        return <View key={index}>
            <ImageBackground style={styles.imageBackground}
                source={{ uri: item.cover.url }}
                resizeMode={'center'} />
        </View>
    }
    storeData = async () => {
        let data = [];
        const item = this.props.navigation.getParam('item');
        const purchasedItems = await AsyncStorage.getItem('Data')
        if (purchasedItems) {
            data = JSON.parse(purchasedItems)
        }
        data.push({ item })
        //console.log(item)
        try {
            await AsyncStorage.setItem('Data', JSON.stringify(data));
            DeviceEventEmitter.emit('refresh')
        }
        catch (e) {
            alert('error');
        }
    }
    state = {}
    componentWillMount() {
        const item = this.props.navigation.getParam('item');
        this.setState({ item })
    }
    render() {
        const item = this.props.navigation.getParam('item');
        //console.log(item)
        const { contentContainer, textView, textTitle,
            textBDiscount, textPrice, textInfo,
            buttonView, buttonContainer, textButton,
            addToCartText, addToCartButton, iconButton,
            productDetailsTitle, productDetailsInfo } = styles
        return (
            <View style={contentContainer}>
                <ToolBar title={item.title} />
                <ScrollView>
                    <View>
                        <View style={textView}>
                            <Text style={textTitle} numberOfLines={2}>{item.title}</Text>
                            <Text style={textBDiscount}>{item.sale}</Text>
                            <Text style={textPrice}>{item.price}</Text>
                        </View>
                        <Carousel style={{ height: 250 }}
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            index={0}
                            pageSize={bannerWidth}
                        >
                            {images.map((image, index) => this.renderPage(image, index))}
                        </Carousel>
                        <Text style={textInfo}>{item.cover.exist}</Text>
                        <View style={buttonContainer}>
                            <TouchableNativeFeedback>
                                <View style={buttonView}>
                                    <Text style={textButton}>حذف من المفضلة</Text>
                                    <Icon name='favorite' color='#dd393d' size={20} style={iconButton} />
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.storeData}>
                                <View style={[buttonView, addToCartButton]}>
                                    <Text style={[textButton, addToCartText]}>اضف الى السلة</Text>
                                    <Icon name='local-grocery-store' color='#ffffff'
                                        size={20} style={iconButton} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Text style={productDetailsTitle}>تفاصيل المنتج</Text>
                        <Text style={productDetailsInfo}>{item.description}</Text>
                        <Text style={productDetailsTitle}>منتجات متعلقة</Text>
                        <View style={{ bottom: 70, paddingBottom: 33 }}>
                            <SectionView disableArrow id={item.id} />
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        //backgroundColor: '#fafafa'
    },
    imageBackground: {
        width: bannerWidth,
        height: bannerHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderTopWidth: 3,
        borderTopColor: '#dedede'
    },
    textView: {
        flexDirection: 'row-reverse',
        height: 100,
        alignItems: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        width: 180,
        marginRight: 15
    },
    textBDiscount: {
        fontWeight: '100',
        color: 'grey',
        fontSize: 15,
        marginRight: 40,
        textDecorationLine: 'line-through'
    },
    textPrice: {
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 5
    },
    textInfo: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ca464b',
        marginTop: 10,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    buttonView: {
        borderColor: '#d29b9e',
        borderRadius: 50,
        borderWidth: 2,
        height: 50,
        width: 180,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#da7d80'
    },
    addToCartButton: {
        backgroundColor: '#d73b3a'
    },
    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#bd4350',
    },
    addToCartText: {
        color: '#ffffff'
    },
    productDetailsTitle: {
        marginRight: 20,
        marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    productDetailsInfo: {
        marginRight: 20,
        marginTop: 10,
        color: '#b3b3b3'
    }
})

export { ProductDetailsWindow };
