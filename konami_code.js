const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', event => {
    var keys = [];
    //keys.push(event)

    for (let i = keys.length - 1; i < codes.length;){
      if (i === -1 && event === codes[0]){
        console.log('1')
        keys.push(event)
      }
      else if (i >= 0 && event === codes[i + 1]){
        console.log('2')
        keys.push(event)
      }
      else {
        console.log('3')
        keys = []
      }
console.log('4')
      if (keys.length === codes.length){
        console.log(keys)
      }
    }
  },{
    capture: false
  })
}
