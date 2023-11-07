import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.get(
    '/static/*',
    serveStatic({
      root: './',
      rewriteRequestPath: (path) => path.replace(/^\/static/, '/static/demo'),
    })
  )
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.get('/', (c) => c.text('You can access: /static/hello.txt'))
app.get('*', serveStatic({ path: './static/fallback.txt' }))


export default app
