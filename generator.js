module.exports = {

  thousand : function(n){
    var arr = [];

    for (var i = 0; i < n; i++ ){
      arr.push(i);
    }

    //creates an array of 1000 numbers in order
    return arr;

  },

  scramble : function(array){
    var swap;

    //in order to scramble the tousand array, the length of an array is divided
    for (var i = 0; i < array.length / 2; i++){
      var randomIndex = Math.round(Math.random() * array.length);
      
      //swap contains the random pulled numebr from array
      swap = array[randomIndex];
      
      //then store another number into the last spot to swap the two numbers
      array[randomIndex] = array[i];
      
      //then puts swap value into the original index of array[i]
      array[i] = swap;

    }

    return array;
  }


}; //end of module exports