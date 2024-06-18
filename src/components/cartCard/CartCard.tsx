import { useRef } from "react";

export default function CartCard(props) {
  const { id, titulo, foto, descripcion, precio, cantidad, color } = props;

  const units: any = useRef();

  const cambiosCantidad = () => {
    let productsOnCart = JSON.parse(
      localStorage.getItem("cart")!
    );
    const one = productsOnCart.find((each) => each.id === id);
    console.log("one: ", one);
    
    one.cantidad = Number(units.current.value);
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };

  return (
    <>
      <article className="bg-[#f2f2f2] rounded p-7 m-2 h-[220px] break-words flex justify-between w-[680px] items-center">
        <img
          className="w-[100px] h-[100px] rounded-md"
          src={foto}
          alt={titulo}
        />
        <div className="flex flex-col justify-between gap-[2px] w-[340px] h-[100px]">
          <strong>{titulo}</strong>
          <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            - {color}
          </span>
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {descripcion}
          </p>
          <input
            className="w-[70px] h-[40px] rounded-xl border border-solid border-[#eaeaea] p-1"
            type="number"
            name="quantity"
            defaultValue={cantidad}
            ref={units}
            min="1"
            id={id}
            onChange={cambiosCantidad}
          />
        </div>
        <strong>AR$ ${precio}</strong>
      </article>
    </>
  );
}
