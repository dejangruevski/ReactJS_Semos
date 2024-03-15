// Ke kreirate 4 useri so atributi {ime,prezime,adresa,godini} vo App.jsx fajlot definirani kako varijabli
// koristejki props vo 2 posebni fajla ke gi prefrlite userite vo edniot fajl (Age.jsx) ke gi prikazete userite koi se postari od 18 god 
// za ostanatite ke prikazete paragraf "Less then 18", vo drugiot fajl  (Address.jsx) ke gi prikazete userite koi imaat adresa Skopje.
// **Atributite na userite gi zadavate vie

import React from 'react';
import { Age } from './components/Age';
import { Address } from './components/Address';

export function App() {
  const users = [
    { firstName: 'Dejan', lastName: 'Gruevski', address: 'Bitola', age: 31 },
    { firstName: 'Trajko', lastName: 'Trajkovski', address: 'Skopje', age: 16 },
    { firstName: 'Ana', lastName: 'Petrovska', address: 'Ohrid', age: 24 },
    { firstName: 'Sanja', lastName: 'Ivanovska', address: 'Krusevo', age: 15 }
  ];

  return (
    <div>
      <Age users={users} />
      <Address users={users} />
    </div>
  );
}