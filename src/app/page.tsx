import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <main className="flex h-[calc(100vh-64px)] bg-base-100 flex-col items-center justify-between p-24">
            <div className=" flex flex-col items-center justify-evenly h-full">
                <p className="p-4 px-20 text-lg prose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                    augue semper porta. Mauris massa. Vestibulum lacinia arcu
                    eget nulla. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur
                    sodales ligula in libero. Sed dignissim lacinia nunc.
                    Curabitur tortor. Pellentesque nibh. Aenean quam. In
                    scelerisque sem at dolor. Maecenas mattis. Sed convallis
                    tristique sem. Proin ut ligula vel nunc egestas porttitor.
                    Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
                    massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
                    ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                    euismod in, nibh. Quisque volutpat condimentum velit. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia,
                    urna non tincidunt mattis, tortor neque adipiscing diam, a
                    cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
                    Suspendisse potenti. Nunc feugiat mi a tellus consequat
                    imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
                    Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                    Integer euismod lacus luctus magna.
                </p>
                {session?.user.rolle !== 1 && (
                    <Link className="btn btn-wide" href="/login">
                        Anmelden
                    </Link>
                )}
            </div>
        </main>
    );
}
