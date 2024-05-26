import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { PiArrowSquareOutFill } from "react-icons/pi";
import React, { useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
const SitePage = () => {
    return (
        <section className="container">
            <Link href={"/"} className="flex items-center py-4">
                <MdArrowBackIos /> See All Inspiration
            </Link>
        </section>
    );
};

export default SitePage;