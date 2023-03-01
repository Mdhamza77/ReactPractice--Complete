import React from "react";

const ListShow = ({ list }) => {
  return (
    <div>
      { list.length >0 ?  list.map((item) => (
        <div>
            <p>{item}</p>
        </div>
      )) 
    : <p>No Data Found</p>}
    </div>
  );
};

export default ListShow;
