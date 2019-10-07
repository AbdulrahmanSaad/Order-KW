import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { ToolBar } from './Index'
import { CategoryView } from './subComponents/CategoryView'
import {getCategories, getSubCategories} from './Models/Catalogue'

class DepartmentsListWindow extends Component {
    state = {list: []};
    componentWillMount() {
        getCategories({
            success: (response) => {
               this.setState({ list: response.data.data })
               //console.log(response)
            },
            error: () => {
                alert('error')
            }
        })
    }
    render() {
        const {list} = this.state
        const { text, contentContainer } = styles
        return (
            <View style={contentContainer}>
                <ToolBar title={'الأقسام'} menuIcon />
                <Text style={text}>
                    يوجد {list.length} قسم بمتجرنا
                </Text>
                <FlatList
                    data={list}
                    renderItem={({ item }) =>
                        <CategoryView item={item} />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        height: 1000
    },
    text: {
        fontWeight: '200',
        color: 'grey',
        //position: 'absolute',
        right: 15,
        marginTop: 5,
        marginBottom: 5
    }
})

export { DepartmentsListWindow }