import connectMongoDB from "@/libs/mongodb";
import Bread from "@/models/Bread";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Bread.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Bread Post updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const Bread = await Bread.findOne({ _id: id });
    return NextResponse.json({ Bread }, { status: 200 });
}