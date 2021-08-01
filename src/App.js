import './App.css';
import Test from './Test';
import Header from './header/Header';
import Goods from './Goods';

const header_data = {
   site_app: 'Новая штука которую я забыл как называется))))',
   nav : [
      { "link": "nav1", "text": "my text1" },
      { "link": "nav2", "text": "my text2" },
      { "link": "nav3", "text": "my tex3" }
      
   ]
};

const goods = [
   { "title": "apple", "cost": 42, "image": "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80" },
   { "title": "груша", "cost": 24, "image": "https://images.unsplash.com/photo-1627715832017-d0b257228f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" },];
   

function App() {
   return (
      <>
         <Header data={header_data}/>
         <Test />
         {goods.map(item => <Goods key={item.title} title={item.title} cost={item.cost} image={ item.mage}/>) }
         
      </>
   );
}



export default App;
