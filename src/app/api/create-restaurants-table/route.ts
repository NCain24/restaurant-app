import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const result =
            await sql`CREATE TABLE Restaurants ( Name varchar(255), City varchar(255), State varchar(255), Zipcode integer);`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        NextResponse.json({ error }, { status: 500 });
    }
}