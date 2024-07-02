import './App.css';
import Header from './assets/components/Header/Header';
import Cards from './assets/components/Cards/Cards';
import Sidebar from './assets/components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [lists, setLists] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCost, setTotalCost] = useState(0);
  const handleAddToList = card => {
    const isExist = lists.find(item => item.id == card.id);
    let count = card.time;
    if (isExist) {
      return alert('Already Booked');
    } else {
      lists.forEach(item => {
        count = count + item.time;
      });
      const totalRemaining = 20 - count;
      console.log(totalRemaining);
      const newLists = [...lists, card];

      if (totalCost >= 20) {
        return alert('You have finished all the credits. You have 0 credits.');
      } else {
        if (totalRemaining < 0) {
          return alert('You have crossed "Credit Hour Remaining"');
        }
        setRemaining(totalRemaining);
        setTotalCost(count);
        setLists(newLists);
      }
    }
  };
  return (
    <>
      <div className=" bg-slate-300">
        <div className="container mx-auto">
          <Header></Header>
          <div className="flex justify-between flex-col sm:flex-col md:flex-col lg:flex-row gap-5 pb-10">
            <Cards handleAddToList={handleAddToList}></Cards>
            <Sidebar
              lists={lists}
              remaining={remaining}
              totalCost={totalCost}
            ></Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
