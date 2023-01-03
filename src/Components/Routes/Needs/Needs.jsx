import React from "react";

import imgFounder from "../../../images/Needs/founder.jpg";
export default function Needs() {
  return (
    <main className="w-full  flex flex-col  items-center  pt-[10vw] max-[768px]:pt-[20vw] max-[1024px]:pt-[15vw]  text-white    bg-[#1b1d33] ">
      <section className=" w-full items-center  justify-around flex flex-row max-[768px]:flex-col ">
        <article className="flex flex-col items-center ">
          <h2 className="text-2xl max-[1024px]:text-sm">Founder of the fund</h2>
          <h1 className="text-5xl max-[1024px]:text-lg py-5 max-[1024px]:py-1">
            Yevgeniy Ustenko
          </h1>
        </article>

        <img
          className=" w-[35vw] max-[768px]:w-[50vw] h-full rounded-2xl hover:scale-110 duration-1000"
          src={imgFounder}
          alt="founder"
        />
      </section>

      <article className="w-full flex flex-col px-16 py-20 max-[768px]:px-6 max-[768px]:py-10 items-center max-[768px]:text-xs">
        <h2 className="text-xl font-semibold mb-3 max-[768px]:my-b">
          Our Needs
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad assumenda
          dolor maxime hic id eum quisquam nisi corporis quo labore distinctio
          optio amet, vitae consequuntur aperiam quae at laborum voluptate!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolore harum sit iusto, facere consectetur molestias incidunt
          voluptatem nam magni odit ullam nemo atque. Distinctio laborum et
          doloremque a recusandae mollitia culpa facilis deleniti facere nisi!
          Non, voluptas tempora praesentium unde quae maxime sequi nobis vero id
          obcaecati aperiam voluptate excepturi dolor delectus, similique aut
          sint dolorem modi expedita amet labore provident earum? Nostrum
          ratione et rerum id deserunt vel non! Et sit id fugiat, labore impedit
          ullam corrupti nam sint. Ducimus illum beatae laudantium quas modi
          possimus, obcaecati fuga id commodi voluptatem. Similique iste
          sapiente eligendi vitae labore incidunt iusto! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quia explicabo culpa ea vero
          laudantium qui sit quibusdam a quae, autem harum dolores aliquid quod
          veritatis placeat cupiditate dolorem reiciendis dolore. Ducimus,
          voluptatem quisquam facere sit ab vel maxime! Consectetur, eum. Optio,
          eius minima. Aspernatur commodi consequatur assumenda velit rem
          doloribus vel culpa autem nostrum. Vel, facere minus molestias earum
          illo recusandae voluptatem harum saepe expedita commodi veritatis,
          alias possimus accusamus, autem corrupti. Vitae magni ratione nemo
          ullam, quas facilis. Reprehenderit fuga incidunt atque impedit
        </p>
      </article>
    </main>
  );
}
