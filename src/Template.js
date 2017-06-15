import React from "react";

function Template({children}) {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0"/>
      <meta name="google-site-verification"
            content="rEmEq9-LEnUumOQhc_LCscvtriGSk6U68NjRWgXAvoI"/>
      <meta property="og:url"
            content="https://www.palatnyi.com"/>
      <meta property="og:type"
            content="website"/>
      <meta property="og:title"
            content="andrew palatnyi"/>
      <meta property="og:description"
            content="Front-end developer from Kiev, Ukraine. Hire me!"/>
      <meta property="og:image"
            content="http://res.cloudinary.com/palatnyi-com/image/upload/c_scale,h_600,q_auto:eco,w_600/v1497182716/File_000_klaend.jpg"/>
      <meta property="fb:app_id"
            content="1966829860213466"/>
      <title>{"andrew palatnyi - web developer"}</title>
    </head>
    <body>
    <div id="root">
      {children}
    </div>
    <script src="./bundle.js"></script>
    </body>
    </html>
  );
}

export default Template;