import { InfoScreen } from "./components/InfoScreen";
import { MainScreen } from "./components/MainScreen";
import { ProductScreen } from "./components/ProductScreen";
import './App.scss';

const  App = () => {
 return (
    <div className="wrapper">
        <MainScreen />
        <InfoScreen />
        <ProductScreen />
    </div>
 )
}

export default App;
