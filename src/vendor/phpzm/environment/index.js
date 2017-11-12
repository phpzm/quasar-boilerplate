import { Auth, Http, Crud, Routes, Model, Navigation, Data, View } from 'genesis'

import auth from './auth'
import http from './http'
import crud from './crud'
import routes from './routes'
import model from './model'
import navigation from './navigation'
import data from './data'
import view from './view'

auth(Auth)
http(Http)
crud(Crud)
routes(Routes)
model(Model)
navigation(Navigation)
data(Data)
view(View)
