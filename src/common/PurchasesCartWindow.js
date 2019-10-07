import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions} from 'react-native'
import { ToolBar } from './Index'
import { Button } from 'react-native-paper';
import {PurchasedItemView} from './subComponents/PurchasedItemView'

const footerWidth = Dimensions.get('window').width;

class PurchasesCartWindow extends Component {
    render() {
        const { contentContainer,  footerContainer,textView, 
            purchasesText, buttonView, buttonText } = styles
        return (
            <View style={contentContainer}>
                <ToolBar title={'سلة المشتريات'} />
                        <PurchasedItemView/>
                <View style={footerContainer}>
                    <View style={textView}>
                        <Text style={purchasesText}>مجموع المشتريات :</Text>
                        <Text style={purchasesText}>160 دينار</Text>
                    </View>
                    <Button style={buttonView} color={'#ffffff'} contentStyle={{ height: 60 }}> 
                    <Text style={buttonText}>ادفع الان</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    footerContainer: {
        backgroundColor: '#f5f5f5',
        width: footerWidth,
        height: 200,
        top: 50
    },
    textView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10
    },
    purchasesText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#d73b3c'
    },
    buttonView: {
        backgroundColor: '#d73b3c',
        marginTop: 20,
        height: 70,
        borderRadius: 40,
        left: 23,
        width: 350
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export { PurchasesCartWindow }