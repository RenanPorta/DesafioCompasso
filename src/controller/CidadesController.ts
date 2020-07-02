import { getRepository } from 'typeorm'
import { Cidade } from '../entity/Cidade'
import { Request, Response } from 'express'

export const saveCidade = async (request: Request, response: Response) => {
    const cidade = await getRepository(Cidade).save(request.body);
    return response.json(cidade);
};

export const getCidade = async (request: Request, response: Response) => {
    const { nome } = request.body
    const cidade = await getRepository(Cidade).findOne({
        nome: nome
    });
    return response.json(cidade);
};

export const getCidadeEstado = async (request: Request, response: Response) => {
    const { estado } = request.body
    const cidade = await getRepository(Cidade).find({
        estado: estado
    });
    return response.json(cidade);
};

export const updateCidade = async (request: Request, response: Response) => {
    const { id } = request.params
    
    const cidade = await getRepository(Cidade).update(id, request.body)
    
    if(cidade.affected == 1) {
        const cidadeUpdated = await getRepository(Cidade).findOne(id)
        return response.json(cidadeUpdated)
    }
    return response.status(404).json({ message: 'Cidade não encontrada' })
};

export const removeCidade = async (request: Request, response: Response) => {
    const { id } = request.params
    
    const cidade = await getRepository(Cidade).delete(id)
    
    if(cidade.affected == 1) {
        return response.json({ message: 'Cidade removida' })
    }
    return response.status(404).json({ message: 'Cidade não encontrada' })
};