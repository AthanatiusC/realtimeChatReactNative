import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header,Left, Body, Right, Button, Icon, Title, Tabs,Tab,TabHeading, Content, View, Text, List, ListItem, Thumbnail, Separator, Fab, Badge } from 'native-base';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      
      <Container>
        <Header style={{ backgroundColor: "#075e54"}} androidStatusBarColor="#075e54"> 
        <Body>
       
          <Title style={{marginLeft:10}}>Whatsapp</Title>
        </Body>
        <Right>
          
        <Button transparent>
            <Icon name='search' />
          </Button>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </Header>
    
       <Tabs>
          <Tab  heading={<TabHeading style={{ backgroundColor:"#075e54"}}><Icon name="camera" style={{color: '#128c7e'}}/></TabHeading>}>
          
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor:"#075e54",color: '#128c7e'}}><Text style={{fontSize:14,color:"#ffffff",textTransform:"uppercase",fontWeight:"bold"}}>Chat</Text></TabHeading>}>
          <List>
            <ListItem avatar style={{marginBottom:10}}>
              <Left>
                <Thumbnail source={require("./assets/images/robot-dev.png")} />
              </Left>
              <Body>
                <Text>Ahmad Saugi </Text>
                <Text note>Ayy lmao . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={{marginBottom:10}}>
              <Left>
                <Thumbnail source={require("./assets/images/robot-dev.png")} />
              </Left>
              <Body>
                <Text>Abid Maulana</Text>
                <Text note>YEET . .</Text>
              </Body>
              <Right>
                <Text note>02:09 am</Text>
              </Right>
              <View>
         
        </View>
            </ListItem>
          </List>
          <Fab
            style={{ backgroundColor: '#25d366', position:"absolute", marginTop:100}}>
            <Icon name="text" />
          </Fab>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor:"#075e54",color: '#128c7e'}}><Text style={{fontSize:14,color:"#ffffff",textTransform:"uppercase",fontWeight:"bold"}}>Status</Text></TabHeading>}>
          <List>
          <ListItem avatar style={{marginBottom:5}} noBorder>
              <Left>
                <Thumbnail source={require("./assets/images/robot-dev.png")} />
                <Badge style={{backgroundColor:"#25d366", display:"flex", justifyContent:"center", position:"absolute", top:47, left:35}}>
            <Icon name="add" style={{color:"#ffffff", fontSize:22}} />
          </Badge>
              </Left>
              <Body style={{marginTop:10}}>
                <Text>My Status</Text>
                <Text note>Click To Add Status</Text>
              </Body>
            </ListItem>
            <Separator bordered style={{marginTop:5}}>
              <Text style={{fontSize: 15}}>Recent updates</Text>
            </Separator>
            <ListItem avatar style={{marginBottom:5}}>
              <Left>
                <Thumbnail source={require("./assets/images/robot-dev.png")}  style={{padding:5, backgroundColor:"#ffffff",borderWidth: 2.5, borderColor: "#5FDBA7"}} />
              </Left>
              <Body>
                <Text>Abid Maulana</Text>
                <Text note>Today 07:18 pm</Text>
              </Body>
            </ListItem>
            <Separator bordered style={{marginTop:5}}>
              <Text style={{fontSize: 15}}>Viewed updates</Text>
            </Separator>
            <ListItem avatar style={{marginBottom:5}}>
              <Left>
                <Thumbnail source={require("./assets/images/robot-dev.png")} style={{borderWidth: 2.5, borderColor: "#dbd8d5"}} />
              </Left>
              <Body>
                <Text>Ahmad Saugi</Text>
                <Text note>Today 12:33 pm</Text>
              </Body>
            </ListItem>
          </List>
          <Fab
            style={{ backgroundColor: '#f4f4f4',marginBottom:65, height:45, width:45 }}
            position="bottomRight"
            >
            <Icon name="create" style={{fontSize:20,color:"#075e54"}}/>
          </Fab>
          <Fab
            style={{ backgroundColor: '#25d366' }}
            position="bottomRight"
            >
            <Icon name="camera" />
          </Fab>
            </Tab>
            <Tab heading={ <TabHeading style={{ backgroundColor:"#075e54",color: '#128c7e'}}><Text style={{fontSize:14,color:"#ffffff",textTransform:"uppercase",fontWeight:"bold"}}>Call</Text></TabHeading>}>
          <List>
          <ListItem avatar style={{marginBottom:5}}>
              <Left>
                <Thumbnail source={require("./assets/images/robot-dev.png")} />
              </Left>
              <Body>
                <Text>Abid Maulana</Text>
                <Text note><Icon name="undo" style={{color:'green'}}/>Today 05:22 pm</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='videocam' style={{color: '#075e54'}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
          <Fab
            style={{ backgroundColor: '#25d366', position:"absolute", marginTop:100}}>
            <Icon name="call" />
          </Fab>
          </Tab>
        </Tabs>
      
    </Container>
    );
  }
}
