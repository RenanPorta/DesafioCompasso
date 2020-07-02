import { Router } from 'express';

import { saveCidade, getCidade, getCidadeEstado } from './controller/CidadesController';

const routes = Router()

routes.post('/cidades', saveCidade)
routes.get('/cidade/nome', getCidade)
routes.get('/cidade/estado', getCidadeEstado)

export default routes;