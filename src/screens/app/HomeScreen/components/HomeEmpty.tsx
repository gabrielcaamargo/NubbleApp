import React from 'react';
import {ActivityIndicator, Box, Button, Text} from '@components';

interface HomeEmptyProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: HomeEmptyProps) {
  let component = (
    <Text preset="paragraphMedium" bold>
      Não há publicações no seu feed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" bold>
          Não foi possível carregar o feed.
        </Text>

        <Button
          title="Recarregar"
          onPress={refetch}
          preset="outline"
          marginTop="s16"
        />
      </>
    );
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {component}
    </Box>
  );
}
