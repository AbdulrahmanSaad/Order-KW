import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, AsyncStorage, DeviceEventEmitter, FlatList} from 'react-native'
import { Icon } from 'react-native-elements';

class PurchasedItemView extends Component {
    state = {list: []};
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('Data')
            var data = JSON.parse(value);
            this.setState({ data });
           //console.log(data)
        } catch (e) {
            alert('A7A')
        }
    }
    componentWillMount() {
        this.getData()
        DeviceEventEmitter.addListener('refresh', this.getData.bind(this))
    }
    render() {
        const { contentContainer, firstRowView, itemView, image, text,
            deleteIcon, addIcon, secondRowView,
            number, removeIcon, priceView, priceText} = styles
        return (
            <View style={contentContainer}>
                <FlatList
                extraData={this.state}
                    data={this.state.data}
                    renderItem={({ item }) =>{
                       console.log(item)
                        return (
                <View style={itemView}>
                    <View>
                        <View style={firstRowView}>
                            <Text style={text}>{item.item.title}</Text>
                            <View style={deleteIcon}>
                                <Icon name='delete' color={'#d23d3f'} />
                            </View>
                        </View>
                        <View style={secondRowView} >
                            <View style={addIcon}>
                                <Icon name='add' color={'#ffffff'} size={30} />
                            </View>
                            <Text style={number}>1</Text>
                            <View style={removeIcon}>
                                <Icon name='remove' color={'#ffffff'} size={30} />
                            </View>
                            <View style={priceView}>
                                <Text style={priceText}>{item.item.price}</Text>
                                <Text style={[{ priceText }, { textDecorationLine: 'line-through' }]}>{item.item.sale}</Text>
                            </View>
                        </View>
                    </View>
                    <Image
                        resizeMode={'contain'}
                        style={image}
                        source={{ uri: item.item.cover.url }} />
        </View>)}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    firstRowView: {
        flexDirection: 'row-reverse',
    },
    secondRowView: {
        flexDirection: 'row-reverse',
        marginLeft: 20,
        marginTop: 70,
    },
    itemView: {
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    image: {
        borderColor: '#dedede',
        borderWidth: 2,
        width: 120,
        height: 150
    },
    text: {
        marginRight: 30,
        fontWeight: 'bold',
        fontSize: 20
    },
    deleteIcon: {
        position: 'absolute',
        left: 210,
    },
    addIcon: {
        backgroundColor: '#9f9f9f',
        width: 40,
        height: 40,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
    },
    number: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#9f9f9f',
        width: 45,
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#9f9f9f'
    },
    removeIcon: {
        backgroundColor: '#9f9f9f',
        width: 40,
        height: 40,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
    },
    priceView: {
        marginRight: 50,
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 17,
    }
})

export { PurchasedItemView }