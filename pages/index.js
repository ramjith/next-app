import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home({articles}) {
  return (
    <div>
      <h1 className={styles.header}>Articles List</h1>
      <ul className={styles.container}>
      {
        articles.map((article) => 
          <><li className={styles.list}>
            <Link href={`/articles/${article.id}`}>
                <a>{article.title}</a>
              </Link> 
          </li>
          
          </>
        )
      }
      </ul>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts?limit=10');
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}