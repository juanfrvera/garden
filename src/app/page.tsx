"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Coordinate, Item } from "./type/item";
import ItemComponent from "./components/item/item";

export default function Home() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  const addClicked = () => {};
  const doubleClickOnBlackBoard = (evt: React.MouseEvent) => {
    console.log(evt);
    const size = { ...itemDefaultSize };
    const position = {
      x: evt.clientX - size.x / 2,
      y: evt.clientY - size.y,
    };
    const item: Item = { position, size, active: true };

    if (activeItem) {
      activeItem.active = false;
    }
    setActiveItem(item);

    setItems([...items, item]);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          className={styles.blackBoard}
          onDoubleClick={doubleClickOnBlackBoard}
        >
          <div className={styles.header}>
            <button onClick={addClicked}>Add</button>
          </div>
          {items.map((item, index) => (
            <ItemComponent key={index} {...item}></ItemComponent>
          ))}
        </div>
      </main>
    </div>
  );
}

const itemDefaultSize: Coordinate = { x: 50, y: 50 };
