import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import { ProductView } from './subComponents/ProductView';
import { Icon } from 'react-native-elements';
import { getProducts, getOffers, getSimilarProducts} from './Models/Catalogue';

class SectionView extends Component {
    state = {list: []};
    componentWillMount() {
        const loadOffers = this.props.loadOffers
        const disableArrow = this.props.disableArrow
        const {id} = this.props
        if (loadOffers) {
            getOffers({
                success: (response) => {
                    this.setState({ list: response.data.data })
                    //console.log(response)
                },
                error: () => {
                    alert('error')
                }
            })
            return
        }
        if(id){
            getSimilarProducts({
                success: (response) => {
                   this.setState({ list: response.data.data })
                    //console.log(response)
                },
                error: () => {
                    alert('error')
                }
            }, 
            id)
            return
        }
    getProducts({
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
       //console.log(id)
        const loadOffers = this.props.loadOffers
        const disableArrow = this.props.disableArrow
        //console.log(loadOffers)
        const { title, seeMore } = this.props
        return (
            <View style={styles.contentContainer}>
                <View style={styles.textView}>
                    {this.props.disableArrow ?
                        null : <View style={styles.iconView}>
                        <Icon name='keyboard-arrow-left' color={'#cb9090'}/>
                    </View>}                    
                    <Text style={styles.arrowText} accessibilityRole={'link'}>
                       {this.props.seeMore}
                    </Text>
                     <Text style={styles.text}>
                        {this.props.title} 
                            {this.props.loadOffers ? 
                          <Text style={styles.subText}>
                          ( عرض)</Text>  :  null}
                    </Text>
                </View>
                <FlatList
                    style={styles.list}
                    horizontal={true}
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <ProductView item={item}/>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        height: 370,
        marginTop: 30,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    textView: {
        height: 30,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        position: 'absolute',
        right: 10,
        top: 5
    },
    arrowText: {
        right: 140,
        fontWeight: 'bold',
        color: '#cb9090',
        //textAlign: 'left',
        //: 20,
        top: 15
    },
    subText: {
        marginTop: 15,
        fontWeight: '100',
        color: 'grey',
        fontSize: 15
    },
    iconView: {
        right: 135,
        top: 15,
        color: '#cb9090'

    }
})


export { SectionView };