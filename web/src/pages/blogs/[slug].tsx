import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  body: string;
};

type BlogProps = {
  post: Post;
};

const BlogPost = ({ post }: BlogProps) => {
  return (
    <article
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{post.title}</h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 400,
          marginBottom: "1rem",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Image
          src={`https://picsum.photos/id/${post.id}/600/400`}
          alt='Example image'
          width={800}
          height={400}
        />
      </div>

      <p style={{ lineHeight: 1.6 }}>{post.body}</p>
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: String(post.id) }, // using post id as slug
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug as string;

  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  if (!postRes.ok) return { notFound: true };
  const post: Post = await postRes.json();

  return {
    props: { post },
    revalidate: 60, // optional: revalidate every 60 seconds
  };
};
