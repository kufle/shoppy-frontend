"use server";

import { API_URL } from "@/app/constants/api";
import { cookies } from "next/headers";

export default async function getMe() {
    const me = await fetch(`${API_URL}/users/me`, {
        headers: {Cookie: cookies().toString()}
    });
    return me.json();
}