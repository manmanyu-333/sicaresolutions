import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section page-wrap">
      <div className="max-w-2xl">
      <h1 className="display text-5xl text-purple">That page is not here</h1>
      <p className="mt-4 text-lg">
        The link may be old. The home page, our story, and the resource notes
        are the useful places to start.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex font-semibold text-purple underline decoration-2 underline-offset-4"
      >
        Back to the home page
      </Link>
      </div>
    </div>
  );
}
