const Size = 11;
const Duration = 10000

const container = document.getElementById("container")
const dots = []


const init = () => {
  container.style.width = Size * 60 + "px"
}


for (let i = 0; i < Size; i++) {
  dots.push([])
  for (let j = 0; j < Size; j++) {
    const dotContainer = document.createElement("div")
    dotContainer.classList.add("dot-container")
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dots[i].push(dot)
    dotContainer.append(dot)
    container.append(dotContainer)
  }
}



const light = async () => {
  let time = 0
  let spacing = Duration / (dots.length * dots[0].length);
  for (const dotLine of dots) {
    shuffle(dotLine)
    for (const dot of dotLine) {
      spacing = Math.max(10, spacing - 1);
      time += spacing
      console.log(spacing)
      setTimeout(() => {
        dot.style.animation = "disco " + (Duration / 1000 + 5) + "s ease infinite"
      }, time);

    }
  }

}

const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}


init()
light()