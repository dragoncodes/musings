import { execFile } from "child_process";
import fs from "fs";
import os from "os";
import { redirect } from "next/navigation";
import { FileLike } from "openai/uploads";
import path from "path";

const envPath = process.env.PATH;
const binPath = path.join(process.cwd(), "bin");

const binaryPath = path.join(binPath, "pdf-localisator");

process.env.PATH = `${binPath}:${envPath}`;

// async function onSubmit(form: FormData) {
//   "use server";
//
//   const file = form.get("file") as FileLike;
//
//   const tempPath = path.join(os.tmpdir(), "temp.pdf");
//
//   const b = Buffer.from(await file.text());
//
//   fs.createWriteStream(tempPath).write(b);
//
//   console.log("tempPath", tempPath, "saved");
//
//   const fileName = await new Promise<string>((resolve, reject) => {
//     execFile(
//       binaryPath,
//       [tempPath, "bulgarian"],
//       {
//         cwd: path.dirname(binaryPath),
//         env: {
//           ...process.env,
//         },
//       },
//       (error, stdout) => {
//         if (error) {
//           console.error("Error:", error);
//           reject();
//         } else {
//           const resultFileName = file.name.replace(".pdf", ".txt");
//
//           fs.writeFileSync(path.join("tmp", resultFileName), stdout);
//
//           resolve(resultFileName);
//         }
//       },
//     );
//   });
//
//   redirect(`/musings/pdf-localisator/preview/${fileName}`);
// }
async function onSubmit() {
  "use server";

  console.log("Binary path", binaryPath);

  console.log("Calling pdftotext");

  try {
    await new Promise((resolve, reject) => {
      execFile(path.join(binPath, "pdftotext"), ["--help"], (error, stdout) => {
        console.log("pdftotext", error, stdout);
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  } catch (e: unknown) {
    console.log("OMG", e);
  }

  console.log("Calling pdf-localisator");
  try {
    await new Promise((resolve, reject) => {
      execFile(
        binaryPath,
        ["omg", "bulgarian"],
        {
          cwd: path.dirname(binaryPath),
          env: {
            ...process.env,
          },
        },
        (error, stdout) => {
          console.log("Pdf-localisator", error, stdout);

          if (error) {
            console.error("Error:", error);
            reject();
          } else {
            // const resultFileName = file.name.replace(".pdf", ".txt");
            //
            // fs.writeFileSync(path.join("tmp", resultFileName), stdout);
            //
            resolve(stdout);
          }
        },
      );
    });
  } catch (e: unknown) {
    console.log("OMG1", e);
  }
}

export default function PdfLocalisator() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
      <form action={onSubmit}>
        <input type="file" name="file" />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
