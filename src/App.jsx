import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import Footer from './component/Footer';

const App = () => {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  const handleSearch = () => {
    const filteredData = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setItems(filteredData);
  };

  return (
    <div>
      <h1 className='text-center text-2xl font-bold py-5 border-b-4 border-gray-700'>TheGoodGameTheory Assignment</h1>

      <div className="input-group flex justify-center mt-5">
        <input className='input input-bordered border-amber-200 border-2' placeholder="Search…" onChange={(event) => setSearch(event.target.value)} type="text" name="" id=" " />
        <button onClick={handleSearch} className="btn btn-square bg-amber-400 border-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container lg:p-28 p-5 gap-5'>
        {
          items.map((item) => <Card
            item={item}
            key={item.id}
          ></Card>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;