
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

export default function BreadList() {
    const buttons = (
    <div className="flex items-center">
        <RemoveBtn />
        <Link href="/EditBread" className="ml-2">
            <HiPencilAlt size={24} />
        </Link>
    </div>
    );

        return (
            <div className="p-4 border border-slate-500 my-3 flex justify-between items-center">
                <div className="w-3/4 p-8">
                    <div className="flex flex-col items-start">
                    <h2 className="font-bold text-2xl mb-2">Bread Title</h2>
                    <div className="mb-2">Price per Dozen</div>
                    <div className="mb-2">Bread Description</div>
                    </div>
                </div>
                {buttons}
            </div>
            );
        };