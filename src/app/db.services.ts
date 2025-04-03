export  class DBServices {
  counter=11;
getProducts=()=>{
  return 'all products'

}
getSpecialProducts(){
  return 'special products'
}
getCounter(){
  return this.counter;
  
}
  addCounter(){
  this.counter++;
  console.log('c2',this.counter);

}
}

