import fs from "fs";
import path from "path";

export default async function PreviewTextPage(props: {
  params: {
    id: string;
  };
}) {
  console.log("OMG", props);

  const fileContents = await new Promise<string>((resolve, reject) =>
    fs.readFile(path.join("tmp", props.params.id), "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    }),
  );

  console.log("props", props);
  return (
    <div>
      <div>{props.params.id}</div>

      <div>{fileContents}</div>
    </div>
  );
}
