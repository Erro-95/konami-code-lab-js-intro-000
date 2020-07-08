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
    var correctSeq = [];
    correctSeq.push(event.key)
    console.log(correctSeq)
    
    // for (let i in correctSeq){
    //   if (correctSeq[i] === codes[i]){
    //     continue;
    //   }
    //   else correctSeq = []
    // }
    //
    // if (correctSeq.length === codes.length){
    //   alert('Congratulations!!')
    // }
    },{
    capture: false
  })
}
