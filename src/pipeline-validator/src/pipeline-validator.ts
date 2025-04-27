export type PipelineValidatorParams = {
  filename: string;
};

export type PipelineValidatorReturn = "VALID" | "INVALID";

export type PipelineJob = {
  name: string;
  commands: string[];
  depends_on: string[];
};

export type PipelineContent = {
  name: string;
  jobs: PipelineJob[];
};

const validateName = (pipelineContent: PipelineContent): void => {
  if (!pipelineContent.name || pipelineContent.name === "") {
    throw new Error("Job name is required");
  }
};

const validateJobs = (pipelineContent: PipelineContent): void => {
  if (!pipelineContent.jobs || pipelineContent.jobs.length === 0) {
    throw new Error("Jobs are required");
  }

  if (pipelineContent.jobs.some((job) => !job.name)) {
    throw new Error("Jobs must have a name");
  }
};

const followDependencyCycle = (
  currentJob: PipelineJob,
  jobs: PipelineContent["jobs"],
  trackedJobs: PipelineJob["name"][],
) => {
  if (trackedJobs.includes(currentJob.name)) {
    throw new Error("Circular dependency detected");
  }

  (currentJob.depends_on ?? []).forEach((job) => {
    const followingJob = jobs.find((isJob) => isJob.name === job);

    if (!followingJob) {
      throw new Error("Dependency does not exist in jobs list");
    }

    followDependencyCycle(followingJob, jobs, [
      currentJob.name,
      ...trackedJobs,
    ]);
  });
};

const validateCircularDependency = (pipelineContent: PipelineContent): void => {
  pipelineContent.jobs.forEach((job) => {
    followDependencyCycle(job, pipelineContent.jobs, []);
  });
};

export const PipelineValidator = ({
  filename,
}: PipelineValidatorParams): PipelineValidatorReturn => {
  const fileContent: PipelineContent = require(`./${filename}`);

  try {
    validateName(fileContent);
    validateJobs(fileContent);
    validateCircularDependency(fileContent);
  } catch (error) {
    // console.error(error);

    return "INVALID";
  }

  return "VALID";
};
