import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button
          className="ui primary button"
          style={{ marginTop: "10px", marginLeft: "10px" }}
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="ui primary button"
          style={{ marginTop: "10px", marginLeft: "10px" }}
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
