import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../constants/cookie-auth";

export default function authenticated() {
    return !!cookies().get(AUTHENTICATION_COOKIE)?.value;
}