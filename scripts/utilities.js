var pointsArray = document.getElementsByClassName('point');

var forEach = function(arr, callback) {
  for (i = 0; i < pointsArray.length; i++) {
    callback(arr[i]);
  }
}
