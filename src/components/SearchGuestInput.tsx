import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { colors } from "../../config/colors";

type totalsType = {
  adult: number;
  childs: number;
};

export default function SearchGuestInput() {
  const [adult, setAdults] = useState<number>(1);
  const [childs, setChilds] = useState<number>(0);
  const [openPopOver, setOpenPopOver] = useState<boolean>(false);
  const [totals, setTotals] = useState<totalsType>({
    adult: 1,
    childs: 0,
  });

  const handleAmount = (
    setState: Dispatch<SetStateAction<number>>,
    amount: number,
    type: "subtract" | "add"
  ) => {
    if (type === "subtract" && amount >= 1) {
      setState(amount - 1);
    }
    if (type === "add") {
      setState(amount + 1);
    }
  };

  const handleSetValues = () => {
    setTotals({ adult, childs });
    setOpenPopOver(false);
  };
  return (
    <div className="relative w-1/6 border-l-2 px-3">
      <div onClick={() => setOpenPopOver(true)}>
        <div className="flex gap-2">
          <Image src={"person.svg"} width={14} height={14} alt="gpsIcon" />
          <p style={{ color: colors.caption }}>Hospedes</p>
        </div>
        <p className="font-semibold" style={{ color: colors.text }}>
          {totals.adult} Adulto, {totals.childs} Crianças
        </p>
      </div>
      {openPopOver && (
        <div className="absolute  h-44 px-4  left-0 right-0 mt-2 p-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="border-b pb-2">
            <p style={{ color: colors.text }} className="font-semibold mb-2">
              Adulto
            </p>
            <div className="flex items-center justify-between">
              <button
                style={{ background: colors.lightGray }}
                className="rounded-full h-4 w-4 flex items-center justify-center text-xs"
                onClick={() => handleAmount(setAdults, adult, "subtract")}
              >
                -
              </button>
              <p style={{ color: colors.text }} className="font-semibold">
                {adult}
              </p>
              <button
                style={{ background: colors.lightGray }}
                className="rounded-full h-4 w-4 flex items-center justify-center text-xs"
                onClick={() => handleAmount(setAdults, adult, "add")}
              >
                +
              </button>
            </div>
          </div>
          <div className="border-b pb-2">
            <p style={{ color: colors.text }} className="font-semibold mb-2">
              Crianças
            </p>
            <div className="flex items-center justify-between">
              <button
                style={{ background: colors.lightGray }}
                className="rounded-full h-4 w-4 flex items-center justify-center text-xs"
                onClick={() => handleAmount(setChilds, childs, "subtract")}
              >
                -
              </button>
              <p style={{ color: colors.text }} className="font-semibold">
                {childs}
              </p>
              <button
                style={{ background: colors.lightGray }}
                className="rounded-full h-4 w-4 flex items-center justify-center text-xs"
                onClick={() => handleAmount(setChilds, childs, "add")}
              >
                +
              </button>
            </div>
          </div>
          <button
            style={{
              border: `2px solid ${colors.primary}`,
              color: colors.primary,
            }}
            className="w-14 h-5 text-sm rounded-full flex justify-center items-center ml-auto mt-2 hover:bg-[#0080FF] hover:!text-white"
            onClick={() => handleSetValues()}
          >
            Aplicar
          </button>
        </div>
      )}
    </div>
  );
}
