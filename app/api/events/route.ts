import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/databse/event.model"

export async function GET(req:NextRequest){
    return NextResponse.json("success response!")
}

export async function POST(req:NextRequest){
    try{
        await connectDB();

        const formData = await req.formData();

        let event;

        try{
            event = Object.fromEntries(formData.entries());
        }
        catch(e){
            return NextResponse.json({message: 'Invalid JSON format'}, {status: 400});
        }

        const createdEvent = await Event.create(event);

        return NextResponse.json({message: 'Event created successfully', event: createdEvent}, {status:201});
    }
    catch(e){
        return NextResponse.json({message: 'Event Creation Failed', error: e instanceof Error ? e.message : 'unknown' }, {status: 500});
    }
}