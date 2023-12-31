import connectMongoDB from "@/libs/mongodb";
import Bread from "@/models/Bread";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title,price,description } = await request.json();
    await connectMongoDB();
    await Bread.create({ title,price,description });
    return NextResponse.json({ message: "Bread Post Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Breads = await Bread.find();
    return NextResponse.json({ Breads });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Bread.findByIdAndDelete(id);
    return NextResponse.json({ message: "Bread Post deleted" }, { status: 200 });
}