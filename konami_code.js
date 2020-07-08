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

    for (let i = keys.length - 1; i < codes.length){
      if (i === -1 && event === codes[0]){
        keys.push(event)
      }
      else if (i >= 0 && event === codes[i + 1]){
        keys.push(event)
      }
      return keys = []
      
    }
  },{
    capture: false
  })
}
