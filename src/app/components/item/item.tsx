import { Item } from "@/app/type/item";
import styles from "./item.module.css";

export default function ItemComponent(item: Item) {
  return (
    <div
      className={styles.item}
      style={{
        left: item.position.x,
        top: item.position.y,
        width: item.size.x,
        height: item.size.y,
      }}
    >
      {item.active && <textarea></textarea>}
    </div>
  );
}
