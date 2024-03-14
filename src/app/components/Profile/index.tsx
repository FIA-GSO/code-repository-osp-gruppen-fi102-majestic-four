import { useBookingListStore } from "@/app/store/booking-list-store";
import React, { useEffect } from "react";
import BookingsListItem from "../BookingListItem";
import Link from "next/link";
import { getUserInfos } from "@/app/actions";
import { useSession } from "next-auth/react";
import { useProfileStore } from "@/app/store/profile-store";

interface IProfile {
    className?: string;
}

const Profile: React.FC<IProfile> = ({ className }) => {
    const session = useSession();

    const {
        email,
        company,
        telefon,
        contactPerson,
        setEmail,
        setCompany,
        setTelefon,
        setContactPerson,
    } = useProfileStore();

    const fetchUser = async () => {
        const data = await getUserInfos(parseInt(session?.data?.user?.id));
        if (data === null || "error" in data) {
            alert(data?.error);
        } else {
            setEmail(data.email);
            setCompany(data.firma || "");
            setTelefon(data.telefon || "");
            if (data.vorname !== null && data.nachname !== null) {
                setContactPerson(data.vorname + " " + data.nachname);
            } else setContactPerson("");
        }
    };
    useEffect(() => {
        console.log("hey");
        if (session.status === "authenticated") fetchUser();
    }, [session]);

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
                        Email: <span className=" text-white">{email}</span>
                    </div>
                    <div className="text-primary text-sm font-bold">
                        Firma: <span className=" text-white">{company}</span>
                    </div>
                    <div className="text-primary text-sm font-bold">
                        Ansprechpartner:{" "}
                        <span className=" text-white">{contactPerson}</span>
                    </div>
                    <div className="text-primary text-sm font-bold">
                        Telefonnummer:{" "}
                        <span className=" text-white">{telefon}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
