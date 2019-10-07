import React, {Component} from 'react'
import {FlatList, View, StyleSheet, Text} from 'react-native'
import {ToolBar} from './Index'
import {ProductView} from './subComponents/ProductView'
import { getOffers } from './Models/Catalogue';

class OffersListWindow extends Component {
    state = {list: []};
    componentWillMount(){
        getOffers({
            success: (response) => {
                this.setState({ list: response.data.data })
                //console.log(response)
            },
            error: () => {
                alert('error')
            }
        })
    }
    render(){
        const { text, list } = styles 
        return(
            <View>
                <ToolBar title={'العروض'} menuIcon/>
                <Text style={text}>العروض</Text>
                <FlatList
               style={list}
                numColumns={2}
                data={this.state.list}
                renderItem={({ item }) =>
                    <ProductView item={item} window/>
                }
                />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 30,
        height: 1000
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        //position: 'absolute',
        right: 10,
        top: 5,
        marginBottom: 15
    },
    list: {
        //flex: 1,
        marginTop: 20,
        height: 600,
       // paddingBottom: 20
    }
})

export {OffersListWindow}