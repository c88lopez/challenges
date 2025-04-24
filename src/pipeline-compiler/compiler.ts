import * as fs from "node:fs";
import { parse, stringify } from "yaml";

import { PipelineInput, PipelineLibrary, PipelineOutput } from "./types";

export const PipelineCompiler = (filename: string): PipelineOutput => {
  const fileLocation = `${__dirname}/${filename}`;

  const fileContent = fs.readFileSync(fileLocation);

  const content = fileContent.toString();

  const pipelineInput = parse(content) as PipelineInput;

  const importMap = new Map<string, string>();

  pipelineInput.import.reduce((map, importDefinition) => {
    const key = importDefinition.name;
    const importFileLocation = `${__dirname}/${importDefinition.from}`;

    const importContent = parse(
      fs.readFileSync(importFileLocation).toString(),
    ) as PipelineLibrary;

    importContent.exports.forEach((exportDefinition) => {
      map.set(`${key}.${exportDefinition.name}`, exportDefinition.spec);
    });

    return map;
  }, importMap);

  return {
    name: pipelineInput.name,
    steps: pipelineInput.steps.map((step) => {
      return importMap.get(step.use);
    }),
  };
};
