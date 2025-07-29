import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getLatestNews,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
export default function FilteredNewsPage({ params }) {
  const filter = params.filter || [];
  const year = filter[0];
  const month = filter[1];
  let filteredNews = year ? getNewsForYear(year) : [];

  const latestNews = getLatestNews();

  let links = getAvailableNewsYears();
  let newsContent = !filteredNews.length && (
    <p>No news found for selected period. </p>
  );

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }
  if (year && month) {
    filteredNews = getNewsForYearAndMonth(year, month);
    links = [month];
  }

  if(year && !getAvailableNewsYears().includes(+year) || month && !getAvailableNewsMonths(year).includes(+month)) {
    throw new Error(`Invalid filter`);
  }

  return (  
    <>
      <section id="archive-filter">
        <header id="archive-header">
          <nav>
            <ul>
              {links.map((link) => {
                const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

                return (
                  <li key={link}>
                    <Link href={href}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {newsContent}
        </header>

        {year && (
          <section id="archive-year">
            <h2>News for {year}/{month}</h2>
            <NewsList news={filteredNews} />
          </section>
        )}
      </section>

      <section id="archive-latest">
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
      </section>
    </>
  );
}
