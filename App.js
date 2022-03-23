import * as React from 'react';
import react from 'react';
import { JADWAL, MASKAPAI, BANDARA} from './assets/jadwal';
import { Button, View, Text, TextInput, StyleSheet,SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

function HomeScreen({ navigation: { navigate } }) {
  const [Keberangkatan, onChangekeberangkatan] = react.useState(null);
  const [Tujuan, onChangeTujuan] = react.useState();
  const [Tanggal, onChangeTanggal] = react.useState();
  
  const ubahnilai=()=>{
    let Keberangkatanbaru;
    console.log(Keberangkatan);
    for(const [key, value] of Object.entries(BANDARA)){
      if(value.bandara_nama === Keberangkatan){
        Keberangkatanbaru = (key);
        break;
      }
    }
    let Tujuanbaru;
    for(const [key, value] of Object.entries(BANDARA)){
      if(value.bandara_nama === Tujuan){
        Tujuanbaru = (key);
        break;
      }
    }
    navigate('ticket',{
      Keberangkatan: Keberangkatanbaru,
      Tujuan: Tujuanbaru,
      Tanggal: Tanggal,
    });
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.background}>
        <View style={styles.form}>
        <Text>Lokasi Keberangkatan</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangekeberangkatan}
          placeholder="Masukan Lokasi Keberangkatan"
          value={Keberangkatan}
        />
        <Text>Lokasi Tujuan</Text>  
        <TextInput
          style={styles.input}
          onChangeText={onChangeTujuan}
          placeholder="Masukan Lokasi Tujuan"
          value={Tujuan}
        />
        <Text>Tanggal Keberangkatan</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTanggal}
          placeholder="Masukan Tanggal Keberangkatan"
          value={Tanggal}
        />
        <Button
          onPress={ubahnilai}
          title="Cari"
        />
        </View>
      </View>
      <View>
        <Text style={{textAlign:'center',backgroundColor:'#F2F2F2', marginTop:90}}>
          CopyRight Mario Vebriyanto - 119140179</Text>
      </View>
    </SafeAreaView>
  );
}

const seleksi = (Keberangkatan, Tujuan) =>{
  const data = JADWAL.filter(function(item){
    return item.bandara_kode_keberangkatan == Keberangkatan && item.bandara_kode_tujuan == Tujuan;
  }).map(function({jadwal_id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id}){
    return {jadwal_id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id};
  });
  return data;
}

const Item = ({ Keberangkatan, Tujuan, maskapai_id, Tanggal }) => (
  <View style={styles.item}>
    <View style={styles.row}>
        <Text style={styles.col}>{BANDARA[Keberangkatan].bandara_nama}</Text>
        <Text style={styles.col}> - </Text>
        <Text style={styles.col}>{BANDARA[Tujuan].bandara_nama}</Text> 
    </View>
    <View style={styles.row}>
      <Text style={styles.col5}>
        {MASKAPAI[maskapai_id].maskapai_nama}
        </Text>
      <Text style={styles.col5}>{Tanggal}</Text>
    </View>
  </View>
);

function TicketScreen({ navigation, route }) {
  const {Keberangkatan, Tujuan, Tanggal} = route.params;
  
  const renderItem = ({ item }) => (
    <Item Keberangkatan={item.bandara_kode_keberangkatan} 
    Tujuan={item.bandara_kode_tujuan} maskapai_id={item.maskapai_id} Tanggal={Tanggal}/>
  );

  if (!Keberangkatan || !Tujuan || !Tanggal){
    return(
      <SafeAreaView style={{flex:1}}>
      <View style={styles.tanggal}>
        <Text style={{color:'white'}}>Hasil Pencarian Penerbangan</Text>
        <Text style={{color:'white'}}>{Tanggal}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ticket Tidak Dapat Dicari Karena Ada Inputan Yang Kosong</Text>
      </View>
      <View style={{textAlign:'center',backgroundColor:'#F2F2F2', marginBottom:10}}>
        <Text>CopyRight Mario Vebriyanto - 119140179</Text>
      </View>
      </SafeAreaView>
      
    )
  }
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.tanggal}>
        <Text style={{color:'white'}}>Hasil Pencarian Penerbangan</Text>
        <Text style={{color:'white'}}>{Tanggal}</Text>
      </View>
      <FlatList
        data={seleksi(Keberangkatan, Tujuan)}
        renderItem={renderItem}
      />
      <View style={{textAlign:'center',backgroundColor:'#F2F2F2', marginBottom:10}}>
        <Text>CopyRight Mario Vebriyanto - 119140179</Text>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Satu"}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#86B257',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title:"HEALLING.ID",
            headerLeft: () => <FontAwesome name="bars" size={24} color="white" style={{marginLeft:20}}/>,
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
            }}/>
        <Stack.Screen 
          name="ticket" 
          component={TicketScreen} 
          options={{
            title:"HEALLING.ID",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#86B257",
    flex: 1,
  },
  form:{
    flex:1,
    textAlign:"left",
    alignItems:"center",
    justifyContent:"center",
    pending: 5,
    margin:50,
    backgroundColor:"white",
    borderRadius:15,
  },
  input: {
    height: 40,
    width:'80%',
    margin: 15,
    borderWidth: 1,
    padding: 5,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  col: {
    width: '30%',
    textAlign: 'center',
  },
  col5:{
    width: '50%',
    fontWeight: 'bold',
    textAlign:'center',
  },
  tanggal: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: '#86B257',
  },
});