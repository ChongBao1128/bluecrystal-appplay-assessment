import { GetStaticProps, InferGetStaticPropsType } from "next";

type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<{
  post: PostProps;
}> = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );

  if (!response.ok) {
    return { notFound: true };
  }

  const post: PostProps = await response.json();

  return {
    props: { post },
    revalidate: 60, // optional: revalidate every 60 seconds
  };
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='mx-auto max-w-3xl p-6'>
      <h1 className='text-3xl font-bold text-gray-900 mb-2'>Post #{post.id}</h1>

      <article className='rounded-2xl border bg-white p-6 shadow-sm'>
        <h2 className='mb-3 text-2xl font-semibold leading-snug text-gray-800'>
          {post.title}
        </h2>
        <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
          {post.body}
        </p>
      </article>
    </div>
  );
};

export default Post;
