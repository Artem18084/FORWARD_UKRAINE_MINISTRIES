import React from "react";

export default function ImpactItem(props) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex items-center justify-center bg-[#ff9731] rounded-[50%] w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] xl:w-[4.5rem] xl:h-[4.5rem]">
        <img
          src={props.img}
          alt="blue_van"
          className=" w-[.8rem] h-[.8rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.5rem] md:h-[1.5rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]"
        />
      </span>
      <div className="flex flex-col items-center">
        <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">
          {props.subTitle}{" "}
        </span>{" "}
        <span className="text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          {props.title}
        </span>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function ImpactItem(props) {
//   const [peopleReached, setPeopleReached] = useState(1500);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPeopleReached(prevValue => prevValue + 1);
//     }, 60480000); // Кожний тиждень (в мілісекундах)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       <span className="flex items-center justify-center bg-[#ff9731] rounded-[50%] w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] xl:w-[4.5rem] xl:h-[4.5rem]">
//         <img
//           src={props.img}
//           alt="blue_van"
//           className=" w-[.8rem] h-[.8rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.5rem] md:h-[1.5rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]"
//         />
//       </span>
//       <div className="flex flex-col items-center">
//         <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">
//           {peopleReached}+
//         </span>{" "}
//         <span className="text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
//           {props.title}
//         </span>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";

// export default function ImpactItem(props) {
//   const [peopleReached, setPeopleReached] = useState(3000);
//   const [humanitarianTrip, setHumanitarianTrip] = useState(120)

//   useEffect(() => {
//     // Перевіряємо, чи це третій компонент
//     if (props.title === "People reached") {
//       const interval = setInterval(() => {
//         setPeopleReached(prevValue => prevValue + 1);
//       }, 604800000); // Кожний тиждень (в мілісекундах)

//       return () => clearInterval(interval);
//     } else if( title.props === "Humanitarian trip") {
//       const interval =setInterval(()=> {
//         setHumanitarianTrip(prevValue => prevValue + 25);
//       },604800000 ) // Кожний тиждень (в мілісекундах)
//     }
//   }, [props.title]); // Викликаємо ефект, коли змінюється props.title

//   return (
//     <div className="flex flex-col items-center">
//       <span className="flex items-center justify-center bg-[#ff9731] rounded-[50%] w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] xl:w-[4.5rem] xl:h-[4.5rem]">
//         <img
//           src={props.img}
//           alt="blue_van"
//           className=" w-[.8rem] h-[.8rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.5rem] md:h-[1.5rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]"
//         />
//       </span>
//       <div className="flex flex-col items-center">
//         <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">
//           {props.title === "People reached" ? peopleReached : props.subTitle}
//         </span>{" "}
//         <span className="text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
//           {/* {props.title} */}
//           {props.title === "Humanitarian trip" ? peopleReached : props.subTitle}

//         </span>
//       </div>
//     </div>
//   );
// }



// export default function ImpactItem(props) {
//   const [value, setValue] = useState(parseInt(props.subTitle)); // Початкове значення з props.subTitle

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (props.title === "Humanitarian trip") {
//         setValue(prevValue => prevValue + 25); // Додаємо 25 до значення
//       } else if (props.title === "People reached") {
//         setValue(prevValue => prevValue + 1); // Додаємо 1 до значення
//       }
//     }, 604800000); // Кожний тиждень (в мілісекундах)

//     return () => clearInterval(interval); // Очищення інтервалу при виході з компоненту
//   }, [props.title]); // Викликаємо ефект при зміні props.title


//   return (
//     <div className="flex flex-col items-center">
//       {/* ... */}
//       <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">
//         {value}
//       </span>{" "}
//       <span className="text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
//         {props.title }
//       </span>
//     </div>
//   );
// }













// 11


// import React, { useState, useEffect } from "react";

// export default function ImpactItem(props) {
//   const [value, setValue] = useState(parseInt(props.subTitle)); // Початкове значення з props.subTitle

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (props.title === "Humanitarian trip") {
//         setValue(prevValue => prevValue + 25); // Додаємо 25 до значення
//       } else if (props.title === "People reached") {
//         setValue(prevValue => prevValue + 1); // Додаємо 1 до значення
//       }
//     }, 604800000); // Кожний тиждень (в мілісекундах)

//     return () => clearInterval(interval); // Очищення інтервалу при виході з компоненту
//   }, [props.title]); // Викликаємо ефект при зміні props.title
//   return (
//     <div className="flex flex-col items-center">
//       <span className="flex items-center justify-center bg-[#ff9731] rounded-[50%] w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] xl:w-[4.5rem] xl:h-[4.5rem]">
//         <img
//           src={props.img}
//           alt="blue_van"
//           className=" w-[.8rem] h-[.8rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.5rem] md:h-[1.5rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]"
//         />
//       </span>
//       <div className="flex flex-col items-center">
//         <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">
//           {value}+
//         </span>{" "}
//         <span className="text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
//           {props.title}
//         </span>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function ImpactItem(props) {
//   return (
//     <div className="flex flex-col items-center">
//       <span className="flex items-center justify-center bg-[#ff9731] rounded-[50%] w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] xl:w-[4.5rem] xl:h-[4.5rem]">
//         <img
//           src={props.img}
//           alt="icon"
//           className="w-full h-full"
//         />
//       </span>
//       <div className="flex flex-col items-center">
//         <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">
//           {props.value}
//         </span>{" "}
//         <span className="text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
//           {props.title}
//         </span>
//       </div>
//     </div>
//   );
// }