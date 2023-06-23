import { NextResponse } from "next/server";

export async function POST(request) {
    console.log('request', request)
    try {
        const body = await request.json();
        const backend_response = await fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        const json = await backend_response.json()

        if (backend_response.status !== 200) {
            return NextResponse.json({ success: false }, { error: 'User not found' }, { status: 400 })
        }

        const response = NextResponse.json({ status: 200, path: "/dashboard", });
        response.cookies.set({
            success: true,
            token: json.token,
            user: json.user,
            path: "/dashboard",
        });

        return response;
    } catch (error) {
        return NextResponse.json({ success: false }, { error: 'Internal Server Error' }, { status: 500 })
    }
}