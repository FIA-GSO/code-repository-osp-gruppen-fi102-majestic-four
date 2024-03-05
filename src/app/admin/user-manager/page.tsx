"use client";

import UserManager from "@/app/components/UserManager";

export default function AdminUserManager() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] py-20 px-24 gap-4">
            <UserManager fullscreen />
        </main>
    );
}
