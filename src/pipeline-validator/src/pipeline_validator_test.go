package main

import "testing"

func TestPipelineValidator(t *testing.T) {
	datatable := []struct {
		filename string
		expected string
	}{
		{"../valid-one-job-pipeline.json", "VALID"},
		{"../valid-multiple-jobs-pipeline.json", "VALID"},
		{"../invalid-no-name.json", "INVALID"},
		{"../invalid-no-name-job.json", "INVALID"},
		{"../invalid-no-job.json", "INVALID"},
		{"../invalid-no-commands-job.json", "INVALID"},
		{"../invalid-self-dependency-job.json", "INVALID"},
		{"../invalid-circular-dependency.json", "INVALID"},
	}

	for _, dataRow := range datatable {
		t.Run(dataRow.filename, func(t *testing.T) {
			result := PipelineValidator(dataRow.filename)

			if result != dataRow.expected {
				t.Errorf("expected %s, got %s", dataRow.expected, result)
			}
		})

	}
}
