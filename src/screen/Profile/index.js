import React from 'react';
import {useWindowDimensions, Text, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import DetailsAccount from '../../components/DetailsAccount';
import OrderHistory from '../../components/OrderHistory';
import Footer from '../../components/Footer';

import styles from './style';

const FirstRoute = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <DetailsAccount />
    <Footer />
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <OrderHistory />
    <Footer />
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Details Account'},
    {key: 'second', title: 'Order History'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({focused, route}) => (
        <Text style={{color: focused ? '#14142B' : '#AAAAAA'}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={styles.tabBorder}
      style={styles.tab}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
