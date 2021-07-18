const kanako = {
    name: "かなこ",
    age: 21,
    university: "聖心女子大学",
    sayHello: function () {
      alert("こんにちはかなこです")
    },
    hobby:["漫画","邦楽ロック","弓道"],
    family:{
      papa:"ゆたか",
      mama:"みき"
    }, 
    isMentor:true,
  }
  
  
console.log(kanako.name)
console.log(kanako.age)
console.log(kanako.university)
for (let n = 0; n< kanako.hobby.length; n++){
    console.log(kanako.hobby[n])
}
//++で一こずつ増やす

console.log(kanako.family.papa)