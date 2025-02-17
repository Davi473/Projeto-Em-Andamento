import { StyleSheet, ScrollView } from 'react-native';
import Saudacao from './Saudacao';
import Cartoes from './Cartoes';
import Transacoes from './Transacoes';

const cartaoUltimosMeses = [
  {id: new Date("01-13-2025").getTime(), mes: "Outubro", ano: "2024", valorEntrada: 1250, valorSaida: 1000},
  {id: new Date("01-14-2025").getTime(), mes: "Novembro", ano: "2024", valorEntrada: 1250, valorSaida: 1000},
  {id: new Date("01-15-2025").getTime(), mes: "Dezembro", ano: "2024", valorEntrada: 1250, valorSaida: 1000},
  {id: new Date("01-16-2025").getTime(), mes: "Janeiro", ano: "2025", valorEntrada: 1250, valorSaida: 1000},
  {id: new Date("01-17-2025").getTime(), mes: "Fevereiro", ano: "2025", valorEntrada: 1250, valorSaida: 1000}
]

const ultimaEntradasESaidas = [
  {id: new Date("01-18-2025").getTime(), nome: "Cartão Nubank", valor: 120, motivo: "Mercado"}
]

export default function Home(props) {
  console.log(props.navigation)
  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Saudacao nickName={"Davi"}></Saudacao>
      <Cartoes cartaoUltimosMeses={cartaoUltimosMeses} navigation={props.navigation} />
      <Transacoes ultimaEntradasESaidas={ultimaEntradasESaidas} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 0,
  },
});
