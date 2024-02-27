import Image from "next/image";

export default function Info() {
    return (
        <main className="flex h-[calc(100vh-64px)] bg-base-100 flex-col items-center justify-between p-24">
            <div className=" h-full flex justify-center">
                <div className="flex-1 w-2/3 p-8 rounded shadow-lg overflow-y-scroll">
                    <h1 className="text-center text-3xl font-bold mb-6 ">
                        Tag der Ausbildung am Georg-Simon-Ohm-Berufskolleg
                    </h1>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Überblick:</h2>
                        <p className=" text-lg">
                            Am Georg-Simon-Ohm-Berufskolleg in der Stadt Köln
                            findet seit vielen Jahren der Tag der Ausbildung
                            statt. Dieses Event öffnet die Türen des
                            Berufskollegs an zwei Tagen im November (Freitag und
                            Samstag) für Interessierte an schulischen Vollzeit-
                            oder Teilzeitbildungsgängen. Im Laufe der Jahre hat
                            sich zusätzlich das Format einer Firmenausstellung
                            etabliert, bei der Ausbildungsbetriebe den
                            Vollzeitschülern des GSO als potenzielle Partner für
                            eine duale Berufsausbildung oder ein Studium
                            vorgestellt werden können.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">
                            Veranstaltungsformat:
                        </h2>
                        <p className=" text-lg">
                            <strong>Zeitraum:</strong> Zwei Tage im Januar
                            (Freitag und Samstag)
                            <br />
                            <strong>Ort:</strong> Georg-Simon-Ohm-Berufskolleg,
                            Stadt Köln
                            <br />
                            <strong>Firmenausstellung:</strong>{" "}
                            Ausbildungsbetriebe präsentieren sich als
                            potenzielle Partner für duale Berufsausbildung oder
                            Studium.
                            <br />
                            <strong>Plenum für Fachvorträge:</strong> Das GSO
                            bietet den Betrieben die Möglichkeit, Fachvorträge
                            zu spannenden Praxisthemen rund um IT und Medien zu
                            halten.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Aktivitäten:</h2>
                        <p className=" text-lg">
                            <strong>Firmenausstellung:</strong>{" "}
                            Ausbildungsbetriebe präsentieren sich als
                            potenzielle Partner für duale Berufsausbildung oder
                            Studium.
                            <br />
                            <strong>Plenum für Fachvorträge:</strong> Das GSO
                            bietet den Betrieben die Möglichkeit, Fachvorträge
                            zu spannenden Praxisthemen rund um IT und Medien zu
                            halten.
                        </p>
                    </div>

                    <p className=" mb-8 text-lg">
                        Für weitere Informationen und Anmeldungen stehen wir
                        Ihnen gerne zur Verfügung. Wir freuen uns auf Ihre
                        Teilnahme am Tag der Ausbildung am
                        Georg-Simon-Ohm-Berufskolleg!
                    </p>
                </div>
                <img
                    src="https://www.gso-koeln.de/wp-content/uploads/2023/10/Teaser_TdA.jpg"
                    alt="Bildbeschreibung"
                    className=" rounded-2xl "
                />
            </div>
        </main>
    );
}
