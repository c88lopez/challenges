import { PipelineValidator } from "./pipeline-validator";

const testPipelinesFiles = [
  "../valid-one-job-pipeline.json",
  "../valid-multiple-jobs-pipeline.json",
  "../invalid-self-dependency-job.json",
  "../invalid-no-name-job.json",
  "../invalid-no-job.json",
  "../invalid-circular-dependency.json",
];

describe("Pipeline Validator", () => {
  describe("Valid pipeline checks", () => {
    it.each([
      ...testPipelinesFiles
        .filter((filename) => !filename.includes("invalid"))
        .map((filename) => [filename]),
    ])("%s", (filename) => {
      expect(filename).toContain("valid");

      expect(PipelineValidator({ filename })).toBe("VALID");
    });
  });

  describe("Invalid pipeline checks", () => {
    it.each([
      ...testPipelinesFiles
        .filter((filename) => filename.includes("invalid"))
        .map((filename) => [filename]),
    ])("%s", (filename) => {
      expect(filename).toContain("invalid");

      expect(PipelineValidator({ filename })).toBe("INVALID");
    });
  });
});
