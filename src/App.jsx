import React from "react";
import ScrollIndicator from "./scroll-indicator";

function App() {
  return (
    <div>
      {/* Scroll indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
