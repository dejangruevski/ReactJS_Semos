// Opcija 2
// Да се креира Апликација во која ќе има 2 компоненти （App.js & Training.js)
// Во App фајлот ќе се содржи следнава листа на податоци:
// listOfThings:
//       [
//         {id:1,name:"Pero",lastName:"Perovski",year:1996},
//         {id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
//         {id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
//       ];
// Во Training фајлот ќе се прави приказ на податоците во една табела.
// *Како функционалности ќе содржи додавање на нов објект во низата.
// *Бришење на елемент од низата.

import React, { useState } from 'react';
import { Training } from './components/Training';

export function App() {
  const [listOfThings, setListOfThings] = useState([
    { id: 1, name: "Pero", lastName: "Perovski", year: 1996 },
    { id: 2, name: "Ivan", lastName: "Ivanovski", year: 1997 },
    { id: 3, name: "Stefan", lastName: "Stefanovski", year: 1998 }
  ]);

  const addItem = (item) => {
    setListOfThings([...listOfThings, item]);
  };

  const deleteItem = (id) => {
    setListOfThings(listOfThings.filter(item => item.id !== id));
  };

  const editItem = (id, updatedItem) => {
    setListOfThings(listOfThings.map(item => (item.id === id ? updatedItem : item)));
  };

  return (
    <div id="App">
      <Training
        listOfThings={listOfThings}
        addItem={addItem}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}


