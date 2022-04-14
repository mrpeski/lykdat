import type { NextPage } from 'next';
import React, {useState} from 'react';
import Header from "../components/Header";
import Link from "next/link";
import {products} from "../db.json";


const Home: NextPage = () => {

  const [selectedItems, setSelectedItems] = useState(new Set<string>());

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    let elem = event.target as HTMLDivElement;

    if(elem.classList.contains("item")){
      let id: string | null = elem.getAttribute("data-id");
      if(id && selectedItems.has(id)){
        selectedItems.delete(id);
      } else {
        id && selectedItems.add(id)
      }
      // @ts-ignore
      return setSelectedItems(new Set([...selectedItems]))
    }
  }



  // @ts-ignore
  return <React.Fragment>
    <Header />
    <div onClick={handleClick}>
      <div className="cart">
        <Link href={{
          pathname: '/cart',
          query: {ids: Array.from(selectedItems).join(',')}
        }}>
          {`Cart (${Array.from(selectedItems).length})`}
        </Link>
      </div>
      <div className="products">
        {products.map(
            item => <div data-id={item.id} key={item.id} className={selectedItems.has(item.id) ? "item selected" : "item"}>
              {item.name}
            </div>)}
      </div>

    </div>
  </React.Fragment>

}

export default Home
