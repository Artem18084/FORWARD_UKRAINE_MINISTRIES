// import React from "react";
// import ListItem from "./ListItem/ListItem";
// import CustomLink from "../../Link/CustomLink";

// export default function NavList(props) {
//   const navList = {
//     main: "Home",
//     report: "Report",
//     needs: "About",
//     team: "Team",
//     donate: "Donate",
//   };

//   const classNames = ["flex", ...props.sidebar.split(" "), "gap-6", "items-center", "font-playfair", "text-base", "font-normal", "leading-6", "tracking-normal"];

//   return (
//     <ul className={classNames.join(" ")}>
//       <CustomLink to="/">
//         <ListItem tittle={navList.main} />
//       </CustomLink>
//       <CustomLink to="/Reports">
//         <ListItem tittle={navList.report} />
//       </CustomLink>
//       <CustomLink to="/About">
//         <ListItem tittle={navList.needs} />
//       </CustomLink>
//       <CustomLink to="/Team">
//         <ListItem tittle={navList.team} />
//       </CustomLink>
//     </ul>
//   );
// }


import React from "react";
import ListItem from "./ListItem/ListItem";
import CustomLink from "../../Link/CustomLink";

export default function NavList(props) {
  const navList = {
    main: "Home",
    report: "Report",
    needs: "About",
    team: "Team",
    donate: "Donate",
  };

  return (
    <ul
      className={`flex ${props.sidebar} gap-6     font-serif text-base font-normal leading-6 tracking-normal  `}
    >
      <CustomLink to="/">
        <ListItem tittle={navList.main} text={props.text}/>
      </CustomLink>
      <CustomLink to="/Reports">
        <ListItem tittle={navList.report} text={props.text}/>
      </CustomLink>
      <CustomLink to="/About">
        <ListItem tittle={navList.needs} text={props.text}/>
      </CustomLink>
      <CustomLink to="/Team">
        <ListItem tittle={navList.team} text={props.text}/>
      </CustomLink>
    </ul>
  );
}