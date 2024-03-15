"use server";
import { prisma } from "../db.ts";
import bcrypt from "bcrypt";

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

export async function updateUserInfos(
    id: number,
    contactPerson: string,
    telefon: string,
    firma: string
) {
    try {
        const user = await prisma.benutzer.update({
            where: {
                id,
            },
            data: {
                vorname: contactPerson.split(" ")[0],
                nachname: contactPerson.split(" ")[1],
                firma: firma,
                telefon: telefon,
            },
        });
        return user;
    } catch (error) {
        console.error("Error modifying user:", error);
        return {
            error: "Authentication failed.",
        };
    }
}

// Function to get all Stands
export async function getAllStands() {
    try {
        const allStands = await prisma.stand.findMany();
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
        if (!email) throw new Error("email invalid");
        if (!(tag1 || tag2)) throw new Error("no day selected");

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
                datum: tag1 ? "26.01.2024" : "27.01.2024",
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
        if (!email || !thema || !dauer || !datum || !uhrzeit)
            throw new Error("email, thema, dauer, datum oder uhrzeit invalid");

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

export async function getAllBookings() {
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
        const extendedTalks = allTalks.map((talk) => ({
            ...talk,
            type: "vortrag",
        }));

        const extendedStands = allStands.map((stand) => ({
            ...stand,
            type: "stand",
        }));

        return [...extendedTalks, ...extendedStands];
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return [];
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

        const extendedTalks = allTalks.map((talk) => ({
            ...talk,
            type: "vortrag",
        }));

        const extendedStands = allStands.map((stand) => ({
            ...stand,
            type: "stand",
        }));

        return [...extendedTalks, ...extendedStands];
    } catch (error) {
        console.error("Error fetching canceled bookings:", error);
        return [];
    }
}

export async function getUserBookings(userId: number) {
    try {
        const allTalks = await prisma.vortrag.findMany({
            where: {
                benutzerId: userId,
            },
            include: {
                status: true,
            },
        });

        const allStands = await prisma.stand.findMany({
            where: {
                benutzerId: userId,
            },
            include: {
                status: true,
            },
        });
        const extendedTalks = allTalks.map((talk) => ({
            ...talk,
            type: "vortrag",
        }));

        const extendedStands = allStands.map((stand) => ({
            ...stand,
            type: "stand",
        }));

        return [...extendedTalks, ...extendedStands];
    } catch (error) {
        console.error("Error fetching user bookings:", error);
        return [];
    }
}

export async function updateUser(
    userId: number,
    data: {
        email?: string;
        vorname?: string;
        nachname?: string;
        rolleId?: number;
    }
) {
    try {
        const updatedUser = await prisma.benutzer.update({
            where: {
                id: userId,
            },
            data,
        });
        return updatedUser;
    } catch (error) {
        console.error("Error changing user", error);
        return null;
    }
}
export async function updatePassword(
    userId: number,
    oldPassword: string,
    newPassword: string
) {
    try {
        const user = await prisma.benutzer.findUnique({
            where: {
                id: userId,
            },
        });
        if (user) {
            const isPasswordValid = await bcrypt.compare(
                oldPassword,
                user.passwort
            );
            if (isPasswordValid) {
                const hash = bcrypt.hashSync(newPassword, 12);
                const updatedUser = await prisma.benutzer.update({
                    where: {
                        id: userId,
                    },
                    data: { passwort: hash },
                });
                return true;
            } else {
                return false;
            }
        }
    } catch (error) {
        console.error("Error by changing the password", error);
        return undefined;
    }
}

export async function resetPassword(userId: number) {
    try {
        const hash = bcrypt.hashSync("passwort", 12);
        const updatedUser = await prisma.benutzer.update({
            where: {
                id: userId,
            },
            data: { passwort: hash },
        });
        return updatedUser;
    } catch (error) {
        console.error("Error by changing the password", error);
        return undefined;
    }
}

export async function deleteUser(userId: number) {
    try {
        const deletedUser = await prisma.benutzer.delete({
            where: {
                id: userId,
            },
        });
        return deletedUser;
    } catch (error) {
        console.error("Error deleting user", error);
        return null;
    }
}

export async function deleteVortrag(userId: number, vortragId: number) {
    try {
        const deletedUser = await prisma.vortrag.delete({
            where: {
                id: vortragId,
                benutzerId: userId,
            },
        });
        return deletedUser;
    } catch (error) {
        console.error("Error deleting vortrag", error);
        return null;
    }
}
export async function deleteStand(userId: number, standId: number) {
    try {
        const deletedUser = await prisma.stand.delete({
            where: {
                id: standId,
                benutzerId: userId,
            },
        });
        return deletedUser;
    } catch (error) {
        console.error("Error deleting stand", error);
        return null;
    }
}

export async function getBookingsForTech() {
    try {
        const allTalks = await prisma.vortrag.findMany({
            where: {
                statusId: 3,
            },
        });

        const allStands = await prisma.stand.findMany({
            where: {
                statusId: 3,
            },
        });

        const extendedTalks = allTalks.map((talk) => {
            const {
                benutzerId,
                email,
                ansprechpartner,
                firma,
                telefon,
                statusId,
                ...rest
            } = talk;
            return { ...rest, type: "vortrag" };
        });

        const extendedStands = allStands.map((stand) => {
            const {
                benutzerId,
                email,
                ansprechpartner,
                firma,
                telefon,
                statusId,
                ...rest
            } = stand;
            return { ...rest, type: "stand" };
        });

        return [...extendedTalks, ...extendedStands];
    } catch (error) {
        console.error("Error fetching bookings for technician:", error);
        return [];
    }
}

export async function updatedVortrag(
    userId: number,
    bookingId: number,
    data: {
        thema?: string;
        dauer?: number;
        datum?: string;
        uhrzeit?: string;
    }
) {
    try {
        if (Object.keys(data).length === 0)
            throw new Error("keine daten beigefügt");

        const updatedVortrag = await prisma.vortrag.update({
            where: {
                id: bookingId,
                benutzerId: userId,
            },
            data: {
                ...data,
                statusId: 1,
            },
        });
        return updatedVortrag;
    } catch (error) {
        console.error("Error changing vortrag", error);
        return null;
    }
}

export async function updatedStand(
    userId: number,
    bookingId: number,
    data: {
        bemerkung?: string;
        tag1?: boolean;
        tag2?: boolean;
        tisch?: number;
        stuhl?: number;
    }
) {
    try {
        if (Object.keys(data).length === 0)
            throw new Error("keine daten beigefügt");
        if (!data.tag1 && !data.tag2) throw new Error("tag1 und tag2 false");

        const updatedStand = await prisma.stand.update({
            where: {
                id: bookingId,
                benutzerId: userId,
            },
            data: {
                ...data,
                statusId: 1,
            },
        });
        return updatedStand;
    } catch (error) {
        console.error("Error changing stand", error);
        return null;
    }
}
