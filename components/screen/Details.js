import * as React from 'react' ;
import { StyleSheet, Text,Button, View,Image } from 'react-native';

export default class Details extends React.Component {  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Param'),
      headerStyle: {
        backgroundColor: '#252850',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    };
  };

  render() {
   return (      
    <View style={styles.container}>
       <View style={styles.postContainer}>
         <Image source={{uri: 'https://tiemposdenegocios.com/wp-content/uploads/2018/03/turismo.jpg'}}
            style={{width: 350, height:200, marginVertical:5}} 
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
                Descubre toda la naturaleza de San Juan..
                Descubre toda la naturaleza de San Juan..
                Descubre toda la naturaleza de San Juan..
                Descubre toda la naturaleza de San Juan..
              </Text>
                <Text style={styles.tours}>
                  Tours 
                </Text>
                    <Text style={styles.detailTours}>
                      Tours #1 {"\n"}
                      Tours #2 {"\n"}
                      Tours #3                     
                    </Text>
                   <Button title= "RESERVAR" ></Button>

         </View>         
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
    //justifyContent: 'flex-start',
   // justifyContent: 'center'
    
  },
  
  tituloEtiquetaContainer: {
   
    flexDirection:'row',
            
    justifyContent: 'space-between',
  },
  tituloPost: {
    fontSize:17,
    fontWeight: 'bold', 
    alignSelf: 'flex-start',
    marginRight:10
    
  },
  tours: {
    fontSize:17,
    fontWeight: 'bold',   
    alignSelf: 'flex-start',
    marginRight:10
    
  },
  detailPost: {
    fontSize:14,       
  },
  detailTours: {
    fontSize:14,        
  },
  etiqueta: {
    fontSize:17,
    color:'white',
    backgroundColor:'#1E60DB',     
    alignSelf: 'flex-end',
    //position:'absolute'

    
  }
 
  

});
