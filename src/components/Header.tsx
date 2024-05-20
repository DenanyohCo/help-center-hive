import React from "react";
import { createClient } from "@/prismicio";
import Navbar from "@/components/Navbar";

export default async function Header() {
    const client = createClient();
    const navbar = await client.getSingle("navbar");
    return (
        <div>
            <Navbar navbar={navbar} />
        </div>
    );
}