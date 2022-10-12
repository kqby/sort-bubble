import './style.css';

function doBubbleSort(arrayToBeSorted) {
  console.time();
  console.log(arrayToBeSorted);
  // VÉGEZZ EL EGY RENDEZÉST A KAPOTT TÖMBÖN BUBBLE SORT ALGORITMUS HASZNÁLATÁVAL

  //TODO algoritmus implementálása

  for (var i = 0; i < arrayToBeSorted.length; i++) {
    for (var j = 0; j < arrayToBeSorted.length - i - 1; j++) {
      if (arrayToBeSorted[j] > arrayToBeSorted[j + 1]) {
        var temp = arrayToBeSorted[j];
        arrayToBeSorted[j] = arrayToBeSorted[j + 1];
        arrayToBeSorted[j + 1] = temp;
      }
    }
  }

  console.log('A rendezett tömb: ', arrayToBeSorted);
  console.timeEnd();
}

doBubbleSort([
  49, 40, 5, 12, 35, 60, 61, 57, 23, 96, 21, 12, 86, 32, 65, 72, 11, 87, 72, 24,
  36, 35, 12, 98, 99, 28, 22, 50, 24, 30, 72, 3, 26, 84, 53, 7, 21, 10, 78, 7,
  93, 52, 76, 14, 33, 60, 18, 14, 89, 14, 32, 79, 31, 54, 2, 88, 56, 50, 46, 73,
  37, 65, 35, 40, 65, 8, 5, 98, 60, 19, 40, 65, 41, 68, 72, 58, 48, 74, 41, 66,
  53,
]);
