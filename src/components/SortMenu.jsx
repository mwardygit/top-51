import React from 'react'


// PURPOSE:
// Creates the SORT menu in title bar
// Receives: props.onSort call-back function
//           props.sortOptions array

const SortMenu = (props) => {

return (
    <div>
        <form>
            <select id="drop-down-2" onChange={(e) => props.onSort(e.target.value)}>
            {props.sortOptions.map((mySort) => 
            <option value={mySort} key={mySort}>{mySort}</option>)}
            </select>
        </form>
    </div>
)  
}

export default SortMenu
