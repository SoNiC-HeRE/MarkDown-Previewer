import { useState } from "react";
import { marked } from "marked";

function App() {
  const [text,setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`This is my code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })
  return (
    <div className="App container">
    <h1 id="first">TypeHere</h1>
    <textarea id="editor" onChange={(event)=>{
      setText(event.target.value);
    }} value={text}></textarea>
    <h1 id="second">Preview: </h1>
    <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
    </div>
  );
}

export default App;
