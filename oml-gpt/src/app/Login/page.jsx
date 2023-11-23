'use client'
import React, { useState } from "react";
import Login from "./login"
import Sidebar from "@/components/sidebar"

export default function Page() {
    const [loggedUser, setLoggedUser] = useState(null)

    return (
        <main>
            <Login user={ setLoggedUser } />
            {/* <Sidebar initialUser={null}/> */}
        </main>
    )
}