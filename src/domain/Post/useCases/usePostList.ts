import {useEffect, useState} from 'react';
import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(false);
  const [page, setPage] = useState(1);

  async function fetchInitialData() {
    try {
      setLoading(true);
      setError(null);
      const list = await postService.getList(page);
      setPostList(list);
      // TODO: Validate
      setPage(1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading) {
      return;
    }

    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList([...postList, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {postList, error, loading, refresh: fetchInitialData, fetchNextPage};
}
