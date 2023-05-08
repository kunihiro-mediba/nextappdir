import { cache } from "react";

interface Post {
    id: number;
    title: string;
}

interface Params {
    id: string;
}

async function getAllPostData(): Promise<Post[]> {
    const res = await fetch("https://kunihiro-mediba.github.io/data/posts.json");
    return (await res.json()) as Post[];
}

const getPostData = cache(async (id: string): Promise<Post> => {
    const numId = parseInt(id, 10);
    const data = await getAllPostData();
    for (const post of data) {
        if (post.id === numId) {
            return post;
        }
    }
    throw new Error(`Not found post id ${id}`);
});

export async function generateStaticParams() {
    const data = await getAllPostData();
    return data.map((post) => ({
        id: `${post.id}`,
    }));
}

export async function generateMetadata({ params: { id } }: { params: Params }) {
    const post = await getPostData(id);
    return {
        title: post.title,
    };
}

export default async function Page({ params: { id } }: { params: Params }) {
    const post = await getPostData(id);
    return <div>{post.title}</div>;
}
