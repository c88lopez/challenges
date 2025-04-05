function DesignerPDFViewer(h: number[], word: string): number {
  let maxHeight = 1;

  for (let i = 0; i < word.length; i++) {
    const height = h[word.charCodeAt(i) - 97];

    if (maxHeight < height) maxHeight = height;
  }

  return word.length * maxHeight;
}

export { DesignerPDFViewer };
