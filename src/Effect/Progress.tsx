'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import React from 'react';

const Progress = () => {
  return (
    <ProgressBar
      height='4px'
      color='#57adef'
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default Progress;
