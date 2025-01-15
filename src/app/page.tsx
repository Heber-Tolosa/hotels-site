"use client";
import { colors } from "../../config/colors";
import { useState } from "react";

import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-[93vh]">
      <h1
        style={{ color: colors.text }}
        className={`text-5xl font-semibold text-center mb-10`}
      >
        Os melhores <span style={{ color: colors.primary }}> Hoteis </span> e{" "}
        <span style={{ color: colors.primary }}> Destinos</span> <br />
        para sua viagem
      </h1>

      <div className=" bg-white h-16 w-4/5 rounded-2xl px-5 py-2 ">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
    </div>
  );
}
