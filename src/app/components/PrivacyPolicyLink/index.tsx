"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PrivacyPolicyPage: React.FC = () => {
    const pathname = usePathname();
    const session = useSession();
    //@ts-ignore
    const role = session.data?.user?.rolle;

    const showLink =
        pathname !== "/datenschutz" &&
        pathname !== "/register" &&
        role === undefined &&
        pathname !== "/booking";

    if (showLink) {
        return (
            <Link
                href={"/datenschutz"}
                className="absolute text-lg font-light text-primary underline bottom-4 right-4"
            >
                Datenschutzrichtlinien
            </Link>
        );
    }
};

export default PrivacyPolicyPage;
