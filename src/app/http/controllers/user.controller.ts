import { Request, Response } from "express";
// Importme les dades d'exemple
import { usuaris } from "../../data/dades";

// Importem la interfície necessària per a la creació d'usuaris
import { CreateUserInterface } from "../interfaces/create.user.interface";

// Definim (i exportem) la classe pe al controlador
export class UserController {
    // Definim el mètode/middleware create, per a la creació d'usuaris.
    // Rebem:
    // - req: de tipus Request, amb la petició
    // - res: de tipus Response, per gestionar la resposta
    public create = (req: Request, res: Response) => {
        // Agafem el nom i l'email del body
        // Amb la interfície CreateUserInterface indiquem el format esperat en el body
        // (agafem el name i l'email que defineix la interfície del body)
        const { name, email }: CreateUserInterface = req.body;

        // Comprovem que els valors no siguen nuls
        if (!name || !email) {
            return res.status(400).json({ message: "El nom i l'email són obligatoris" });
        }

        // Creem el JSON amb el nou usuari
        const newUser = {
            id: (usuaris.length + 1).toString(),
            name,
            email,
            createdAt: new Date().toISOString(),
        };

        // Afegim l'usuari a la llista d'usuaris
        usuaris.push(newUser);

        // I retornem l'usuari creat en la resposta
        res.status(201).json(newUser);
    };


    // Mètode/Middleware per retornar la llista d'usuaris
    public getAll = (req: Request, res: Response) => {
        res.status(200).json(usuaris);
    };

    // Mètode/Middleware per retornar les dades d'un usuari concret
    public getById = (req: Request, res: Response) => {
        const id = req.params.id;

        // Mètode find del vector (funció fletxa)
        const user = usuaris.find(u => u.id === id);
        // Seria equivalent a:  const user = usuaris.find( function(u){ return u.id === id});


        if (user) { // Si hem trobat l'usuari, el retornem
            res.status(200).json(user);
        } else { // En cas contrari retornem l'error de recurs no trobat
            res.status(404).json({ message: "Usuari no trobat" });
        }
    };
}
