import { useBookingListStore } from "@/app/store/booking-list-store";
import React, { useEffect } from "react";
import BookingsListItem from "../BookingListItem";
import Link from "next/link";

interface IProfile {
    className?: string;
}

const Profile: React.FC<IProfile> = ({ className }) => {
    return (
        <div
            className={`${className || ""} flex flex-col justify-center items-center gap-4 p-4`}
        >
            <div className="flex items-center justify-center gap-4">
                <div className="avatar">
                    <div className="w-24 rounded-full border-4 border-white">
                        <div className=" w-full h-full bg-primary text-primary-content flex justify-center items-center font-bold text-6xl ">
                            P
                        </div>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <div className="text-primary text-xl font-bold">
                        Email:{" "}
                        <span className=" text-white">test@email.com</span>
                    </div>
                    <div className="text-primary text-xl font-bold">
                        Firma: <span className=" text-white">Sucuk GmbH</span>
                    </div>
                    <div className="text-primary text-xl font-bold">
                        Ansprechpartner:{" "}
                        <span className=" text-white">Hans Meier</span>
                    </div>
                    <div className="text-primary text-xl font-bold">
                        Telefonnummer:{" "}
                        <span className=" text-white">012345677</span>
                    </div>
                </div>
            </div>
            <Link href="/profile" className=" btn btn-primary btn-wide">
                Profil bearbeiten
            </Link>
        </div>
    );
};

export default Profile;
