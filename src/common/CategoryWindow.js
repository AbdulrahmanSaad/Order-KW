import React, { Component } from 'react'
import { View, Text, Flatlist, Dimensions, ImageBackground, StyleSheet, FlatList, ScrollView } from 'react-native'
import { ToolBar } from './Index'
import { Button } from 'react-native-paper';
import { ProductView } from './subComponents/ProductView'
import { getCategoryProducts, getSubCategories } from './Models/Catalogue'

const bannerWidth = Dimensions.get('window').width;

class CategoryWindow extends Component {
    state = { list: [], categories: [] };
    componentWillMount() {
        const item = this.props.navigation.getParam('item');

       // let id = item.id
        //console.log(item.id)
        getSubCategories({
            success: (response) => {
                this.setState({ categories: response.data.data })
                //console.log(this.state.categories)
            },
            error: () => {
                alert('error')
            }
        }, item.id)
        this.request(item.id)
    }

    request(id) {
        getCategoryProducts({
            success: (response) => {
                this.setState({ list: response.data.data })
                //console.log(list)
            },
            error: () => {
                alert('error')
                //console.log(error)
            }
        }, id)
    }
    render() {
        const item = this.props.navigation.getParam('item');
        //console.log(item)
        const { image, categoryText, contentView,
            subText, buttonView, buttonsContainer,
            bottonText, contentContainer } = styles
        const categories = this.state

        return (
            <View style={contentContainer}>
                <ToolBar title={item.title} />
                <ScrollView>
                    <ImageBackground style={image} source={{ uri: item.cover.url }}>
                        <View style={contentView}>
                            <Text style={categoryText}>{item.title}</Text>
                            <Text style={subText}> (منتج) </Text>
                        </View>
                    </ImageBackground>
                    <View style={buttonsContainer}>
                        <FlatList
                            horizontal={true}
                            data={this.state.categories}
                            extraData={this.state}
                            renderItem={({ item, index }) => {
                                //console.log(item)
                                let isSelected = this.state.selectedid == item.id
                                return (
                                    <Button item={item}
                                        style={isSelected ? [buttonView, { backgroundColor: '#8b8b8b' }] : [buttonView, { backgroundColor: 'transparent' }]}
                                        color={isSelected ? "#ffffff" : '#b0b0b0'}
                                        onPress={() => {
                                            this.setState({ selectedid: item.id })
                                            this.request(item.id)
                                        }}
                                        contentStyle={{ height: 60 }} >
                                        <Text style={bottonText}> {item.title} </Text>
                                    </Button>
                                )
                            }}
                        />
                    </View>
                    <FlatList
                        numColumns={2}
                        data={this.state.list}
                        renderItem={({ item }) =>
                            <ProductView item={item} window />
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1
    },
    image: {
        width: bannerWidth,
        height: 250
    },
    contentView: {
        flexDirection: 'row-reverse',
        marginLeft: 15,
        top: 200
    },
    categoryText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    },
    buttonView: {
        top: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        //overflow: 'hidden',
        //width: 75,
        //marginLeft: 90,
        //backgroundColor: 'red',
        height: 60,
        //width: 80,
        marginLeft: 10,
        marginRight: 10
        //alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        //marginBottom: 10,
        height: 110
        //bottom: 20

    },
    bottonText: {
        fontSize: 20,
        fontWeight: 'bold',

        // textAlignVertical: 'center',
        //marginTop: 40,
        //backgroundColor: 'red',
    }
})
export { CategoryWindow }