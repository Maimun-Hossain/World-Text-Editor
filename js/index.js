// bold
document.getElementById("bold-btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.fontWeight === "bold") {
    outputElement.style.fontWeight = "normal";
  } else {
    outputElement.style.fontWeight = "bold";
  }
  outputElement.innerText = input.value;
});
// italic
document.getElementById("italic-btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.fontStyle === "italic") {
    outputElement.style.fontStyle = "normal";
  } else {
    outputElement.style.fontStyle = "italic";
  }
  outputElement.innerText = input.value;
});
// underline
document.getElementById("under-btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.textDecoration === "underline") {
    outputElement.style.textDecoration = "none";
  } else {
    outputElement.style.textDecoration = "underline";
  }
  outputElement.innerText = input.value;
});
// align start
document.getElementById("align-start").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.textAlign === "start") {
    outputElement.style.textAlign = "none";
  } else {
    outputElement.style.textAlign = "start";
  }
  outputElement.innerText = input.value;
});
// align center
document.getElementById("align-center").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.textAlign === "center") {
    outputElement.style.textAlign = "none";
  } else {
    outputElement.style.textAlign = "center";
  }
  outputElement.innerText = input.value;
});
// align end
document.getElementById("align-end").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.textAlign === "end") {
    outputElement.style.textAlign = "none";
  } else {
    outputElement.style.textAlign = "end";
  }
  outputElement.innerText = input.value;
});
// text size
document.getElementById("size-input").addEventListener("click", function () {
  const textSize = document.getElementById("size-input");
  const textSizeValue = textSize.value;
  const textSizeNum = parseFloat(textSizeValue);
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  outputElement.style.fontSize = textSizeNum + 'px';
  outputElement.innerText = input.value;
});
// text uppercase
document.getElementById("upercase-btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");
  
  if (outputElement.style.textTransform === "uppercase") {
    outputElement.style.textTransform = "lowercase";
  } else {
    outputElement.style.textTransform = "uppercase";
  }
  outputElement.innerText = input.value;
});
// text color
document.getElementById("text-color").addEventListener("input", function () {
  const textColor = document.getElementById("text-color");
  const textColorValue = textColor.value;
  console.log(textColorValue)
  const input = document.getElementById("input");
  const outputElement = document.getElementById("input");

   outputElement.style.color = textColorValue;
  outputElement.innerText = input.value;
});
