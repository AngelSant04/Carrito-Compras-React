import { useSelector } from "react-redux";

export default function CardResume() {

  const total = useSelector((store) => store.products.total);

  console.log(total);
  

  return (
    <>
      <div className="bg-[#f2f2f2] rounded p-7 m-2 h-[220px] break-words flex justify-between w-[340px] flex-col">
        <div className="grow flex flex-col justify-between">
          <h2 className="flex justify-between">
            <span>Resumen</span>
            <span>del</span>
            <span>pedido</span>
          </h2>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <strong>${total}</strong>
          </div>
          <small className="pb-3">
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button
          className="w-[100%] bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-xl hover:bg-[#ff5151]"
          id="buy"
          type="button"
        >
          COMPRAR
        </button>
      </div>
    </>
  );
}
