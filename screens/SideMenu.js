import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MainContainer from '../navigation/MainContainer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {

    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
                <View style={styles.userInfoSection}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('ProfileScreen')}} style={{flexDirection:'row',marginTop: 15}} >
                        <Avatar.Image 
                            source={require('../assets/icon.png')}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}> Kartikkumar </Title>
                            <Caption style={styles.caption}>mahindrakar.com</Caption>
                        </View>
                    </TouchableOpacity>
                                      
                </View>
                {/* Drawer Section */}
                <Drawer.Section>
                    <DrawerItem 
                        icon = { ()=> ( <Icon name="cloud" style={{fontSize:2.8*vh,color:'grey', width:30}} />  ) } 
                        label="Read About"
                        onPress={ ()=>{props.navigation.navigate('EntryScreen')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="progress-question" style={{fontSize:2.8*vh,color:'grey' , width:30}} />  ) } 
                        label="FAQ"
                        onPress={ ()=>{props.navigation.navigate('FAQScreen')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="phone" style={{fontSize:2.8*vh,color:'grey', width:30}} />  ) } 
                        label="Reach At Us"
                        onPress={ ()=>{props.navigation.navigate('ContactUs')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="star" style={{fontSize:2.8*vh,color:'grey', width:30}} />  ) } 
                        label="Rate Us"
                        onPress={ ()=>{props.navigation.navigate('RateUs')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="account-check-outline" style={{fontSize:2.8*vh,color:'grey', width:30}} />  ) } 
                        label="Support"
                        onPress={ ()=>{props.navigation.navigate('Support')} }
                    />
                </Drawer.Section>

                {/*<Drawer.Section title="Choose Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={cDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
                */}
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = { ()=>( <Icon name="exit-to-app"  style={{fontSize:2.8*vh,color:'grey'}} /> ) }
                    label="Sign Out"
                    onPress={()=>{props.navigation.navigate('Login')} }
                />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
    },
    title: {
      fontSize: 2*vh,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });