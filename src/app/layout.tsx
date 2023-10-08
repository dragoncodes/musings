import React from "react";
import "./main.css";

export default function MyApp(props: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>

      <body>
        <div>{props.children}</div>
      </body>
    </html>
  );
}
