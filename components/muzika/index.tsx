import Image from "next/image";

const Muzika = () => {
  return (
    <div className="container py-5 px-3">
      <div className="flex gap-[11px] container">
        <picture>
          <img
            className="rounded-[8px]"
            src="https://static.sello.uz/fm/20230731/3a4b6e5a4cd8591dc5bcb31d61be7c68.png"
            alt="static image1"
            style={{ width: "100%" }}
          />
        </picture>
        <picture>
          <img
            className="rounded-[8px]"
            src="https://static.sello.uz/fm/20230731/059dee18ed6b4c9a5c3b9b19706226cb.png"
            alt="static image2"
            style={{ width: "100%" }}
          />
        </picture>
      </div>
    </div>
  );
};

export default Muzika;
