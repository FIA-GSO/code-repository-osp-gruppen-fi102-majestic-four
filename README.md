# OSP Marketplace

Dises Projekt ist eine Umsetzung für ein Marketplace für den Tag der Ausbildung am GSO. Es wurde im Rahmen des Oberstufenprojekts durchgeführt.

**Eingesetzte Technologien:**

-   NextJS (Frontend & Backend)
-   TailwindCSS (Styling)
-   PrismaJS (ORM)
-   SQLite (Datenbank)

## Frontend Wireflow

Link zum Wireflow

## Datenkbank

Link zu Erd (nochmal neu erzeugen)

## Schritt-für-Schritt-Betriebsanleitung

**1. Repository klonen:**
Um das Repository auf Ihrem lokalen System zu klonen, führen Sie den folgenden Befehl aus:

```bash
git clone https://github.com/DeinBenutzername/DeinProjekt.git
```

**2. Abhängigkeiten installieren:**
Installieren Sie die erforderlichen Abhängigkeiten, indem Sie den folgenden Befehl ausführen:

```bash
npm i
```

**3. Initialisieren der Datenbank:**

```bash
npm run prisma
```

**4. Development Server starten:**
Um den Entwicklungsserver zu starten, verwenden Sie den folgenden Befehl:

```bash
npm run dev
```

Der Server läuft dann unter [http://localhost:3000](http://localhost:3000) im Browser.

## Weitere Informationen zu NextJS

Um mehr über Next.js zu erfahren, schauen Sie sich die folgenden Ressourcen an:

-   [Next.js Documentation](https://nextjs.org/docs) - erfahren Sie mehr über die Funktionen und API von Next.js.
-   [Learn Next.js](https://nextjs.org/learn) - ein interaktives Next.js-Tutorial.

## Unser Git Workflow

![commonflow](https://commonflow.org/spec/1.0.0-rc.5.svg)

**Orientiert sich an [Common Flow](https://commonflow.org/), wurde aber von uns ein wenig angepasst.**

Bei kleinen Änderungen kann direkt auf dem main gearbeitet werden.

**Bei einem größeren Feature:**

1. Branch erstellen (Namen soll kurze Beschreibung vom Feature haben durch Bindestriche getrennt z.B. **„user-authentification“** oder **„connect-database“**)
2. Änderung vornehmen und committen, bis Feature umgesetzt
3. Pull Request erstellen
4. Review mit Team Mitglied
5. (Rebase und) In den Main mergen
