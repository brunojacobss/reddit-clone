import CommentList from '@/components/comments/comment-list';
import CreateCommentForm from '@/components/comments/create-comment-form';
import ShowPost from '@/components/posts/show-post';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import paths from '@/paths';
import Link from 'next/link';
import { Suspense } from 'react';

interface ShowPostPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default function ShowPostPage({ params }: ShowPostPageProps) {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.showTopic(slug)}>
        {'< '}Back to {slug}
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowPost postId={postId} />
      </Suspense>
      <CreateCommentForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}
