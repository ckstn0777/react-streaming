import * as React from "react";

export default ({ children, comments, description }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__data = ${JSON.stringify({
            description,
          })};`,
        }}
      ></script>
    </html>
  );
};
