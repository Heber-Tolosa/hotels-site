"use client";
import { colors } from "../../config/colors";
import { useState } from "react";

import SearchInput from "@/components/SearchInput";
import SearchDateInput from "@/components/SearchDateInput";
import Image from "next/image";
import SearchGuestInput from "@/components/SearchGuestInput";

export default function Home() {
  const [search, setSearch] = useState("");
  const [openDate, setOpenDate] = useState(new Date().toString());
  const [closeDate, setCloseDate] = useState(new Date().toString());
  console.log("OPEN", openDate);

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

      <div className="flex  bg-white h-16 w-4/5 rounded-2xl px-5 py-3 ">
        <SearchInput search={search} setSearch={setSearch} />
        <SearchDateInput
          setValue={setOpenDate}
          value={openDate}
          title={"Entrada"}
        />
        <SearchDateInput
          setValue={setCloseDate}
          value={closeDate}
          title={"Saida"}
        />
        <SearchGuestInput />
        <button
          style={{ background: colors.primary }}
          className="w-1/12 text-white p-2 rounded-full shadow-md"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}
