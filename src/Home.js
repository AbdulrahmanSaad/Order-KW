import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ToolBar, BannerView, SectionView, RecipesView } from './common/Index';

class Home extends Component {
    render() {
        return (
            <View style={styles.contentConstainer}>
                <ToolBar title={'الرئيسية'} menuIcon cart search/>
                <ScrollView>
                        <BannerView />
                        <SectionView title={'العروض'} seeMore={'شاهد كل العروض'} loadOffers/>
                        <SectionView title={'اخر الاضافات'} seeMore={'شاهد كل العروض'}/>
                        <RecipesView />
                    </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentConstainer: {
        flex: 1,
        backgroundColor: '#fafafa'

    }
})

export { Home };