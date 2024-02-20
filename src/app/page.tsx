import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">


<div className="bg-gray-200 min-h-screen flex">
      <div className="w-2/3 p-8 bg-white rounded shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6 text-black justify-item-center">
          Tag der Ausbildung am Georg-Simon-Ohm-Berufskolleg
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Überblick:</h2>
          <p className="text-gray-700 text-lg">
            Am Georg-Simon-Ohm-Berufskolleg in der Stadt Köln findet seit vielen Jahren der Tag der Ausbildung statt. Dieses Event öffnet die Türen des Berufskollegs an zwei Tagen im November (Freitag und Samstag) für Interessierte an schulischen Vollzeit- oder Teilzeitbildungsgängen. Im Laufe der Jahre hat sich zusätzlich das Format einer Firmenausstellung etabliert, bei der Ausbildungsbetriebe den Vollzeitschülern des GSO als potenzielle Partner für eine duale Berufsausbildung oder ein Studium vorgestellt werden können.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Veranstaltungsformat:</h2>
          <p className="text-gray-700 text-lg">
            <strong>Zeitraum:</strong> Zwei Tage im Januar (Freitag und Samstag)<br />
            <strong>Ort:</strong> Georg-Simon-Ohm-Berufskolleg, Stadt Köln<br /> 
            <strong>Firmenausstellung:</strong> Ausbildungsbetriebe präsentieren sich als potenzielle Partner für duale Berufsausbildung oder Studium.<br /> 
            <strong>Plenum für Fachvorträge:</strong> Das GSO bietet den Betrieben die Möglichkeit, Fachvorträge zu spannenden Praxisthemen rund um IT und Medien zu halten.
          
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Aktivitäten:</h2>
          <p className="text-gray-700 text-lg">
            <strong>Firmenausstellung:</strong> Ausbildungsbetriebe präsentieren sich als potenzielle Partner für duale Berufsausbildung oder Studium.<br />
            <strong>Plenum für Fachvorträge:</strong> Das GSO bietet den Betrieben die Möglichkeit, Fachvorträge zu spannenden Praxisthemen rund um IT und Medien zu halten.
          </p>
        </div>

        
        <p className="text-gray-700 mb-8 text-lg">
          Für weitere Informationen und Anmeldungen stehen wir Ihnen gerne zur Verfügung. Wir freuen uns auf Ihre Teilnahme am Tag der Ausbildung am Georg-Simon-Ohm-Berufskolleg!
        </p>
      </div>

      
      <div className="w-1/3">
        <img src="https://www.gso-koeln.de/wp-content/uploads/2023/10/Teaser_TdA.jpg" alt="Bildbeschreibung" className="w-full h-auto object-cover rounded" />
      </div>
    </div>
  
        </main>
    );
}
