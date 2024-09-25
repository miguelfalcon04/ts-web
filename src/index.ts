// src/index.ts
function greet(name: string): void {
    const greeting = `Hello, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
      element.innerText = greeting;
    }
  }
  
  greet("lUIS");