"use client";

import { CategoryTypes } from "@/types";
import Image from "next/image";

const Hamkorlarimiz = ({
  logo
}: CategoryTypes) => {
  return (
    <div>
      <div className="py-1 px-1">
        <Image
          className="img"
          src={`https://static.sello.uz${logo}`}
          alt="Hamkor"
          style={{
            width: "100%",
            margin: "0 auto",
            height: "40px",
          }}
          width={100}
          height={20}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hamkorlarimiz;
