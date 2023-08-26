// var pants = 0;
// var socks = 100;
// `바지${pants} 양말${socks}`;

// function 해체분석기(문자들, 변수, 변수1){
// if(pants == 0){
//     console.log(문자들[0]+"다팔렸어요"+" "+문자들[1]+변수1)
// }
// }

// 해체분석기`바지${pants} 양말${socks}`

//----------------------------------------------------------
// var product1 = { name : 'shirts', price : 50000 };
// var product2 = { name : 'pants', price : 60000 };

// function Products(상품명, 가격){
//     this.name = 상품명;
//     this.price = 가격;
//     this.부가세 = function(){
//         console.log(this.price * 0.1)
//     }
// };

// var product1 = new Products('shirts', 50000);
// var product2 = new Products('pants', 60000);

// console.log(product1, product2);
// console.log(product1.부가세());

//----------------------------------------------------

// var 학생1 = { name : 'Kim', age : 20 }
// var 학생2 = { name : 'Park', age : 21 }
// var 학생3 = { name : 'Lee', age : 22 }

// function 기계(이름, 나이){
//     this.name = 이름
//     this.age = 나이
//     this.sayHi = function(){
//         console.log(`안녕 나는 ${this.name}이야`)
//     }
// }

// var 학생1 = new 기계('Kim', 20)
// var 학생2 = new 기계('Park', 21)
// var 학생3 = new 기계('Lee', 23)


// 학생1.sayHi()

//-------------------------------------------------

// var 강아지1 = { type : '말티즈', color : 'white' };
// var 강아지2 = { type : '진돗개', color : 'brown' }; 

// class 강아지 {
//     constructor(name, 색){
//         this.type = name
//         this.color = 색
//     }
//     한살먹기(){
//         console.log('error')
//     }
// }

// var 강아지1 = new 강아지('말티즈', 'white')
// var 강아지2 = new 강아지('진돗개', 'brown')

// 강아지1.한살먹기()

// class 고양이{
//     constructor(이름, 색, 나이){
//         this.type = 이름
//         this.color = 색
//         this.age = 나이
//     }
//     한살먹기(){
//         console.log(this.age + 1)
//     }
// }

// var 고양이1 = new 고양이('코숏', 'white', 5)
// var 고양이2 = new 고양이('러시안블루', 'brown', 2)

// 고양이1.한살먹기()


// class Unit{
//     constructor(){
//         this.attack = 5
//         this.energy = 100
//     }
//     get battlePoint(){
//         return this.attack + this.energy
//     }
//     set heal(증가량){
//         this.energy = this.energy + 증가량;
//     }
// }

// var instance = new Unit()
// console.log(instance.battlePoint)
// instance.heal = 50
// console.log(instance)



console.log(String(11)+String(10))
