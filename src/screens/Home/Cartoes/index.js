import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Cartoes(props) {
  return (
      <View style={styles.ultimosCartoes}>
        <Text>Resumo dos ultimos 5 meses</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          data={props.cartaoUltimosMeses.reverse()}
          renderItem={({item}) => {
            return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("Lancamento", { id: item.id })
                }}
            >
              <View style={styles.containerCartao}>
                <View style={styles.cartao}>
                  <View style={styles.cartaoBody}>
                    <View style={styles.cartaoBody}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>
                                {item.mes}
                            </Text>
                        </View>
                        <Text style={styles.cardText}>{item.ano}</Text>
                        <View style={styles.alinhasValores}>
                            <Text style={styles.cardText}>
                                Entrada: R$ <Text>{item.valorEntrada.toFixed(2)}</Text>
                            </Text>
                            <Text style={styles.cardText}>
                                Saida: R$ <Text>{item.valorSaida.toFixed(2)}</Text>
                            </Text>
                        </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  ultimosCartoes: {
    marginTop: 30,
  },
  containerCartao: {
    marginTop: 10,
    padding: 10,
  },
  cartao: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15
  },
  cartaoBody: {
    marginBottom: 15
  },
  cartaoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
},
cardIcon: {
    fontSize: 20,
    color: '#555',
},
cardText: {
    fontSize: 16,
    marginVertical: 5,
},
alinhasValores: {
    alignItems: "center"
}
});
