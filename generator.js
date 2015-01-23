module.exports = {

  random : function(n){
    var arr = [];

    for (var i = 0; i < n; i++ ){
      arr.push(Math.round(Math.random() * (n)));

    }

    return arr;

  }



}; //end of module exports