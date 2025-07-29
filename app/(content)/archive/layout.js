

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1> News Archive</h1>
      <section>
        {archive}
      </section>
      <section id="archive-latest">
        {latest}
      </section>
    </div>
  );
}