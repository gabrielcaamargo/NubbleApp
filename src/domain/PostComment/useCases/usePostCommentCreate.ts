import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setError(null);
      setLoading(true);
      await postCommentService.create(postId, message);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {createComment, loading, error};
}
