import * as React from 'react' ;
import { StyleSheet, Text,ScrollView, View,Image,TouchableOpacity } from 'react-native';


export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Guia Turistica',
    headerStyle: {
      backgroundColor: '#252850',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {  
  return (                
      <View style={styles.container}>        
        <ScrollView>
        <View style={styles.Post}>{/*PRIMER POST*/}
          <Image source={{uri: 'https://tiemposdenegocios.com/wp-content/uploads/2018/03/turismo.jpg'}}
          style={{width: 350, height:150, marginVertical:5}} 
          />
            <View style={styles.tituloEtiquetaContainer}>
              <Text style={styles.tituloPost}>
                San Juan del Sur
              </Text>
              <Text style={styles.etiqueta}>
                Rivas
              </Text>
            </View>
              <Text style={styles.detailPost}>
                Descubre toda la naturaleza de San Juan del sur...
              </Text>
                <TouchableOpacity
                  
                  onPress={ ( ) => this . props . navigation . navigate ( 'Details', {            
                    Param: 'San Juan del Sur',
                  } )}
                >
                  <Text> Leer Mas </Text>
                </TouchableOpacity>        
         </View>
         <View style={styles.Post}>{/*SEGUNDO POST*/}
          <Image source={{uri: 'https://www.riosanjuan.com.ni/wp-content/uploads/2018/09/original_sanmiguelito_infogeneral2-1024x683.jpg'}}
          style={{width: 350, height:150, marginVertical:5}} 
          />
            <View style={styles.tituloEtiquetaContainer}>
              <Text style={styles.tituloPost}>
                San Miguelito
              </Text>
              <Text style={styles.etiqueta}>
                Rio San Juan
              </Text>
            </View>
              <Text style={styles.detailPost}>
                Descubre toda la naturaleza de San Miguelito...
              </Text>
                <TouchableOpacity
                  
                  onPress={ ( ) => this . props . navigation . navigate ( 'Details', {            
                    Param: 'San Miguelito',
                  } )}
                >
                  <Text> Leer Mas </Text>
                </TouchableOpacity>        
         </View>
         <View style={styles.Post}>{/*TERCER POST*/}
          <Image source={{uri: 'https://assets.cdnelnuevodiario.com/cache/f1/86/f186d25edfc2e5a52ecd7d079b15b3a4.jpg'}}
          style={{width: 350, height:150, marginVertical:5}} 
          />
            <View style={styles.tituloEtiquetaContainer}>
              <Text style={styles.tituloPost}>
                Granada
              </Text>
              <Text style={styles.etiqueta}>
                Granada
              </Text>
            </View>
              <Text style={styles.detailPost}>
                Descubre toda la naturaleza de Granda...
              </Text>
                <TouchableOpacity
                  
                  onPress={ ( ) => this . props . navigation . navigate ( 'Details', {            
                    Param: 'Granada',
                  } )}
                >
                  <Text> Leer Mas </Text>
                </TouchableOpacity>        
         </View>
         </ScrollView>
       </View>         
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    padding:5,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center'    
  }, 
  tituloEtiquetaContainer: {   
    flexDirection:'row',        
    justifyContent: 'space-between',
  },
  Post: {
  marginBottom:12   
  },
  tituloPost: {
    fontSize:17,
    fontWeight: 'bold',   
    alignSelf: 'flex-start',
    marginRight:10    
  },
  detailPost: {
    fontSize:14,        
  },
  etiqueta: {
    fontSize:17,
    color:'white',
    backgroundColor:'#1E60DB',   
    alignSelf: 'flex-end'    
  },

});