import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      hi {state} this is a sample pwa
    </div>
  );
}

export default React.memo(App);
