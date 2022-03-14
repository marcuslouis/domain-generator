function combarrays(){
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let arr= ['.com','.net','.io','.org','.etc']

  for(let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
      for(let k = 0; k < noun.length; k++){
        for(let m = 0; m < arr.length; m++){

          console.log(pronoun[i] + adj[j] + noun[k] +arr[m])
        }
      }
  }
}
}
combarrays()