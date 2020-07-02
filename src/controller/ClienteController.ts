import { getRepository } from 'typeorm'
import { Cliente } from '../entity/Cliente'
import { Request, Response } from 'express'

export const saveCliente = async (request: Request, response: Response) => {
    const cliente = await getRepository(Cliente).save(request.body);
    return response.json(cliente);
};

export const getClienteId = async (request: Request, response: Response) => {
    const { id } = request.params
    const cliente = await getRepository(Cliente).findOne(id)
    return response.json(cliente);
};

export const getClienteNome = async (request: Request, response: Response) => {
    const { nome } = request.body
    const cliente = await getRepository(Cliente).find({
        nomeCompleto: nome
    });
    return response.json(cliente);
}; 

export const updateCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    const { nome } = request.body
    const cliente = await getRepository(Cliente).update(id, {
        nomeCompleto: nome
    })
    if(cliente.affected == 1) {
        const clienteUpdated = await getRepository(Cliente).findOne(id)
        return response.json(clienteUpdated)
    }
    return response.status(404).json({ message: 'Cliente não encontrada' })
};

export const removeCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    
    const cliente = await getRepository(Cliente).delete(id)
    
    if(cliente.affected == 1) {
        return response.json({ message: 'Cliente removido' })
    }
    return response.status(404).json({ message: 'Cliente não encontrado' })
};