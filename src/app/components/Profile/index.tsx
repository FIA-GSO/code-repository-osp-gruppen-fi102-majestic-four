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
            className={`${className || ""}  relative border border-neutral rounded-xl p-4 gap-4 flex-initial flex overflow-auto h-fit self-center w-fit bg-base-200 text-base-content justify-evenly`}
        >
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="avatar">
                    <div className="w-24 rounded-full border-4 border-neutral">
                        <div className=" w-full h-full bg-primary text-primary-content flex justify-center items-center font-bold text-6xl ">
                            P
                        </div>
                    </div>
                </div>
                <Link href="/profile" className=" btn btn-primary ">
                    Profil bearbeiten
                </Link>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col gap-2">
                    <div className="text-primary text-sm font-bold">
                        Email:{" "}
                        <span className=" text-base-content">
                            test@email.com
                        </span>
                    </div>
                    <div className="text-primary text-sm font-bold">
                        Firma:{" "}
                        <span className=" text-base-content">Sucuk GmbH</span>
                    </div>
                    <div className="text-primary text-sm font-bold">
                        Ansprechpartner:{" "}
                        <span className=" text-base-content">Hans Meier</span>
                    </div>
                    <div className="text-primary text-sm font-bold">
                        Telefonnummer:{" "}
                        <span className=" text-base-content">012345677</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
