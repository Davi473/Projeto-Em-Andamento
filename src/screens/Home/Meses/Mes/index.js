import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LancamentoCartaoCard from './Cartao';
import LancamentoTypeCard from "./Type";

export default function Mes({ route }) {
    const { id, mes, ano } = route.params;
    const [lancamentosDoMes, setLancamentosDoMes] = useState();

    useEffect(() => {

    }, []);

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={styles.cardHeaderTitle}>
                            <Text>Entrada De {mes} / {ano}     </Text>
                        </View>
                    </View>
                </View>
            </View>
            {
                lancamentosDoMes.map(lancamento => 
                    lancamento.cartao ? <LancamentoCartaoCard lancamento={lancamento} /> 
                        : <LancamentoTypeCard lancamento={lancamento} />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 15,
    },
    cardBody: {
        marginBottom: 15,
    },
    cardHeaderTitle: {
        alignItems: 'center',
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
    valorReceita: {
        color: 'green',
    },
    valorDespesa: {
      color: 'red',
    },
    toggleButton: {
        padding: 10,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderRadius: 5,
    },
    toggleButtonText: {
        color: '#333',
        fontSize: 16,
    },
    comprasContainer: {
        marginTop: 15,
    },
      comprasRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    comprasText: {
      fontSize: 14,
      flex: 1,
      textAlign: 'center',
  },
});
