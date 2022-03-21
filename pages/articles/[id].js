import styles from '../../styles/articles.module.css'

const article = ({article}) => {
    return (<div className={styles.articles}>{article.body}</div>)
}

export default article;

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//       props: {
//         article
//       }
//     }
// }



export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await res.json();
  return {
    props: {
        article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts?limit=10');
  const articles = await res.json();
  const paths = articles.map((article) => {
    return {
      params: {id: article.id.toString()}
    }
  });
  return {
    paths,
    fallback: true
  }
}