'use client';

import type { TEditorInstance } from '../../../dist/index';
import { useRef } from 'react'

import dynamic from 'next/dynamic';
const Editor = dynamic(import('../../../dist/index').then(module => module.Editor), { ssr: false });

export default function ExampleEditor() {
  const editorRef = useRef<TEditorInstance>(null);

  return <Editor ref={editorRef} initialValue={'test'} />;
}