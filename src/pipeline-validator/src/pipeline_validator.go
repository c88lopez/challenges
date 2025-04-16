package main

import (
	"encoding/json"
	"os"
)

type Job = struct {
	Name      string
	Commands  []string
	DependsOn []string `json:"depends_on"`
}

type PipelineSpecification = struct {
	Name string
	Jobs []Job
}

func findJobByName(jobs []Job, name string) Job {
	var foundJob Job

	for _, job := range jobs {
		if job.Name == name {
			foundJob = job
		}
	}

	return foundJob
}

func followDependencyCycle(
	currentJob Job,
	pipelineSpecification PipelineSpecification,
	trackedJobs []string,
) bool {

	if currentJob.DependsOn == nil || len(currentJob.DependsOn) == 0 {
		return true
	}

	for _, trackedJob := range trackedJobs {
		if trackedJob == currentJob.Name {
			return false
		}
	}

	for _, jobName := range currentJob.DependsOn {
		if jobName == currentJob.Name {
			return false
		}

		return followDependencyCycle(
			findJobByName(pipelineSpecification.Jobs, jobName),
			pipelineSpecification,
			append(trackedJobs, currentJob.Name),
		)
	}

	return true
}

func PipelineValidator(pipelineFileLocation string) string {
	var err error

	fileContent, err := os.ReadFile(pipelineFileLocation)
	if err != nil {
		panic(err)
	}

	var pipelineSpecification PipelineSpecification

	err = json.Unmarshal(fileContent, &pipelineSpecification)
	if err != nil {
		panic(err)
	}

	if pipelineSpecification.Name == "" {
		return "INVALID"
	}

	if pipelineSpecification.Jobs == nil || len(pipelineSpecification.Jobs) == 0 {
		return "INVALID"
	}

	for _, job := range pipelineSpecification.Jobs {
		if job.Name == "" {
			return "INVALID"
		}

		if len(job.Commands) == 0 {
			return "INVALID"
		}

		if !followDependencyCycle(job, pipelineSpecification, []string{}) {
			return "INVALID"
		}
	}

	return "VALID"
}
