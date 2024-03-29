let hotel = [
  [
    {
      room: 1,
      price: 300,
      brand: "Luxe",
      children: false,
    },
    {
      room: 2,
      price: 4000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 3,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 4,
      price: 900,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 5,
      price: 700,
      brand: "Luxe",
      children: true,
    },
    {
      room: 6,
      price: 79000,
      brand: "President",
      children: true,
    },
    {
      room: 7,
      price: 600,
      brand: "Luxe",
      children: false,
    },
    {
      room: 8,
      price: 950,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 9,
      price: 1900,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 10,
      price: 5000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 11,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 12,
      price: 250,
      brand: "Luxe",
      children: false,
    },
  ],
  [
    {
      room: 13,
      price: 10000,
      brand: "President",
      children: true,
    },
    {
      room: 11,
      price: 8000,
      brand: "President",
      children: false,
    },
  ],
];



let rooms = {
  all_roms: [],
  rooms: 0,
};

let brands = {
  president: [],
  deluxe: [],
  luxe: [],
};

let expensive_level = {
  perviy: 0,
  vtoroy: 0,
  tretiy: 0,
  chetvertiy: 0,
};

let room_level = {
  perviy: 0,
  vtoroy: 0,
  tretiy: 0,
  chetvertiy: 0,
};

let children = {
  rooms: 0,
}



//1 отфильтровать по категориям
for (const item of hotel) {
  for (const element of item) {
    if(element.brand === "President") {
      brands.president.push(element)
    } else if(element.brand === "Deluxe") {
      brands.deluxe.push(element)
    } else if(element.brand === "Luxe") {
      brands.luxe.push(element)
    }
  }
  item.eting = true
}
console.log(brands);
// console.log(hotel);

//2 добавить ключ eting с буленовым значением в каждый номер


//3 посчитать и красиво раставить все команты переменную rooms
for(let item of hotel) {
  for(let element of item) {
    rooms.all_roms.push(element.room)
    rooms.rooms++
  }
}
console.log(rooms);

//4 найти самую дорогую комнату
for(let item of hotel) {
  for(let element of item) {
    if(element.price > expensive_level.perviy) {
      expensive_level.perviy = element.price
    } else if(element.price > expensive_level.vtoroy) {
      expensive_level.vtoroy = element.price
    } else if(element.price > expensive_level.tretiy) {
      expensive_level.tretiy = element.price
    } else if(element.price > expensive_level.chetvertiy) {
      expensive_level.chetvertiy = element.price
    }
  }
}
console.log(expensive_level);

//5 посчитать сколько стоит каждый этаж


//6 посчитать сколько стоят все комнаты вместе взятые


//7 найти все комнаты в которых живут дети
for(let item of hotel) {
  for(let element of item) {
    if(element.children === true) {
      children.rooms++
    }
  }
}
console.log(children);