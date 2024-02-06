import Link from "next/link";

export default function Login() {
    return (
        <main className="h-screen w-screen flex justify-center items-center bg-slate-400">
            <div className="flex flex-col border-opacity-50">
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <button className="btn btn-active btn-neutral">GAST</button>
                </div>
                <div className="divider">OR</div>
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">E-Mail</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <button className="btn btn-active mt-3 btn-neutral">
                        LOGIN
                    </button>
                </div>
                <div className="flex items-end justify-center mt-3">
                    <Link href={"./register"} className="link link-neutral">
                        Registrieren
                    </Link>
                </div>
            </div>
        </main>
    );
}
