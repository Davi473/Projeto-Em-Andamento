import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"; 


export default function Transacoes(props) {
  return (
    <View>
      <Text>Ultimas Entradas / Saidas</Text>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={props.ultimaEntradasESaidas.reverse()}
          renderItem={({item}) => {
          return (
              <View style={styles.transactionItem}>
                <View style={styles.leftSection}>
                    <View style={styles.iconContainer}>
                    <Icon name="attach-money" size={24} color="#fff" />
                    </View>
                    <View>
                    <Text style={styles.title}>CDI </Text>
                    <Text style={styles.subtitle}>CDI</Text>
                    </View>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.value}>+R$ 200,00   </Text>
                    <Text style={styles.subtitle}>13/01/2025 </Text>
                </View>
              </View>
          )
          }}
          keyExtractor={(item) => item.id.toString() }
          nestedScrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra no Android
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#28a745", // Verde para o ícone
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#6c757d",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  value: {
    fontSize: 16,
    color: "#28a745", // Verde para valor positivo
    fontWeight: "bold",
  },
});
