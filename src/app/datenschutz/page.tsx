/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] flex flex-col py-10 px-20 gap-4 ">
            <button
                onClick={goBack}
                className="absolute px-4 py-2 mt-4 font-semibold rounded-lg bottom-5 right-5 btn btn-primary"
            >
                Zurück
            </button>

            <div className="w-full h-[calc(100%-50px)] max-w-6xl p-10 py-6 overflow-y-auto bg-base-200 shadow-xl rounded-xl border border-primary">
                <h1 className="py-4 text-5xl font-bold text-primary">
                    Datenschutzrichtlinie
                </h1>
                <p className="text-lg font-light text-white">
                    Zuletzt aktualisiert am [Datum der letzten Aktualisierung]
                    Diese Datenschutzrichtlinie beschreibt, wie [Ihr
                    Unternehmen/Name] (im Folgenden als "wir", "uns" oder
                    "unsere" bezeichnet) Informationen sammelt, verwendet und
                    offenlegt, die wir von Benutzern unserer Website [Ihre
                    Website-URL] (im Folgenden als "Website" bezeichnet)
                    erhalten.
                </p>
                <ol className="list-decimal">
                    <li className="text-2xl font-semibold text-primary">
                        Informationen, die wir sammeln
                        <p className="text-lg font-light text-white">
                            Wir können personenbezogene Informationen von
                            Benutzern in verschiedenen Situationen sammeln,
                            einschließlich, aber nicht beschränkt auf, wenn
                            Benutzer unsere Website besuchen, sich registrieren,
                            auf Funktionen der Website zugreifen oder
                            Dienstleistungen in Anspruch nehmen. Die gesammelten
                            Informationen können Folgendes umfassen:
                        </p>
                        <ul className="text-lg font-light text-white list-disc list-inside indent-10">
                            <li>
                                Name, Kontaktdaten und demografische
                                Informationen
                            </li>
                            <li>Informationen über Ihre Nutzung der Website</li>
                            <li>
                                Geräteinformationen wie IP-Adresse, Browser-Typ
                                und Betriebssystem
                            </li>
                        </ul>
                    </li>
                    <li className="text-2xl font-semibold text-primary">
                        Verwendung der gesammelten Informationen
                        <p className="text-lg font-light text-white">
                            Wir verwenden die gesammelten Informationen, um:
                        </p>
                        <ul className="text-lg font-light text-white list-disc list-inside indent-10">
                            <li>
                                Ihnen personalisierte Inhalte und
                                Dienstleistungen bereitzustellen
                            </li>
                            <li>
                                Unsere Website zu verbessern und zu optimieren
                            </li>
                            <li>
                                Statistiken und Analysen über die Nutzung der
                                Website zu erstellen
                            </li>
                            <li>
                                Ihnen relevante Werbematerialien zu präsentieren
                            </li>
                        </ul>
                    </li>
                    <li className="text-2xl font-semibold text-primary">
                        Cookies und ähnliche Technologien
                        <p className="text-lg font-light text-white">
                            Unsere Website verwendet Cookies und ähnliche
                            Technologien, um die Benutzererfahrung zu
                            verbessern. Sie können die Verwendung von Cookies in
                            Ihren Browsereinstellungen steuern und ablehnen,
                            wenn Sie dies wünschen.
                        </p>
                    </li>
                    <li className="text-2xl font-semibold text-primary">
                        Datensicherheit
                        <p className="text-lg font-light text-white">
                            Wir setzen angemessene Sicherheitsmaßnahmen ein, um
                            Ihre persönlichen Informationen vor unbefugtem
                            Zugriff, Verlust, Missbrauch oder Änderung zu
                            schützen. Trotz unserer Bemühungen können wir jedoch
                            nicht garantieren, dass solche Vorfälle vollständig
                            vermieden werden.
                        </p>
                    </li>
                    <li className="text-2xl font-semibold text-primary">
                        Weitergabe von Informationen an Dritte
                        <p className="text-lg font-light text-white">
                            Wir geben Ihre persönlichen Informationen nicht an
                            Dritte weiter, es sei denn, dies ist gesetzlich
                            vorgeschrieben oder erforderlich, um Ihnen bestimmte
                            Dienstleistungen zur Verfügung zu stellen.
                        </p>
                    </li>
                    <li className="text-2xl font-semibold text-primary">
                        Änderungen an dieser Datenschutzrichtlinie
                        <p className="text-lg font-light text-white">
                            Wir behalten uns das Recht vor, diese
                            Datenschutzrichtlinie jederzeit zu ändern.
                            Aktualisierungen werden auf unserer Website
                            veröffentlicht, und das Datum der letzten
                            Aktualisierung wird angepasst.
                        </p>
                    </li>
                    <li className="text-2xl font-semibold text-primary">
                        Kontaktinformationen
                        <p className="text-lg font-light text-white">
                            Bei Fragen oder Bedenken bezüglich dieser
                            Datenschutzrichtlinie können Sie uns unter [Ihre
                            Kontaktinformationen] erreichen.
                        </p>
                    </li>
                </ol>
            </div>
        </main>
    );
}
