import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    await prisma.benutzer.deleteMany();
    await prisma.rollen.deleteMany();
    await prisma.vortrag.deleteMany();
    await prisma.stand.deleteMany();
    await prisma.status.deleteMany();
    await prisma.benachrichtigung.deleteMany();

    await prisma.$queryRaw`UPDATE sqlite_sequence SET seq=0 WHERE name='Benutzer'`;
    await prisma.$queryRaw`UPDATE sqlite_sequence SET seq=0 WHERE name='Rollen'`;
    await prisma.$queryRaw`UPDATE sqlite_sequence SET seq=0 WHERE name='Stand'`;
    await prisma.$queryRaw`UPDATE sqlite_sequence SET seq=0 WHERE name='Vortrag'`;
    await prisma.$queryRaw`UPDATE sqlite_sequence SET seq=0 WHERE name='Status'`;
    await prisma.$queryRaw`UPDATE sqlite_sequence SET seq=0 WHERE name='Benachrichtigung'`;

    //Roles
    await prisma.rollen.create({ data: { bezeichnung: "admin" } });
    await prisma.rollen.create({ data: { bezeichnung: "user" } });
    await prisma.rollen.create({ data: { bezeichnung: "technician" } });

    //Status
    await prisma.status.create({ data: { bezeichnung: "pending" } });
    await prisma.status.create({ data: { bezeichnung: "canceled" } });
    await prisma.status.create({ data: { bezeichnung: "accepted" } });
    await prisma.status.create({ data: { bezeichnung: "declined" } });
    await prisma.status.create({ data: { bezeichnung: "archived" } });

    const hash = bcrypt.hashSync("123", 12);

    //Users
    await prisma.benutzer.create({
        data: {
            email: "admin@gso.de",
            passwort: hash,
            vorname: "Admin Vorname",
            nachname: "Admin Nachname",
            firma: "GSO",

            rolleId: 1,
        },
    });
    await prisma.benutzer.create({
        data: {
            email: "user@usermail.de",
            passwort: hash,
            vorname: "User Vorname",
            nachname: "User Nachname",
            firma: "User Firma",
            rolleId: 2,
        },
    });
    await prisma.benutzer.create({
        data: {
            email: "tech@gso.de",
            passwort: hash,
            vorname: "Tech Vorname",
            nachname: "Tech Nachname",
            firma: "GSO",
            rolleId: 3,
        },
    });

    await prisma.vortrag.create({
        data: {
            email: "user@usermail.de",
            benutzerId: 2,
            thema: "Altes Thema",
            dauer: 15,
            datum: "26.01.2024",
            uhrzeit: "10:30",
            ansprechpartner: "",
            firma: "",
            statusId: 5,
        },
    });
    await prisma.stand.create({
        data: {
            email: "user@usermail.de",
            benutzerId: 2,
            datum: "26.01.2024",
            ansprechpartner: "",
            firma: "",
            statusId: 5,
            tag1: true,
            tag2: false,
            tisch: 10,
            stuhl: 20,
        },
    });
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
