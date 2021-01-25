// Add your javascript here
class Stack {
  constructor(maxItems = Infinity) {
    this.items = [];
    this.maxItems = maxItems;
  }

  pop() {
    // Underflow if stack is empty
    if (this.empty())
        return "Underflow";
    return this.items.pop();
  }

  push(item) {
    if (this.items.length === this.maxItems) {
      throw new Error("Stack was already full!");
    }
    this.items.push(item);
  }

  empty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.empty()) {
      throw new Error("Operation not allowed!");
    }
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack(5);
const empty = document.querySelector(".empty-btn");
const push = document.querySelector(".push-btn");
const peek = document.querySelector(".peek-btn");

push.addEventListener("click", (event) => {
  const input = document.querySelector("#inputElem");
  const value = input.value;
  if (!value) {
    return alert("Please enter a value!");
  }

  try {
    stack.push(value);
    const index = stack.items.findIndex((item) => item === value);

    if (index > -1) {
      const id = index + 1;
      const stackItem = document.getElementById(`${id}`);
      stackItem.textContent = value;
      stackItem.setAttribute("innerText", value);
    }
    input.value = "";
  } catch(e) {
    alert(e.message);
  }
});

empty.addEventListener("click", (event) => {
  alert(stack.empty() ? "Yes, Stack is empty" : "No, Stack is not empty");
});

peek.addEventListener("click", (event) => {
  try {
    alert(`Top Value is: ${stack.peek()}`);
  } catch(e) {
    alert(e.message);
  }
});