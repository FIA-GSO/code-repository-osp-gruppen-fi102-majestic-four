"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
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
            </header>
            <footer className="App-footer">
                <button className="btn btn-primary btn-wide">
                    <Link href="/login">Anmelden</Link>
                </button>
            </footer>
        </div>
    );
}
