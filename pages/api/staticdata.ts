import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: any, res: any) {
  console.log("hello");

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  console.log(jsonDirectory);

  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  console.log(fileContents);
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
