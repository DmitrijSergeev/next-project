import Link from "next/link";

export default function Home() {
    return (
        <Component/>
    );
}

function Component() {
    return (
        <div>
            <nav>
                <Link href={'/auth/login'}>login</Link>
            </nav>
            Hello!!!
        </div>
    );
}