const paths = {
  home() {
    return '/';
  },
  showTopic(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  newPost(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  showPost(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
