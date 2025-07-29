import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
export default function NewsDetailPage({ params }) {
  const slug  = params.slug;
  const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

  if (!newsItem) {
    notFound(); // This will trigger the not-found.js page
  }

  return ( 
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{new Date(newsItem.date).toLocaleDateString()}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}