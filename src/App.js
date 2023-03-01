
import "./App.css";
import Index from "./components/Jsx";
import PIndex from "./components/comp-props";
import SIndex from "./components/state-lifeCycle";
import EIndex from "./components/eventHandler";
import CRIndex from "./components/conditonal-rendering";
import FIndex from "./components/foms";
import HookContext from "./components/Hooks/HookContext";
import ConsumerContext from "./components/Hooks/ConsumerContext";
import ForwardRef from "./components/Refs-ForwardRef/ForwardRef";
import { createRef } from "react";
import InputRef from "./components/Refs-ForwardRef/InputRef";
import { NewComponent } from "./components/HOC/NameHoc";
import CustomRef from "./components/Refs-ForwardRef/CustomRef";
import File from "./components/uncontrolledComp/File";
import { MouseTracker } from "./components/render-props/Mousepointer";
import Counter from "./components/Lsp/Counter";
import User from "./components/Hooks/User";
import Themes from "./components/Hooks/Themes";
import { VideoRef } from "./components/Refs-ForwardRef/VideoPlayer";
import MyApp from "./components/Hooks/PanelContext";



function App() {
  const ref = createRef() 
  return (
    <div className="App">
      <Index />
      <PIndex />
      <SIndex/>
      <EIndex/>
      <CRIndex/>
      <FIndex/>
      <hr/>
      <HookContext/>
      <ConsumerContext/>
      <hr/>
      <ForwardRef ref={ref}>Click Me</ForwardRef>
      <br/>
      <InputRef/>
      <CustomRef/>
      <VideoRef/>
      <NewComponent/>
      <File /> 
      <br/>
      <MouseTracker />
      <br/> <br/>
      <Counter />
      <br/>
      <User/>
      <Themes/>
      <MyApp/>
    </div>
  );
}

export default App;
