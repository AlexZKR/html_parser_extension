

const category_element = document.getElementById("name-value");
const text = category_element.textContent;
console.log(text);

(async () => {
    const response = await chrome.runtime.sendMessage({name: text});
    // do something with response here, not outside the function
    console.log(response);
  })();
// const text = category_element.innerText;