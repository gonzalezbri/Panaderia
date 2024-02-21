import connectMongoDB from "@/libs/mongodb";
import Bread from "@/models/Bread";
import { NextResponse } from "next/server";


export async function POST(req) {
  const formData = await req.formData();
  const { title, price, description, imageUrl } = formData;
  await connectMongoDB();
  console.log(formData)
  await Bread.create({ title,price,description, imageUrl });
  return NextResponse.json({ message: "Bread Post Created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const Breads = await Bread.find();
    return NextResponse.json({ Breads });
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Bread.findByIdAndDelete(id);
    return NextResponse.json({ message: "Bread Post deleted" }, { status: 200 });
}
