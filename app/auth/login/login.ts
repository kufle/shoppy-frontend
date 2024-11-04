"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/utils/errors";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface FormError {
    error: string;
}

export default async function login(_prevState: FormError, formData: FormData) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes = await res.json();
    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }
    setAuthCookie(res);
    redirect("/");
}

//ambil cookie dari backend nest js
const setAuthCookie = (response: Response) => {
    //ambil key Headers Set-Cookies
    const setCookieHeader = response.headers.get("Set-Cookie");
    if (setCookieHeader) {
        //ambil tokennya contoh Authentication=token;anotherkey=...
        //jadi jika di split ";" hasilnya jadi Authentication=token di split lagi "=" hasilnya jadi token
        const token = setCookieHeader.split(";")[0].split("=")[1];
        console.log(jwtDecode(token).exp);
        cookies().set({
            name: "Authentication",
            value: token,
            secure: true,
            httpOnly: true,
            expires: new Date(jwtDecode(token).exp! * 1000), //ambil expired date token dari backend
        });
    }
};