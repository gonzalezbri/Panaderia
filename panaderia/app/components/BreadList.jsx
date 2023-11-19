import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getBreads = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/breads", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch menu list");
    }

    // Return the parsed JSON response
    return await res.json();
  } catch (error) {
    console.log("Error Loading Menu Items", error);
  }
};

export default async function BreadList() {
  // Initialize breads as an empty array
  let breads = [];

  try {
    // Attempt to fetch breads
    const result = await getBreads();
    breads = result.breads || [];
  } catch (error) {
    console.error("Error fetching breads:", error);
  }

  const bgStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      {breads.length > 0 ? (
        breads.map((b) => (
          <div
            key={b._id} // Add a unique key for each item in the list
            style={bgStyles}
            className="p-4 border border-slate-500 my-3 flex justify-between items-center"
          >
            <div className="w-3/4 p-8">
              <div className="flex flex-col items-start">
                <h2 className="font-bold text-2xl mb-2">{b.title}</h2>
                <div className="mb-2">{b.price}</div>
                <div className="mb-2">{b.description}</div>
              </div>
            </div>
            <div className="flex items-center">
              <RemoveBtn />
              <Link href={`/EditBread/${b._id}`} passHref>
                <button className="ml-2">
                  <HiPencilAlt size={24} />
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="p-4 text-4xl font-extrabold relative bg-gray-700 bg-blend-multiply flex justify-center items-center">No bread items to display.</p>
      )}
    </>
  );
}
