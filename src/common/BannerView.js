import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground, Button } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { getBanner } from './Models/Catalogue';

/**/
const bannerWidth = Dimensions.get('window').width;
const bannerHeight = 250;

class BannerView extends Component {
    state = { list: {}, images: [] };
    componentWillMount() {
        getBanner({
            success: (response) => {
                this.setState({ images: response.data.data })
            },
            error: () => {
                alert('error')
            }
        })
    }
    renderPage(image, index) {
        state = { list: {}, images: [] };
        const {length} = this.props
        return <View key={index}>
            <ImageBackground style={styles.imageBackground} source={{ uri: image.cover.url }}>
                <LinearGradient
                    style={styles.imageBackground}
                    colors={['transparent', 'transparent', '#000000']}>
                    <Text style={styles.titleText}>
                        {image.title}
                    </Text>
                    <Text style={styles.subTitleText}>
                        نقدم لك افضل المنتجات من مزارعنا
                            </Text>
                    <View style={styles.buttonView}>
                        <Button title={'كل العروض'} />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    }
    render() {
        state = { list: {}, images: [] };
        return (
            <View style={styles.contentContainer}>
                {this.state.images.length !== 0 && <Carousel style={{ height: 250 }}
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={bannerWidth}
                    leftArrowText={'＜'}
                    leftArrowStyle={{ color: 'white', fontSize: 20, margin: 20, marginBottom: 50 }}
                    rightArrowText={'＞'}
                    rightArrowStyle={{ color: 'white', fontSize: 20, margin: 20, marginBottom: 50 }}
                    pageInfo
                    arrows
                >
                    {this.state.images.map((image, index) => this.renderPage(image, index))}
                </Carousel>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
    },
    imageBackground: {
        width: bannerWidth,
        height: bannerHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    subTitleText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    buttonView: {
        top: 10,
        borderRadius: 30,
        overflow: 'hidden',
        width: 100
    }

})

export { BannerView };