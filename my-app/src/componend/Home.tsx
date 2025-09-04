import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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

  const goToInvoice = () => {
    navigate("/invoice", { state: { items, date, dueDate } });
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
            {/* <Link
              to="/invoice"
              state={{ date, dueDate, items }}
              className="bg-orange-500 my-2 p-2 border rounded cursor-pointer mx-auto flex"
            >
              ไปหน้า Invoice
            </Link> */}
            <button
              className="bg-orange-500 my-2 p-2 border rounded cursor-pointer mx-auto flex"
              onClick={goToInvoice}
            >
              ไปหน้า Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
