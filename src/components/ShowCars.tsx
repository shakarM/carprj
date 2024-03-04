"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "../../types";
import { updateSearchParam } from "../../utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParam("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && <button>Showww</button>}
    </div>
  );
};

export default ShowMore;
