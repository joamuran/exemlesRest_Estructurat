import { Request, Response } from "express";
// Importme les dades d'exemple
import { productes } from "../../data/dades";

// Importem la interfície necessària per a la creació de productes
import { CreateProductInterface } from "../interfaces/create.product.interface";

// Definim (i exportem) la classe pe al controlador
export class ProductController {
    // Definim el mètode/middleware create, per a la creació de productes.
    // Rebem:
    // - req: de tipus Request, amb la petició
    // - res: de tipus Response, per gestionar la resposta
    public create = (req: Request, res: Response) => {
        // Agafem el nom, el preu i l'stock
        // Amb la interfície CreateProductInterface indiquem el format esperat en el body
        // (agafem el nom, el preu i l'stock que defineix la interfície del body)
        const { name, price, stock }: CreateProductInterface = req.body;


        // Comprovem que els valors no siguen nul
        if (!name || !price || !stock) {
            return res.status(400).json({ message: "Cal indicar nom, preu i stock" });
        }

        // Creem el JSON amb el nou producte
        const newProduct = {
            id: (productes.length + 1).toString(),
            name,
            price,
            stock,
            createdAt: new Date().toISOString(),
        };

        // Afegim el producte a la llista de productes
        productes.push(newProduct);

        // I el retornem en la resposta
        res.status(201).json(newProduct);
    };

    // Mètode/Middleware per retornar la llista de productes
    public getAll = (req: Request, res: Response) => {
        res.status(200).json(productes);
    };

    // Mètode/Middleware per retornar les dades d'un producte concret
    public getById = (req: Request, res: Response) => {
        const id = req.params.id;
        const product = productes.find(p => p.id === id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Producte no trobat" });
        }
    };
}
