import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
  // return useMutation<{postCommentId: number}, string>(
  //   ({postCommentId}) => postCommentService.remove(postCommentId),
  //   options,
  // );
}
