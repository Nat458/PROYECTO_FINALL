# 🎯 PROYECTO FINAL: Bizcochitos

> Proyecto práctico final desarrollado por: **Martina Vidal**, **Matías Novoa** y **Natalia Muñoz**  
> Tema: Sitio web de **suplementos nutricionales** llamado _Bizcochitos_

---

## 🧭 Paso a Paso General

- ✅ Elegimos el tema del proyecto: **Suplementos nutricionales**
- 🔍 Detectamos la **problemática y posibles soluciones**
- 📊 Elaboramos una **Matriz de Impacto/Esfuerzo** para definir prioridades
- 📝 Realizamos un **modelado visual** (moockup y wireframe)
- 💻 Iniciamos la **programación Frontend y Backend**

---

## 🎨 Frontend - BIZCOCHITOS

- 🔧 Entorno: Visual Studio Code
- 🔧 Entorno: **Github** y **Gitbash**
- 🧩 Tecnologías: **Bootstrap** y **CSS**

---

## 🌐 Detalles de Páginas Web

### 🏠 `index.html`

-  Utilizamos CSS para la edición de esta pagina web.
- Creamos un menú para ubicar subcontenidos con nombre: Proteína, Creatinas, Vitaminas y Ofertas.
- Ubicamos barra de busqueda al inicio-centro de nuestra pagina.
- Ubicamos en el extremo derecho carrito de compras y un usuario.
- Agregamos productos a la página web según requiera cada ítem.
- Agregamos botones para poder agregarlos al carrito.

- ✅ Sección especial: **"Productos Destacados del Mes"**
  - 4 productos con su imagen respectiva, precio e información.

- 🔚 Para finalizar, agreamos nuestro Footer con 4 secciones:

 - **Sección: Atención al cliente**
    - Preguntas Frecuentes
    - Envío y devoluciones
    - Contacto

  - **Sección: Sobre Nosotros**
    - Nuestra Historia
    - Términos y condiciones
    - Políticas de privacidad

  - **Sección: Redes Sociales**
    - Logo de Facebook
    - Logo de Instagram
    - Logo de Twitter

  - **Sección: Suscripción**
    - Barra de correo


---

### 💊 `vitaminas.html`

- Utilizamos Bootstrap para la edición de esta pagina web
- Se implemento un  para el logo, menu de navegación con sus respectivos enlaces.
- Ubicamos en el extremo derecho menú de navegacion que contiene:
    - carrito de compras.
    - Proteinaas
    - Ofertas
    - Creatinas.
    - barra de busqueda.
    - Y se destaca sección (Vitaminas) para señalarnos en que lugar nos ubicamos.

- ✅ Sección especial: **"VITAMINAS"**
   - Agregaremos 6 productos con su imagen respectiva, precio e        infomacion correspondiente.
   - Ubicaremos al termino de nuestra pagina creditos del autor.
   - 2024 Bizcochitos. Todos los derechos reservados.
   -------


### 🔥 `ofertas.html`

- Utilizamos Bootstrap para la edición de esta pagina web
- Se implemento un Navbar con enlaces para el logo, menu de navegación con sus respectivos enlaces.
- Ubicamos en el extremo derecho menú de navegacion que contiene:
    - carrito de compras.
    - Proteinas.
    - vitaminas.
    - Creatinas.
    - barra de busqueda.
    - Y se destaca sección (ofertas) para señalarnos en que lugar nos ubicamos.

- ✅ Sección especial: **"OFERTAS"**
   - Le pondremos por nombre a la sección "ofertas especiales"
   - Agregaremos 3 productos con su imagen respectiva, precio actual y precio con la oferta y su infomacion correspondiente
   - Ubicaremos al termino de nuestra pagina creditos del autor.
   - 2024 Bizcochitos. Todos los derechos reservados.


---

### 💪 `proteinas.html`

- Utilizamos Bootstrap para la edición de esta pagina web
- Se implemento un navbar para el logo, menu de navegación con sus respectivos enlaces.
- Ubicamos en el extremo derecho menú de navegacion que contiene:
   - carrito de compras.
   - ofertas
   - vitaminas.
   - Creatinas.
   - barra de busqueda.
   - Y se destaca sección (proteinas) para señalarnos en que lugar nos ubicamos.

- ✅ Sección especial: **"PROTEINAS"**
   - Le pondremos por nombre a la sección "ofertas especiales"
   - Agregaremos 3 productos con su imagen respectiva, precio actual y su infomacion correspondiente.
   - Ubicaremos al termino de nuestra pagina creditos del autor.
   - 2024 Bizcochitos. Todos los derechos reservados.

---

### ⚡ `creatinas.html`

- Utilizamos Bootstrap para la edición de esta pagina web
- Se implemento un navbar para el logo, menu de navegación con sus respectivos enlaces.
- Ubicamos en el extremo derecho menú de navegacion que contiene:
    - carrito de compras.
    - Proteinas.
    - vitaminas.
    - ofertas.
    - barra de busqueda.
    - Y se destaca sección (creatinas) para señalarnos en que lugar nos ubicamos.

- ✅ Sección especial: **"PROTEINAS"**
   - Le pondremos por nombre a la sección "creatinas"
   - Agregaremos 6 productos con su imagen respectiva, precio actual y su infomacion correspondiente.
   - Ubicaremos al termino de nuestra pagina creditos del autor.
   - 2024 Bizcochitos. Todos los derechos reservados.

------



### 👤 `usuarios.html`

- Se creó el archivo HTML con nombre Usuario.html
- Utilizamos Bootstrap para la edición de esta pagina web.
- Agregamos botones con logos de paginas como: 
    - Instagram.
    - Tiktok.
    - Facebook.
- Para poder ingresar a nuestra pagina de forma externa a la pagina(solo es de manera visual no funcional.)

- 📝 Formularios en contenedor dividido:
  - **Registro**:
    - Nombre, correo, contraseña
    - Mensaje de bienvenida: _¡Hola amig@s!_
  - **Inicio de sesión**:
    - Correo, contraseña,botón ingresar
- © Derechos reservados en la parte de abajo.

---



## 🎨 Desarrollo Backend - API REST

- Enfoque en el **Teorema CAP**
- ⚙️Tecnologías: `Express`, `Mongoose`, `MongoDB`, `Docker`

### 📁 Estructura del Proyecto
- Backend/
  - Curl/
    - requestproduct.http
    - requestuser.http
  - src/
    - config/
      - db.js
    - controllers/
      - product.controllers.js
      - user.controler.js
    - models/
      - products.js
      - user.js
    - routes/
      - auth.routes.js
      - product.routes.js
      - user.routes.js
      - app.js
      - .gitignore
      - docker-compose.yml
      - package-lock.json 
      - package.json
      - server.js
  - Readme.md 



