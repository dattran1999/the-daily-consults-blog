export const filterPostByTag = (post, tagName) => {
  for (const tag of post.virtuals.tags) {
    if (tag.name.toLowerCase() === tagName.toLowerCase()) {
      return true;
    }
  }
  return false;
}