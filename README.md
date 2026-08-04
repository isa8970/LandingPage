# Landing Page de CanonScore

Landing móvil creada con React + Vite para presentar los recursos del proyecto CanonScore mediante un código QR.

## 1. Instalar y ejecutar

Necesitas Node.js instalado.

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal, normalmente:

```text
http://localhost:5173
```

## 2. Cambiar enlaces y textos

Edita este archivo:

```text
src/data/projectLinks.js
```

Reemplaza los enlaces que comienzan con `TU-`:

- TikTok promocional.
- Portafolio.
- Video tour.
- SPA CanonScore.
- Documento SRS en SharePoint o Sites.
- Video testimonial.

También puedes cambiar:

- Nombre del proyecto.
- Nombre de la desarrolladora.
- Año.
- Eslogan.
- Descripción.

## 3. Cambiar colores

Edita las variables al inicio de:

```text
src/styles.css
```

Variables principales:

```css
--gold: #f6c453;
--gold-deep: #d98b28;
--red: #b63a49;
--surface: rgba(23, 27, 44, 0.82);
--muted: #aeb4c7;
```

## 4. Cambiar el logotipo

Actualmente se utiliza un logotipo construido con CSS y texto. Si deseas utilizar una imagen:

1. Copia tu archivo a `public/logo-canonscore.png`.
2. Abre `src/components/Brand.jsx`.
3. Sustituye el contenido del componente por una etiqueta `<img>`.

Ejemplo:

```jsx
export default function Brand({ projectName }) {
  return (
    <img
      src="/logo-canonscore.png"
      alt={projectName}
      style={{ width: '190px', height: 'auto' }}
    />
  );
}
```

## 5. Crear versión de producción

```bash
npm run build
```

Vite creará una carpeta llamada `dist`.

## 6. Publicar en Vercel

1. Sube el proyecto a GitHub.
2. Entra a Vercel.
3. Selecciona **Add New Project**.
4. Importa el repositorio.
5. Vercel detectará Vite automáticamente.
6. Presiona **Deploy**.

## 7. Publicar en Netlify

Puedes subir directamente la carpeta `dist` después de ejecutar:

```bash
npm run build
```

## Recomendaciones antes del evento

- Prueba todos los enlaces desde un teléfono que no tenga tu sesión iniciada.
- Configura SharePoint para que cualquier persona con el enlace pueda ver el SRS.
- Mantén la URL pública de la landing estable antes de imprimir el QR.
- Comprueba que los videos puedan reproducirse sin solicitar permisos.
