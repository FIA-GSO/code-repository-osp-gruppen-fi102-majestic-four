"use server";
import { prisma } from "../db.ts";
import { Benutzer, Stand } from "@prisma/client";
import bcrypt from "bcrypt";

// Function to get a user by email
export async function getUserByEmail(email: string) {
    try {
        const user = await prisma.benutzer.findUnique({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.error("Error getting user by email:", error);
        return null;
    }
}

export async function getAllUsers() {
    try {
        const allUsers = await prisma.benutzer.findMany({
            where: {
                rolleId: {
                    not: 1,
                },
            },
            include: {
                rolle: true,
            },
        });

        return allUsers;
    } catch (error) {
        console.error("Error getting all User:", error);
        return null;
    }
}

// Function to create a new user
export async function createUser(email: string, password: string) {
    try {
        const hash = bcrypt.hashSync(password, 12);
        const newUser = await prisma.benutzer.create({
            data: {
                email,
                passwort: hash,
                rolleId: 2,
            },
        });
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        return {
            error: "Cant create User.",
        };
    }
}

// Function to authenticate user (login)
export async function authenticateUser(email: string, password: string) {
    try {
        const user = await prisma.benutzer.findUnique({
            where: {
                email,
            },
        });

        if (!user || user.passwort !== password) {
            // User not found or password doesn't match
            return {
                error: "Invalid credentials.",
            };
        }
        // Successful authentication
        return user;
    } catch (error) {
        console.error("Error authenticating user:", error);
        return {
            error: "Authentication failed.",
        };
    }
}

export async function getUserInfos(id: number) {
    try {
        const user = await prisma.benutzer.findUnique({
            where: {
                id,
            },
        });
        return user;
    } catch (error) {
        console.error("Error authenticating user:", error);
        return {
            error: "Authentication failed.",
        };
    }
}

// Function to get all Stands
export async function getAllStands() {
    try {
        const allStands = await prisma.stand.findMany({
            where: {
                statusId: {
                    not: 2,
                },
            },
            include: {
                status: true,
            },
        });
        return allStands;
    } catch (error) {
        console.error("Error getting all Stands:", error);
        return null;
    }
}

// Function to create a new Stand
export async function createStand({
    benutzerId,
    email,
    firma,
    ansprechpartner,
    telefon,
    bemerkung,
    tisch,
    stuhl,
    tag1,
    tag2,
}: {
    benutzerId?: number;
    email: string;
    firma: string;
    ansprechpartner: string;
    telefon?: string;
    bemerkung?: string;
    tisch: number;
    stuhl: number;
    tag1: boolean;
    tag2: boolean;
}) {
    try {
        const newStand = await prisma.stand.create({
            data: {
                email,
                ansprechpartner,
                telefon,
                firma,
                tisch,
                stuhl,
                bemerkung,
                tag1,
                tag2,
                datum: tag1 ? "24.01.2025" : "25.01.2025",
                statusId: 1,
                benutzerId: benutzerId,
            },
        });
        return newStand;
    } catch (error) {
        console.error("Error creating Stand:", error);
        return {
            error: "Can't create Stand.",
        };
    }
}

// Function to get a Stand by ID
export async function getStandById(standId: number) {
    try {
        const stand = await prisma.stand.findUnique({
            where: {
                id: standId,
            },
        });
        return stand;
    } catch (error) {
        console.error("Error getting Stand by ID:", error);
        return null;
    }
}

// Function to create a new Vortrag
export async function createVortrag({
    benutzerId,
    email,
    firma,
    ansprechpartner,
    telefon,
    dauer,
    thema,
    datum,
    uhrzeit,
}: {
    benutzerId?: number;
    email: string;
    firma: string;
    ansprechpartner: string;
    telefon?: string;
    dauer: number;
    thema: string;
    datum: string;
    uhrzeit: string;
}) {
    try {
        if (!email || !thema || !dauer)
            throw new Error("email, thema oder dauer undefined");

        const newVortrag = await prisma.vortrag.create({
            data: {
                email,
                ansprechpartner,
                telefon,
                firma,
                datum,
                statusId: 1,
                benutzerId: benutzerId,
                dauer,
                thema,
                uhrzeit,
            },
        });
        return newVortrag;
    } catch (error) {
        console.error("Error creating Vortrag:", error);
        return {
            error: "Can't create Vortrag.",
        } as const; // Assert the type to ensure TypeScript understands it's a constant value
    }
}

// Function to get a Vortrag by ID
export async function getVortragById(vortragId: number) {
    try {
        const vortrag = await prisma.vortrag.findUnique({
            where: {
                id: vortragId,
            },
        });
        return vortrag;
    } catch (error) {
        console.error("Error getting Vortrag by ID:", error);
        return null;
    }
}

// Function to get all Vortrags
export async function getAllTalks() {
    try {
        const allTalks = await prisma.vortrag.findMany({
            where: {
                statusId: {
                    not: 2,
                },
            },
            include: {
                status: true,
            },
        });
        return allTalks;
    } catch (error) {
        console.error("Error getting all Vortrags:", error);
        return null;
    }
}

export async function changeBookingStatus(
    bookingId: number,
    type: "stand" | "vortrag",
    newStatusId: number
) {
    try {
        if (type === "stand") {
            const updatedStand = await prisma.stand.update({
                where: {
                    id: bookingId,
                },
                data: {
                    statusId: newStatusId,
                },
            });
            return updatedStand;
        } else {
            const updatedVortrag = await prisma.vortrag.update({
                where: {
                    id: bookingId,
                },
                data: {
                    statusId: newStatusId,
                },
            });
            return updatedVortrag;
        }
    } catch (error) {
        console.error("Error changing status:", error);
        return null;
    }
}

export async function getCanceledBookings() {
    try {
        const allTalks = await prisma.vortrag.findMany({
            where: {
                statusId: 2,
            },
            include: {
                status: true,
            },
        });
        const allStands = await prisma.stand.findMany({
            where: {
                statusId: 2,
            },
            include: {
                status: true,
            },
        });

        return [...allTalks, ...allStands];
    } catch (error) {
        console.error("Error getting all Vortrags:", error);
        return null;
    }
}
