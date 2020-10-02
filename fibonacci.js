function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

var escala = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function nota(nro) {
  cantNotasDeLaEscala = escala.length;

  while (nro > cantNotasDeLaEscala) {
    nro = nro - cantNotasDeLaEscala;
  }

  return escala[nro - 1];
}

const loops = 25;
for (let index = 0; index < loops; index++) {
  console.log(fibonacci(index) + " => " + nota(fibonacci(index)));
}
