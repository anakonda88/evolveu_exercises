
class City extends Object {
  constructor(name, latitude, longitude, population) {
    super();
    this.name = name;
    this.lat= parseFloat(latitude);
    this.long = parseFloat(longitude);
    this.pop = parseFloat(population);
  }

  show() {
    return this.name + ' ' +
           this.lat.toString() + ' ' +
           this.long.toString() +  ' ' +
           this.pop.toString()
  }

  movedIn(people){
    this.pop += people;
  }

  movedOut(people){
    this.pop -= people;
    if(this.pop < 0){
      this.pop = 0
    }
  }

  howBig(){
    if(this.pop > 100000){
      return 'City'
    }
    else if(this.pop > 20000 && this.pop <= 100000){
      return 'Large town'
    }
    else if(this.pop > 1000 && this.pop <= 20000){
      return 'Town'
    }
    else if(this.pop > 100 && this.pop <= 1000){
      return 'Village'
    }
    else {
      return 'Hamlet'
    }
  }

  whichHemisphere() {
    if(this.lat < 0){
      return 'Southern Hemisphere'
    }
    else{
      return 'Northen Hemisphere'
    }
  }
}

class Community extends Object{
  constructor(){
    super();
    this.listOfCities = [];
    this.index = -1;
    this.length = 0;
    //using -1 because if I set this.index in '0' when I push
    //my first item the position will be [1] instead of [0]
  }

  // addCity(name, latitude, longitude, population) {
  //   this.listOfCities.push(new City(name,
  //                                   latitude,
  //                                   longitude,
  //                                   population));
  // }

  addCity(name, latitude, longitude, population) {
      /* move all cities from index and above
       one position up */
      // recordar las sillas
      let length = this.listOfCities.length;
      let tmpCity = new City( name,
                          latitude,
                          longitude,
                          population);
      //tmpCity is the new city that I'm adding to the Community
      if(length > 0){
        //to push the last city of the array to the end
      this.listOfCities.push(this.listOfCities[length - 1]);
        var i;
        for(i=length-1;i>this.index+1;i--){
          //this.index is my 'pointer' where I'm inserting
          //my new element/city

          this.listOfCities[i] = this.listOfCities[i - 1]
          //move or copy [i - 1]to [i] position
        }
        this.listOfCities[this.index + 1] = tmpCity;
      }
      else{
        this.listOfCities.push(tmpCity)
      }
      this.index++;
      this.length++
}


  getPopulation(){
    let total = 0;
    var i;
    for(i=0; i< this.listOfCities.length;i++){
      total += this.listOfCities[i].pop;
    }
    return total
  }

  getMostNorthern(){
    let max = this.listOfCities[0].lat;
    let cityIdx = 0;
    var i;
    for(i=1;i<this.listOfCities.length;i++){
      if(this.listOfCities[i].lat > max){
        max = this.listOfCities[i].lat;
        cityIdx = i;
      }
    }
    return cityIdx
  }

  getMostSouthern(){
    let min = this.listOfCities[0].lat
    let cityIdx = 0;
    var i;
    for(i=1;i<this.listOfCities.length;i++){
      if(this.listOfCities[i].lat < min){
        min = this.listOfCities[i].lat;
        cityIdx = i;
      }
    }
    return cityIdx
  //  return this.listOfCities[cityIdx].lat
  }

  show(index){
    console.log(index+1, this.listOfCities[index]);
    return this.listOfCities[index];
  }

  next(){
    if(this.index==this.listOfCities.length - 1){
      this.index = 0}
    else{
      this.index += 1;
    }
  }

  prev(){
    if(this.index == 0){
      this.index = this.listOfCities.length - 1
    }
    else{
      this.index -= 1;
    }
  }

  first(){
    this.index = 0;
  }

  last(){
    this.index = this.listOfCities.length - 1;
  }

  getCity(){
    let length = this.listOfCities.length;
    if(length > 0){
      return this.listOfCities[this.index]
    }
    else{
      return new City(null, null, null, null)
    }
  }
  getIndex(){
    let length = this.listOfCities.length;
    if(length > 0){
      return this.index;
    }
    else{
      return null
    }
  }
  reset(){
    this.listOfCities = [];
    this.index = -1;
    this.length = 0
  }
}
//-----------------------------------------------------
// class PlaySeq extends Object {
//
//   constructor(){
//     super();
//     this.index = 0;
//     //this.quantity = 100;
//     console.log('I am in constructor');
//   }
//
//   show(){
//     return this.index
//   }
//
//   next(){
//     this.index += 1;
//   }
//   prev(){
//     this.index -= 1;
//   }
//   first(){
//     this.index = 0;
//   }
//
//   addQuantity(){
//     this.quantity = this.quantity + 100;
//   }
//
// }





export default{City, Community};
