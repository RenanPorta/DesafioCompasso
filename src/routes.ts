import { Router } from 'express';

import { saveCidade, getCidade, getCidadeEstado } from './controller/CidadesController';
import { saveCliente, getClienteNome, getClienteId, removeCliente, updateCliente } from './controller/ClienteController';

const routes = Router()

routes.post('/cidades', saveCidade)
routes.get('/cidade/nome', getCidade)
routes.get('/cidade/estado', getCidadeEstado)

routes.post('/cliente', saveCliente)
routes.get('/cliente/nome', getClienteNome)
routes.get('/cliente/:id', getClienteId)
routes.delete('/cliente/:id', removeCliente)
routes.patch('/cliente/:id', updateCliente) 

export default routes;