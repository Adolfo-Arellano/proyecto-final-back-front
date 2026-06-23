# ✂ Anteiku — Sistema de Turnos para Barbería

**IFTS N° 11 – Tecnicatura Superior en Desarrollo de Software**  
**Materia:** Desarrollo de Sistemas Web – BackEnd/FrontEnd
**Profesores:** Zammataro Gustavo, Balbuena Federico

---

## 🛠 Tecnologías utilizadas

- **Frontend:** Angular 20
- **Backend:** Node.js + Express 5
- **Base de datos:** MongoDB Atlas (Mongoose)
- **Versionado:** Git + GitHub

---

## 🗂 Estructura del proyecto

```
anteiku/
├── backend/
│   ├── controller/
│   ├── database/
│   ├── repository/
│   │   └── model/
│   ├── routers/
│   ├── services/
│   ├── .env
│   └── server.js
└── frontend/
    └── src/
        └── app/
            ├── components/
            │   ├── home/
            │   └── turnos/
            └── services/
```

---

## ⚙️ Cómo correr el proyecto

### Requisitos previos
- Node.js v18 o superior
- Angular CLI (`npm install -g @angular/cli`)
- Cuenta en MongoDB Atlas (o MongoDB local)

### Backend

```bash
cd backend
npm install
```

Crear el archivo `.env` en la carpeta `backend/` con:

```
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/barberapp
```

Luego ejecutar:

```bash
npm start
```

El servidor corre en `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
ng serve
```

La app corre en `http://localhost:4200`

---

## 🌐 Endpoints disponibles

### Peluqueros
| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/peluqueros | Obtener todos los peluqueros |
| POST | /api/peluqueros | Crear un peluquero |

### Servicios
| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/servicios | Obtener todos los servicios |
| POST | /api/servicios | Crear un servicio |

### Turnos
| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/turnos | Obtener todos los turnos |
| GET | /api/turnos/ocupados?peluqueroId=X&fecha=Y | Obtener horarios ocupados |
| GET | /api/turnos/:id | Obtener un turno por ID |
| POST | /api/turnos | Crear un turno |
| PUT | /api/turnos/:id | Actualizar un turno |
| DELETE | /api/turnos/:id | Eliminar un turno |

## 🔄 Flujo de la aplicación

1. El cliente entra al **Home** y ve los barberos y servicios disponibles
2. Hace click en **Reservar turno** en el navbar
3. Completa el formulario con sus datos, elige peluquero, servicio, fecha y hora
4. El sistema verifica que el horario no esté ocupado
5. Si está disponible, el turno se guarda en MongoDB
6. Se muestra la pantalla de confirmación con los datos del turno

---
