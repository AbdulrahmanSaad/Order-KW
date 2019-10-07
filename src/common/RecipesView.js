import React, { Component } from 'react';
import { FlatList, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import {Button} from 'react-native-paper';
import {getRecipes} from './Models/Catalogue';

const sectionWidth = Dimensions.get('window').width;
class RecipesView extends Component {
        state = {list: []};
        componentWillMount() {
            getRecipes({
                success: (response) => {
                    this.setState({ list: response.data.data })
                   // console.log(response)
                },
                error: () => {
                    alert('error')
                }
            })
        }
    render() {
        const { title } = this.props
        return (
            <View style={styles.contentContainer}>
                <View style={styles.textView}>
                    <View style={styles.iconView}>
                        <Icon name='keyboard-arrow-left' color={'#cb9090'} />
                    </View>
                    <Text style={styles.arrowText} accessibilityRole={'link'}>
                        شاهد كل العروض
                    </Text>
                    <Text style={styles.text}>
                        الوصفات
                    <Text style={styles.subText}>{title}</Text>
                    </Text>
                </View>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <View style={styles.itemContainer}>
                            <View>
                                <Text
                                    numberOfLines={2}
                                    style={styles.textTitle}>
                                    {item.name}
                            </Text>
                            <Button style = {styles.buttonView} color={'#b0b0b0'} mode={'title'} fontSize={80} contentStyle={{height: 30}}>
                                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                                المزيد    
                                </Text>
                                </Button>
                            </View>
                            <Image style={styles.image}
                                resizeMode='stretch'
                                source={{ uri: item.cover.url }}
                            />
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 30
    },
    itemContainer: {
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15,

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
        bottom: 1
    },
    arrowText: {
        right: 140,
        fontWeight: 'bold',
        color: '#cb9090',
        top: 10
    },
    subText: {
        marginTop: 15,
        fontWeight: '100',
        color: 'grey',
        fontSize: 15
    },
    iconView: {
        right: 135,
        top: 10,
        color: '#cb9090'

    },
    image: {
        width: 200,
        height: 130,
       //backgroundColor: 'black',
        marginRight: 10
    },
    textTitle: {
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        //backgroundColor: 'red',
        width: sectionWidth - 230,
        top: 10,
        height: 55,
        //height: 50
    },
    buttonView: {
        top: 30,
        borderRadius: 50,
        //overflow: 'hidden',
        width: 75,
        marginLeft: 90,
        backgroundColor: '#d7d7d7',
    }
})

export { RecipesView };