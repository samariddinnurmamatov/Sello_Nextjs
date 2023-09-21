"use client";

import { CategoryTypes } from "@/types";

const Hamkorlarimiz = ({
  logo
}: CategoryTypes) => {
  return (
    <div>
      <div className="py-1 px-1">
        <img
          className="img"
          src={`https://static.sello.uz/unsafe/x180/https://static.sello.uz${logo}`}
          alt="Hamkor"
          style={{
            width: "100%",
            margin: "0 auto",
            height: "40px",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hamkorlarimiz;
