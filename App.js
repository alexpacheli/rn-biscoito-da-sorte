import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'As pessoas felizes lembram o passado com gratidão, alegram-se com o presente e encaram o futuro sem medo.',
    'A morte não é nada para nós, pois, quando existimos, não existe a morte, e quando existe a morte, não existimos mais.',
    'O desejo é a causa de todos os males.',
    'Quanto maior se é, mais repetido se é. Platão, Aristóteles, Kant, quantos outros. Ainda se não calaram nos que deles falaram. E é possível que só se calem quando a espécie humana se calar.',
    'O prazer de fazer o bem, é maior do que recebê-lo.',
    'É estupidez pedir aos deuses aquilo que se pode conseguir sozinho.',
    'A amizade e a lealdade residem numa identidade de almas raramente encontrada.',
    'Só há um caminho para a felicidade. Não nos preocuparmos com coisas que ultrapassam o poder da nossa vontade.',
    'Não se pode não ter medo quando se inspira o medo.',
    'A justiça é a vingança do homem em sociedade, como a vingança é a justiça do homem em estado selvagem.',
    'O ignorante afirma, o sábio duvida, o sensato reflete.',
    'A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez.',
    'Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.',
    'Fiquei magoado, não por me teres mentido, mas por não poder voltar a acreditar-te.'
  ];

  function quebraBiscoito() {

    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {textoFrase} </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={ quebraBiscoito }
      >
        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}
        onPress={ reiniciarBiscoito }
      >
        <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
      </TouchableOpacity>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})