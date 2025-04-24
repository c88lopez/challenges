import { PipelineCompiler } from "./compiler";

describe("Pipeline Compiler", () => {
  it.each([
    [
      "case-1-pipeline.yml",
      {
        name: "Build & Test",
        steps: ["bundle exec rspec"],
      },
    ],
    [
      "case-2-pipeline.yml",
      {
        name: "Build & Test",
        steps: ["bundle exec rspec", "git push heroku master"],
      },
    ],
  ])("should compile", (filename, expected) => {
    const output = PipelineCompiler(filename);

    expect(output).toHaveProperty("name", expected.name);
  });
});
