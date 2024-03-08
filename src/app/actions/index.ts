"use server";
import { prisma } from "../db.ts";
import { Benutzer } from "@prisma/client";
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

// Function to create a new user
export async function createUser(email: string, password: string) {
    try {
        const hash = bcrypt.hashSync(password, 12);
        const newUser = await prisma.benutzer.create({
            data: {
                email,
                passwort: hash,
                rolleId: 1,
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

// Function to create a new Stand
export async function createStand(
    email: string,
    ansprechpartner: string,
    telefon: string,
    firma: string,
    tag1: boolean,
    tag2: boolean,
    bemerkung: string,
    datum: Date,
    tisch: number,
    stuhl: number,
    benutzerId: number
) {
    try {
        const newStand = await prisma.stand.create({
            data: {
                email,
                ansprechpartner,
                telefon,
                firma,
                tag1,
                tag2,
                bemerkung,
                datum,
                tisch,
                stuhl,
                benutzerId,
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
export async function createVortrag(
    dauer: number,
    ansprechpartner: string,
    firma: string,
    thema: string,
    benutzerId: number,
    email: string,
    datum: string,
    uhrzeit: string
) {
    try {
        const newVortrag = await prisma.vortrag.create({
            data: {
                dauer,
                ansprechpartner,
                firma,
                thema,
                benutzerId,
                email,
                datum,
                uhrzeit,
            },
        });
        return newVortrag;
    } catch (error) {
        console.error("Error creating Vortrag:", error);
        return {
            error: "Can't create Vortrag.",
        };
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
