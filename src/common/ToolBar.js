import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { Appbar} from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import {PurchasesCartWindow} from './Index'

class Bar extends Component{
    render (){
        const menuIcon = this.props.menuIcon
        const cart = this.props.cart
        const search = this.props.search
        const { title } = this.props
        return(
            <View style={styles.contentConstainer}>
                <Appbar style={styles.appbar}>
                {this.props.search ? 
                <Appbar.Action 
                    icon='search' size= {30}  onPress={() => console.log('Pressed archive')}/> : null }
                {this.props.cart ?
                <Appbar.Action 
                    icon='local-grocery-store' size= {30}   
                    onPress={() => this.props.navigation.navigate('PurchasesCartWindow')}/>  : null }
                <Appbar.Content
                    title={this.props.title}
                    titleStyle= {{fontWeight: '900', textAlign: 'center', 
                    alignSelf: 'center', left: 25}}
                />
                {this.props.menuIcon ? 
                <Appbar.Action 
                    icon='menu' size= {30}  onPress={() => console.log('Pressed archive')}/> : 
                    <Appbar.Action 
                    icon='arrow-forward' size= {30}  onPress={() => this.props.navigation.pop()}/>}
                </Appbar>
                
                
                </View>
        )
    }
}

const styles = StyleSheet.create({
    contentConstainer: {
        height: 100,
    },
    appbar: {
        flex: 1,
        paddingTop: 50, 
        backgroundColor: '#D83A3B',
    }
})
const ToolBar = withNavigation(Bar);
export {ToolBar};
