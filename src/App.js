import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client'

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const socket = new io("https://xoro.celtic67.cloud")
    console.log(socket)
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default React.memo(App);
