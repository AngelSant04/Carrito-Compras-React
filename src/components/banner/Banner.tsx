// import styles from "./Banner.module.css";

export default function Banner(props) {
  return (
    <>
      <section className="h-[200px] bg-banner-img bg-cover bg-top flex justify-center">
        <article className="w-[1080px] flex flex-col items-start justify-center py-0 px-5">
          <span className="text-white font-bold text-[20px]">{props.first}</span>
          <span className="text-white font-bold text-[50px] leading-9">{props.second}</span>
        </article>
      </section>
    </>
  );
}
