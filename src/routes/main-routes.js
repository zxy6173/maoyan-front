import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不用经过权限认证
  // .all('/upload', controllers.upload.default)
  // .get('/api/:name', controllers.api.Get)
  // .post('/api/:name', controllers.api.Post)
  // .put('/api/:name', controllers.api.Put)
  // .del('/api/:name', controllers.api.Delect)
  // .post('/auth/:action', controllers.auth.Post)
  .get('/films/hots', controllers.films.getHots)
  .get('/films/soons', controllers.films.getSoons)
  .get('/films/playings', controllers.films.getPlayings)
  .get('/films/boxOffices', controllers.films.getBoxOffices)
  .get('/films/wantWatches', controllers.films.getWantWatches)
  .get('/films/userGrades', controllers.films.getUserGrades)
  .get('/users', controllers.users.validatePhone)
  .post('/users', controllers.users.register)
  .post('/login', controllers.users.login)
  
module.exports = router
