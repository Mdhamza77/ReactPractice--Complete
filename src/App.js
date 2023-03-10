
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
import Reducer from "./components/Hooks/Reducer";
import AgeReducer from "./components/Hooks/AgeReducer";
import { PositionTracker } from "./components/render-props/TaskRender";
import EditableItem from "./components/Hooks/EditableItem";
import EditableRender from "./components/render-props/EditableRender";
import CountryLsp from "./components/Lsp/CountryLsp";
import LoginForm from "./components/foms/LoginForm";
import InputChange from "./components/Lsp/InputChange";
import { Names } from "./components/render-props/NameRender";
import AudioPlayer from "./components/Refs-ForwardRef/AudioPlayer";
import MultimediaContext from "./components/Hooks/MultimediaContext";




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
      <br/>
      <HookContext/>
      <ConsumerContext/>
      <br/>
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
      <br/>
      <MyApp/>
      <br/>
      <Reducer/>
      <AgeReducer/>
      <PositionTracker/>
      <EditableItem/> 
      <EditableRender/>
      <CountryLsp/> 
      <LoginForm/>
      <InputChange/>
      <Names/>
      <AudioPlayer/>
      <MultimediaContext/>
      
    </div>
  );
}

export default App;
