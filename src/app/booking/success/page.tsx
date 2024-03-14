"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function BookingsSuccessPage() {
    const session = useSession();
    //@ts-ignore
    const role = session.data?.user?.rolle;

    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] py-10 px-20 gap-4 w-fit flex justify-center items-center">
            <div className="p-10 py-14 flex flex-col justify-center items-center bg-base-300 rounded-3xl border border-primary ">
                <h1 className=" text-primary text-4xl font-bold my-4">
                    Erfolgreiche Antragstellung
                </h1>
                {!role && (
                    <div className="px-4 shadow-md rounded-md ">
                        <p className="text-lg mb-8">
                            Vielen Dank für Ihre Antragstellung! Ihre Anfrage
                            wurde erfolgreich bearbeitet. Eine E-Mail mit den
                            detaillierten Informationen zu Ihrem Antrag wurde an
                            die von Ihnen angegebene E-Mail-Adresse gesendet.
                        </p>
                        <p className="text-lg">
                            Bitte überprüfen Sie Ihr Postfach (einschließlich
                            des Spam-Ordners), um sicherzustellen, dass Sie die
                            E-Mail erhalten haben. In der E-Mail finden Sie auch
                            Anweisungen zur Stornierung des Antrags, falls dies
                            erforderlich sein sollte.
                        </p>
                    </div>
                )}

                {role === "user" && (
                    <>
                        <div className="px-4 shadow-md rounded-md w-1/2">
                            <p className="text-lg mb-8">
                                Vielen Dank für Ihre Antragstellung! Ihre
                                Anfrage wurde erfolgreich bearbeitet.
                                Detaillierte Informationen zu Ihrem Antrag
                                finden Sie in ihrem Dashboard
                            </p>
                        </div>
                        <Link
                            href={"/dashboard"}
                            className="btn btn-primary mt-4"
                        >
                            zum Dashboard
                        </Link>
                    </>
                )}
            </div>
        </main>
    );
}
