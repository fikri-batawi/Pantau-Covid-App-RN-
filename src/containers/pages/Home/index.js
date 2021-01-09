import React, { Component } from 'react'
import { View,BackHandler, Alert } from 'react-native'
import Header_home from '../../../components/molecules/Header_home'
import Banner_home from '../../../components/molecules/Banner_home'
import { date } from '../../../utils'
import Footer_version from '../../../components/molecules/Footer_version'

export default class Home extends Component {

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:'space-between',
          backgroundColor: '#f3f2f2',
          padding: 20,
        }}>
        <Header_home title="Welcome" sub_title={date} />
        <Banner_home nav={navigation}/>
        <Footer_version/>
      </View>

    )
  }
}
