  import { useLocation } from "react-router-dom";

  type Item = {
    item: string;
    price: number;
    description: string;
  };

  export default function Invoice() {
    const location = useLocation();
    const { date, dueDate, items } = location.state || {
      date: "",
      dueDate: "",
      items: [],
    };

    const total = items.reduce((sum: number, it: Item) => sum + it.price, 0);

    return (
      <div className="container mx-auto w-200 border rounded-lg m-5 text-center h-full">
        <h1 className="text-3xl font-bold my-5">Invoice Page</h1>
        <p>Invoice Date: {date}</p>
        <p>Due Date: {dueDate}</p>

        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-orange-100">
              <th className="border p-2">Item</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it: Item, index: number) => (
              <tr key={index}>
                <td className="border p-2">{it.item}</td>
                <td className="border p-2">{it.price}</td>
                <td className="border p-2">{it.description}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-orange-200 font-bold">
              <td className="border p-2 text-right">Total:</td>
              <td className="border p-2">{total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
