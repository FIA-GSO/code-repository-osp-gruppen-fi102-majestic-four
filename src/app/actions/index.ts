"use server";
import {
  prisma
} from "../db.ts";
import {
  Benutzer
} from "@prisma/client";

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
    const newUser = await prisma.benutzer.create({
      data: {
        email,
        passwort: password,
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
  email,
  ansprechpartner,
  telefon,
  firma,
  tisch,
  stuhl,
  bemerkung,
  // Optional fields with default values
  tag1 = false,
  tag2 = false,
  datum = "", // Set the default value to a valid date
  benutzerId,
}: {
  email: string;
  ansprechpartner: string;
  telefon: string;
  firma: string;
  tisch: number;
  stuhl: number;
  bemerkung: string;
  // Optional fields
  tag1?: boolean;
  tag2?: boolean;
  datum?: string; // Specify the type as Date
  benutzerId?: number;
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
        // Optional fields
        tag1,
        tag2,
        datum,
        benutzerId: benutzerId ?? 0, // Set benutzerId to undefined if not provided
      },
    });
    return newStand;
  } catch (error) {
    console.error("Error creating Stand:", error);
    return {
      error: "Can't create Stand.",
    } as const; // Assert the type to ensure TypeScript understands it's a constant value
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
  dauer,
  ansprechpartner,
  firma,
  thema,
  benutzerId,
  email,
  datum,
  uhrzeit,
}: {
  dauer: number;
  ansprechpartner: string;
  firma: string;
  thema: string;
  benutzerId?: number;
  email: string;
  datum: string;
  uhrzeit: string;
}) {
  try {
    const newVortrag = await prisma.vortrag.create({
      data: {
        dauer,
        ansprechpartner,
        firma,
        thema,
        benutzerId: benutzerId ?? 0,
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
export async function getAllVortrags() {
  try {
    const allVortrags = await prisma.vortrag.findMany();
    return allVortrags;
  } catch (error) {
    console.error("Error getting all Vortrags:", error);
    return null;
  }
}

// Function to create a new Firma
// Update createFirma function in your action file
export async function createFirma({
  name,
  ansprechpartner,
  email,
  telefon,
}: {
  name: string;
  ansprechpartner: string;
  email: string;
  telefon?: string | null;
}){
  try {
      const newFirma = await prisma.firma.create({
          data: {
              name,
              ansprechpartner,
              email,
              telefon,
          },
      });
      return newFirma;
  } catch (error) {
    console.error("Error:", error);
      return {
          error: "Can't create Firma.",
      };
  }
}
