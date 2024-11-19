// Задача 1
"use strict"

function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

  for (let i = 0; i < arr.length; i++) {

		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}


// Задача 2

  function summElementsWorker(...arr) {

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {

	if (arr.length < 1) {
		return 0;
	}

	let min = Infinity
	let max = -Infinity
	let cur;

	for (let i = 0; i < arr.length; i++) {

		cur = Number(arr[i]);

		if (cur < min) {
			min = cur;
		}

		if (cur > max) {
			max = cur;
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 1) {
			sumOddElement = sumOddElement + arr[i];
		} else {
			sumEvenElement = sumEvenElement + arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length < 1) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++;
		}
	}

  return sumEvenElement / countEvenElement;
}

// Задача 3

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const currentWorkerResult = func(...arrOfArr[i]);
		if (currentWorkerResult > maxWorkerResult) {
			maxWorkerResult = currentWorkerResult;
		}
	}

  return maxWorkerResult;
}




 // Примеры:
getArrayParams(-99, 99, 10) // { min: -99, max: 99, avg: 3.33 }
getArrayParams(1, 2, 3, -100, 10)  // { min: -100, max: 10, avg: -16.80 }
getArrayParams(5)  // { min: 5, max: 5, avg: 5 }


// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72

