# Creació d'un Backend senzill estructurat

En aquest exemple anem a veure l'**API bàsica** construïda amb **Node.js**, **Express**, i **TypeScript**, que implementa operacions de consulta i creació per a usuaris i productes, però estructurant les carpetes i introduint routers i controladors, entre altres.

Concretament, l'API que proporcionarem serà:

| Ruta                    | Descripció                              |
| ----------------------- | --------------------------------------- |
| `GET /api/users/`       | Mostra tots els usuaris del sistema     |
| `GET /api/users/:id`    | Mosta la informació d'un usuari concret |
| `POST /api/users/`      | Afig un nou usuari al sistema           |
| `GET /api/products/`    | Mostra tots els productes del sistema   |
| `GET /api/products/:id` | Mostra informació d'un producte concret |
| `POST /api/products/`   | Afig un nou producte al sistema         |

## Estructura del projecte

La nostra aplicació es compondrà ara dels següents fitxers i directoris:
fer un tree

```bash
.
├── index.ts                  # Llançador de l'aplicació
├── package.json              # Configuració dle projece
├── README.md
├── src
│   └── app
│       ├── data              # Dades de mostra per a l'aplicació
│       │   └── dades.ts
│       └── http                                  # Cap de "presentació"/http
│           ├── controllers                       # Controladors: lògica de l'aplicació
│           │   ├── product.controller.ts
│           │   └── user.controller.ts
│           ├── interfaces                        # Interfaces per a les peticions
│           │   ├── create.product.interface.ts
│           │   └── create.user.interface.ts
│           ├── routes                            # Configuració de l'enrutament
│           │   ├── product.routes.ts
│           │   └── user.routes.ts 
│           └── server.ts                        # Servei
└── tsconfig.json            # Configuració de typescript

```
