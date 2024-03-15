"use server";
import { prisma } from "../db.ts";
import { Benutzer } from "@prisma/client";
import bcrypt from "bcrypt";

export async function getNotificationsByUserID(id: number) {
    try {
        const notifications = await prisma.benachrichtigung.findMany({
            where: { benutzerId: id },
        });
        return notifications;
    } catch (error) {
        console.error("Error getting all Vortrags:", error);
        return null;
    }
}

export async function sendNotifications(
    toUserId: number | null = null,
    message: string,
    toAdmin: boolean = false
) {
    try {
        if (toAdmin === false && toUserId) {
            const newNotification = await prisma.benachrichtigung.create({
                data: {
                    benutzerId: toUserId,
                    nachricht: message,
                },
            });
            return newNotification;
        } else {
            const allAdmin = await prisma.benutzer.findMany({
                where: {
                    rolleId: 1,
                },
            });
            allAdmin.forEach(async (element) => {
                const newNotification = await prisma.benachrichtigung.create({
                    data: {
                        benutzerId: element.id,
                        nachricht: message,
                    },
                });
                return newNotification;
            });
        }
    } catch (error) {
        console.error("Error creating Notification:", error);
        return {
            error: "Can't create Notification.",
        } as const; // Assert the type to ensure TypeScript understands it's a constant value
    }
}

export async function deleteNotification(notificationId: number) {
    try {
        const deletedNotification = await prisma.benachrichtigung.delete({
            where: {
                id: notificationId,
            },
        });
        return deletedNotification;
    } catch (error) {
        console.error("Error deleting Notification:", error);
        return {
            error: "Can't deleting Notification.",
        };
    }
}
