export class User{
  name: string;
  age: number;
  email: string | null;
  address: { city: string; zip: string};
  cars: string[];

  constructor(name: string, age: number, email: string | null, address: { city: string, zip: string }, cars: string[]){
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
    this.cars = cars;
  }
}
export const HARDCODED_USERS: User[] = [
  new User("Todd Todders", 25, "toddTodders@email.com", 
    { city: "Milford", zip: "45150"}, 
    ["Toyota", "Ford"
  ]),
  new User("Jeff Jeffers", 42, "Jeffy@email.com", 
    { city: "Dayton", zip: "23183"}, 
    ["GolfCart", "4 Wheeler", "Big Truck", "Uni Cycle"
  ]),
  new User("Milly Millers", 9, "Hello@email.com", 
    { city: "Boston", zip: "29834"}, 
    ["Barbie Car", "Bicycle"
  ]),
  new User("Peter Petty", 72, null, 
    { city: "Milford", zip: "45150"}, 
    ["Hummer"
  ]),
]