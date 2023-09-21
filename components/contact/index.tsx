
const Contact = () => {
  return (
    <div className="container flex flex-col space-y-10 py-7 px-3">
      <img
        src="https://sello.uz/images/banner/podval2-banner-uz.png"
        alt="Contact Image"
        className="rounded-[10px]"
      />
      <div
        className="bg-white border border-gray-100 py-6 px-6 flexcol justify-between laptop:flex"
        style={{ borderRadius: "9px" }}
      >
        <p style={{ fontSize: "19px" }}>
          Chegirmalar va aksiyalardan xabardor bolish uchun obuna boling!
        </p>
        <div
          className="flex space-x-3 border border-gray-200 p-2 w-[100%] laptop:w-[100%]"
          style={{ borderRadius: "9px" }}
        >
          <input
            className="outline-none"
            style={{ width: "100%" }}
            type="text"
            placeholder="Elektron pochta"
          />
          <button
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{ background: "rgb(0, 95, 97)" }}
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact