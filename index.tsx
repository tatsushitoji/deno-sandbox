import React from 'https://dev.jspm.io/react'
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server'
import { createRouter } from 'https://denopkg.com/keroxp/servest/router.ts'

const router = createRouter()

router.handle('/', async req => {
  await req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html; charset=UTF-8'
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <title>Hello, from Denoland</title>
        </head>
        <body>
          Hello, Deno + jsx !!!!!
        </body>
      </html>
    )
  })
})

router.listen(':8899')
