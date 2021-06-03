import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const categories = [
    {
        name: "Commercial",
        description: 
        "Photos of grovery stores, food trucks, and other commercial projects",
    },
    { 
        name: "Portraits",
        description: "Portraits of people in my life",
    },
    {
        name: "Food",
        description: "Delicious delicacies",
    },
    {
        name: "Landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
];

const [currencyCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currencyCategory={currencyCategory}
        ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
