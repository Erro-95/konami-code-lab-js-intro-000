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
var correctSeq = [];

function init() {
  document.body.addEventListener('keydown', event => {
    correctSeq.push(event.key)
    console.log(correctSeq)

    for (let i in correctSeq){
      if (correctSeq[i] === codes[i]){
        continue;
      }
      else correctSeq = []
    }

    if (correctSeq.length === codes.length){
      alert('Congratulations!!')
    }
    },{
    capture: false
  })
}
