import React from 'react';
import Search from './functions/Search'
import Sort from './functions/Sort';
import AddTask from './functions/AddTask';

function Test() {
  return (
      
    <div className="header row m-4">
        {/* <!-- search-box --> */}
        <Search/>
        {/* <!-- sort --> */}
        <Sort/>
        {/* <!-- add task --> */}
        <AddTask/>
      </div>
  );
}

export default Test;
