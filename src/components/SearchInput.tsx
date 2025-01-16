import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { colors } from "../../config/colors";
import { FakeAPIResponse } from "@/types/apí";

type searchInputProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function SearchInput({ search, setSearch }: searchInputProps) {
  const [recommendations, setRecommendations] = useState<
    FakeAPIResponse["suggestions"]
  >([]);

  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("http://localhost:3333/suggestions");
      const data: FakeAPIResponse["suggestions"] = await res.json();
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.region.toLowerCase().includes(search.toLowerCase())
      );
      setRecommendations(filteredData);
    };
    if (search.length >= 3) {
      handleData();
    }
    if (search.length < 3) {
      setRecommendations([]);
    }
  }, [search]);
  return (
    <div className="relative w-1/4">
      <div className="flex gap-2">
        <Image src={"gps.svg"} width={14} height={14} alt="gpsIcon" />
        <p style={{ color: colors.caption }}>Destino</p>
      </div>
      <input
        type="text"
        className="focus:outline-none font-semibold"
        placeholder="Dubai"
        style={{ color: colors.text }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {recommendations.length > 0 && (
        <div className="absolute max-h-80 overflow-scroll overflow-x-hidden left-0 right-0 mt-2 p-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="space-y-1">
            {recommendations?.map((recommendation) => (
              <li
                key={recommendation.id}
                className="cursor-pointer hover:bg-gray-100 p-1"
              >
                <div className="flex gap-4">
                  <Image
                    src={"gps.svg"}
                    height={13}
                    width={13}
                    alt="gps icon"
                  />
                  <div>
                    <p className="font-semibold" style={{ color: colors.text }}>
                      {recommendation.name}
                    </p>
                    <p style={{ color: colors.caption }}>
                      {recommendation.region}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
