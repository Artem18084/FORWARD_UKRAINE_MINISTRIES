import React from 'react'

export default function PersonalContactItem(props) {
  return (
    <li>
    <a
      className=" h-6 w-6 cursor-pointer"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <img className="" src={props.src} alt={props.alt} />
    </a>
  </li>
  )
}
