"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/utils/errors";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(_prevState: any, formData: FormData) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        body: formData
    });

    const parsedRes = await res.json();
    if (!res.ok) {
        console.log(parsedRes);
        return {error: getErrorMessage(parsedRes)};
    }
    redirect("/");
}