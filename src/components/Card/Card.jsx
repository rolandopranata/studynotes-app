import React from "react";
import { showFormattedDate } from "../../utils";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export default function Card({ id, title, createdAt, body, archived, action }) {
  return (
    <article id={id} className='card'>
      <CardHeader title={title} date={showFormattedDate(createdAt)} body={body} />
      <CardFooter label='delete' action={action} id={id} archived={archived} />
    </article>
  );
}
