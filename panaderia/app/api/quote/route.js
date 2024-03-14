import connectMongoDB from "@/libs/mongodb";
import Quote from "@/models/Quote";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    const {fullName, email, message, } = await req.json();

    try {
        await connectMongoDB();
        await Quote.create({fullName, email, message,})

        return NextResponse.json({msg: ["Quote Sent Successfully!"], success: true})
        } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList });
            } else {
            return NextResponse.json({ msg: ["Unable to send Quote."] });
            }
        }
    }