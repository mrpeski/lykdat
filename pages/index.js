import React, {useState} from "react";
import {products} from "../mockAPI/db.json";
import Link from "next/link"
import Header from "../components/Header";

export default function Home(props) {

  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleClick = (e) => {
    let elem = e.target;
    if(elem.classList.contains("item")){
      let id = elem.getAttribute("data-id");
      if(selectedItems.has(id)){
        selectedItems.delete(id);
      } else {
        selectedItems.add(id)
      }
      return setSelectedItems(new Set([...selectedItems]))
    }
  }

  return <React.Fragment>
    <Header />
    <div onClick={handleClick}>
      <Link href={{
        pathname: '/cart',
        query: { ids: [...selectedItems].join(',') },
      }}> Cart </Link>
      {products.map(
          item => <div data-id={item.id} key={item.id} className={"item"}>
            {item.name}
          </div>)}
    </div>
  </React.Fragment>

}

