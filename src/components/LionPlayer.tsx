// ANCHOR React
import React from 'react';

// ANCHOR VideoJS
import { VideoJsPlayerOptions, } from 'video.js';

// ANCHOR Hooks
import usePlayer from '../hooks/usePlayer';

// ANCHOR Components
import UncontrolledLionPlayer from './UncontrolledLionPlayer';

export default function LionPlayer(
  props?: VideoJsPlayerOptions,
) {
  const { ref } = usePlayer({ ...props });

  return <UncontrolledLionPlayer playerRef={ref} />;
};

