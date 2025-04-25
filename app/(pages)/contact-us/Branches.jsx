import React from "react";
import SingleBranch from "./SingleBranch";

const Branches = async () => {
  // const data = await fetch('https://api.vercel.app/blog')
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/branch/public/list?status=true&limit=100&page=1`,
    { next: { revalidate: 0 } }
  );
  const branches = await data.json();

  return (
    <div>
      {branches?.data
        ?.filter((branch) => branch?.is_main_branch === false) // Filter main branches
        .map((branch) => (
          <SingleBranch key={branch?._id} branch={branch} />
        ))}
    </div>
  );
};

export default Branches;
