function fibonacci(n) {
  var fibSeries = [];
  for (var i = 0; i < n; i++) {
    if (i <= 1) {
      fibSeries.push(i);
    } else {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
  }
  return fibSeries;
}

var result = fibonacci(10);
console.log("Deret Fibonacci:", result);
