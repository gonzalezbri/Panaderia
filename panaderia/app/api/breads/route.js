import connectMongoDB from "@/libs/mongodb";
import Bread from "@/models/Bread";
import { NextResponse } from "next/server";


export async function POST(request) {
    const data = await request.json(); // Parse the JSON body
    const { title, price, description, imageUrl } = data;
    await connectMongoDB();
    
    try {
      const newBread = await Bread.create({ title, price, description, imageUrl });
      
      // Handle successful creation:
      console.log("New bread created:", newBread);
      return NextResponse.json({ message: "Bread Post Created" }, { status: 201 });
    } catch (error) {
      // Handle creation error:
      console.error("Error creating bread:", error);
      return NextResponse.json({ message: "Failed to create bread" }, { status: 500 });
    }
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
