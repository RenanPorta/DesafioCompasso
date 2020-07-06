import { getRepository } from 'typeorm'
import { Cidade } from '../entity/Cidade'
import { Request, Response } from 'express'

export const saveCidade = async (request: Request, response: Response) => {
    try{
        const cidade = await getRepository(Cidade).save(request.body);
        return response.json(cidade);
    }catch{
        return response.status(500).json({ message: 'Erro no cadastro da cidade' })
    }
};

export const getCidade = async (request: Request, response: Response) => {
    try{
        const { nome } = request.body
        const cidade = await getRepository(Cidade).findOne({
            nome: nome
        });
        if(cidade){
            return response.json(cidade);    
        }
        return response.status(404).json({ message: 'Cidade não encontrada' });
    }catch{
        return response.status(500).json({ message: 'Erro ao buscar cidade' })
    }
};

export const getCidadeEstado = async (request: Request, response: Response) => {
    try{
        const { estado } = request.body
        const cidade = await getRepository(Cidade).find({
            estado: estado
        });
        if(cidade[0]){
            return response.json(cidade);    
        }
        return response.status(404).json({ message: 'Nenhuma Cidade encontrada' });
    }catch{
        return response.status(500).json({ message: 'Erro ao buscar cidade' })
    }
};

export const updateCidade = async (request: Request, response: Response) => {
    try{
        const { id } = request.params
        const cidade = await getRepository(Cidade).update(id, request.body)
        if(cidade.affected == 1) {
            const cidadeUpdated = await getRepository(Cidade).findOne(id)
            return response.json(cidadeUpdated)
        }
        return response.status(404).json({ message: 'Cidade não encontrada' })
    }catch{
        return response.status(500).json({ message: 'Erro ao alterar cidade' })
    }
};

export const removeCidade = async (request: Request, response: Response) => {
    try{
        const { id } = request.params
        const cidade = await getRepository(Cidade).delete(id)
        if(cidade.affected == 1) {
            return response.json({ message: 'Cidade removida' })
        }
        return response.status(404).json({ message: 'Cidade não encontrada' })
    }catch{
        return response.status(500).json({ message: 'Erro ao buscar cidade' })
    }
};