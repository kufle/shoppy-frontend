"use client";

import { Button, Link, Stack, TextField } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import login from './login';

function LoginPage() {
    const [state, formAction] = useFormState(login, {error: ""});

    return (
        <form action={formAction} className="w-full max-w-xs">
            <Stack spacing={2} className="w-full max-w-xs">
                <TextField
                    error={!!state.error}
                   helperText={state.error}
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                />
                <TextField
                    error={!!state.error}
                    helperText={state.error}
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                />
                <Button type="submit" variant="contained">Login</Button>
                <Link component={NextLink} href="/auth/signup" className="self-center">
                    Signup
                </Link>
            </Stack>
        </form>
    )
}

export default LoginPage
