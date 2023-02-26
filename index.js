import { readFileSync } from "node:fs";

export const read = path_to_file => readFileSync(path_to_file, "utf8");

export const read_data = path_to_file =>
	JSON.parse(read(`${ path_to_file }.json`));
