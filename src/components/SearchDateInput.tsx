import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "../../config/colors";

type searchDateInputProps = {
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function SearchDateInput({
  title,
  value,
  setValue,
}: searchDateInputProps) {
  return (
    <div className=" w-1/4 border-l-2 px-3">
      {" "}
      <div className="flex gap-2">
        <Image src={"calendar.svg"} width={14} height={14} alt="gpsIcon" />
        <p style={{ color: colors.caption }}>{title}</p>
      </div>
      <input
        className="focus:outline-none font-semibold"
        style={{ color: colors.text }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="date"
        name="enterDate"
        id="enterDate"
      />
    </div>
  );
}
