import { PipelineCompiler } from "./compiler";
import { stringify } from "yaml";
const { argv } = require("node:process");

const filename = argv[2];

console.log(stringify(PipelineCompiler(filename)));
