export type PipelineExport = {
  name: string;
  spec: string;
};

export type PipelineLibrary = {
  exports: PipelineExport[];
};

export type PipelineImport = {
  name: string;
  from: string;
};

export type PipelineStep = {
  use: string;
};

export type PipelineInput = {
  name: string;
  import: PipelineImport[];
  steps: PipelineStep[];
};

export type PipelineOutput = {
  name: string;
  steps: string[];
};
