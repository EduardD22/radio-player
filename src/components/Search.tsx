import { useState } from "react";
import { useGetRadiosQuery } from "../api/apiSlice";
import RadioList from "./RadioList";
import { Input } from "./ui/input";
import Player from "./Player";
import { Skeleton } from "./ui/skeleton";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useGetRadiosQuery(searchQuery);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-6 ">
        <div className="flex w-full max-w-sm items-center space-x-2 ">
          <Input
            type="text"
            placeholder="Search radios..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <Player />
      </div>
      {isLoading ? (
        <div className="grid place-items-center gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
          {Array.from({ length: 25 }).map((_, index) => (
            <Skeleton key={index} className=" h-[336px] w-[264px]" />
          ))}
        </div>
      ) : error ? (
        <div>
          Error: {error.status} {JSON.stringify(error.data)}
        </div>
      ) : (
        <RadioList radios={data?.items || []} />
      )}
    </div>
  );
};

export default Search;
