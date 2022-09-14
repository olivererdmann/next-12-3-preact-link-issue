import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      This is a page with a{" "}
      <Link href="/no-link">
        <a>link</a>
      </Link>
    </div>
  );
}
