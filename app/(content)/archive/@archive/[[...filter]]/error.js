'use client';
export default function ErrorPage({error}) {
  return (
    <section id="error-page">
      <h1>An error occurred</h1>
      <p>{error.message}</p>
    </section>
  );
}
