'use client'
import React, { useState, useEffect } from 'react';

import Login from './login'
import Sidebar from '@/components/sidebar'

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase'

import { redirect } from 'next/navigation';
import ButtonWithLink from '@/components/ButtonWithLink';

export default function Page() {
    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user)
            }
            else {
                setLoggedUser(null)
            }
        })
    })

    return (
        <main>
            {loggedUser ? (
                <>
                    <p>Hello {loggedUser.email}</p>
                    <ButtonWithLink href='/home'>Go To Home</ButtonWithLink>
                </>
            ) : (
                <Login />
            )}

            
        </main>
    )
}