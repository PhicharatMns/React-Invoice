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


  

  const subTotal = items.reduce((sum: number, it: Item) => sum + it.price, 0);
  const discountRate = 0.05;
  const taxRate = 0.1; 

  const discount = subTotal * discountRate;
  const tax = (subTotal - discount) * taxRate;
  const grandTotal = subTotal - discount + tax;

  return (
    <div className="container mx-auto w-200 border rounded-lg m-5 text-center h-fit border-gray-400">
      <div>
        <p className="mt-3 text-4xl text-white bg-orange-500 w-fit mx-auto p-2 rounded-4xl">
          Z
        </p>
        <p className="font-black text-xl mt-2">พิชรัตน์ มีสรรพวงศ์ Services</p>
        <p className="text-gray-500">ID : 67134327</p>
        <div>
          <div className="border-b my-5 border-orange-500 border-1"></div>
          <p className="text-xl underline text-orange-500 font-medium">
            {" "}
            Bill TO
          </p>
          <p className="font-bold">เบียร์ บางประกกง</p>
          <p className="text-gray-500">87/68 บาาเมือง สมุทรปราการ 10270</p>
          <div className="border-b my-5 border-orange-500 border-1"></div>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <p>invoice#</p>
              <p className="font-medium">INV-000006</p>
            </div>
            <div>
              <p>invoice Date</p>
              <p className="font-medium">{date}</p>
            </div>
            <div>
              <p>Due Date</p>
              <p className="font-medium">{dueDate}</p>
            </div>
          </div>
          <div className="flex justify-between w-180 mx-auto my-5 text-orange-500">
            <div className="gap-5 flex">
              <p>#</p>
              <p>Item & Desctiption</p>
            </div>
            <p>Amount</p>
          </div>

          {items.map((event: Item, index: number) => {
            return (
              <div
                key={index}
                className="flex justify-between w-180 mx-auto my-5"
              >
                <div className="gap-5 flex">
                  <p>{index + 1}</p>
                  <div>
                    <p className="font-bold">{event.item}</p>
                    <p className="text-gray-500 text-sm">{event.description}</p>
                  </div>
                </div>
                <p>{event.price.toString()} ฿</p>
              </div>
            );
          })}
          <div className="pr-10 leading-8 text-left w-70 ml-auto">
            <div className="flex justify-between">
              <p> sub Total</p>
              <p>{subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount 5.00%</p>
              <p>{discount}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax Rate 10%</p>
              <p>{tax}</p>
            </div>
            <div className="flex justify-between font-medium">
              <p>total</p>
              <p>{grandTotal}</p>
            </div>
            <div className="border-b border-2 border-orange-500 my-2"></div>
            <div className="flex justify-between text-red-500 font-medium">
              <p>total</p>
              <p>{grandTotal}</p>
            </div>
            <div className="border-b border-2 border-orange-500 my-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
