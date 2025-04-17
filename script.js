function changeText() {
    const paragraph = document.getElementById("dynamic-text");
    paragraph.textContent = "The content has been changed with JavaScript!";
  }
  
  function changeStyle() {
    const title = document.getElementById("main-title");
    title.style.color = "tomato";
    title.style.fontSize = "2.5rem";
    title.style.fontFamily = "Arial, sans-serif";
  }
  
  function toggleElement() {
    const container = document.getElementById("container");
    const existing = document.getElementById("new-element");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newDiv = document.createElement("div");
      newDiv.id = "new-element";
      newDiv.textContent = "I was added dynamically!";
      newDiv.style.backgroundColor = "#f0f0f0";
      newDiv.style.padding = "10px";
      newDiv.style.marginTop = "10px";
      container.appendChild(newDiv);
    }
  }
  