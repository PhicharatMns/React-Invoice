import { useState } from "react";

// กําหนด type
type Item = {
  item: string;
  price: number;
  description: string;
};

export default function Home() {
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<Item[]>([]); // เก็บรายการสินค้า
  
  const handleSubmit = () => {
    const newItem: Item = {
      item,
      price: Number(price),
      description,
    };

    setItems([...items, newItem]);
    setItem("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="container mx-auto w-200 border rounded-lg m-5 text-center h-full">
      <p className="text-orange-800 text-6xl my-5 font-bold">INVOECE</p>
      <div className="border-1 border-orange-500"></div>
      <div className="p-2">
        <div className="grid grid-cols-2 gap-5  mx-auto">
          <div className="my-2 text-left">
            <p className="text-lg font-bold">INVOECE Date</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 my-2 rounded w-full"
            />
          </div>
          <div className="my-2 text-left">
            <p className="text-lg font-bold">Due Date</p>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border p-2 my-2 rounded  w-full"
            />
          </div>
        </div>
        <div className=" text-left mx-auto">
          <p>Item & Description </p>
          <input
            type="text"
            value={item}
            onChange={(event) => setItem(event.target.value)}
            className="border w-full p-2 my-2 rounded"
          />
          <p>price</p>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="text"
            className="border w-full p-2 my-2 rounded"
          />
          <p>description</p>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="border w-full p-2 my-2 rounded"
          />
          <div>
            {" "}
            <button
              onClick={handleSubmit}
              className="border p-2 bg-orange-500 my-2 rounded cursor-pointer mx-auto flex"
            >
              ยืนยัน
            </button>
          </div>
        </div>
        {/* <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-orange-100">
              <th className="border p-2">Item</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, index) => {
              total += it.price;
              return (
                <tr key={index}>
                  <td className="border p-2">{it.item}</td>
                  <td className="border p-2">{it.price}</td>
                  <td className="border p-2">{it.description}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-orange-200 font-bold">
              <td className="border p-2 text-right" colSpan={1}>
                Total:
              </td>
              <td className="border p-2">{total}</td>
              <td className="border p-2"></td>
            </tr>
          </tfoot>
        </table> */}
      </div>
    </div>
  );
}
