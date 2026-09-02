# Documentación técnica de HitoFusión

Sitio HTML estático de la documentación técnica oficial de HitoFusión.

## Contenido inicial

La primera versión preserva el contenido público del sitio anterior:

- Tipos de integraciones con sistemas externos.
- Integración Deltav con Odoo 17.
- Integración Odoo Producción v14.
- Infraestructura e instalación local de Odoo Enterprise 19.0.
- Dimensionamiento de infraestructura para 100 usuarios de Odoo Enterprise 19.
- Alta disponibilidad y recuperación ante contingencias, incluido el caso OneCloud.
- Hiper(N)productividad y casos de inteligencia artificial aplicada mediante Jinzo.
- Introducciones, arquitectura, referencia API y estimaciones.

## Ejecutar localmente

El sitio no requiere compilación. Puede servirse con cualquier servidor HTTP
estático desde la raíz del repositorio. Por ejemplo:

```bash
ruby -run -e httpd . -p 8000
```

Luego abrir <http://localhost:8000>.

El buscador global carga `assets/search-index.json`, generado a partir de los
títulos, encabezados y contenido de las páginas. La tecla `/` lleva el foco al
campo de búsqueda.

## Despliegue

El repositorio incluye `netlify.toml`; Netlify puede publicarlo directamente
sin comando de build. Las páginas usan directorios con `index.html` para
mantener URLs limpias y portables entre proveedores.

## Edición

Cada documento es un archivo HTML autocontenido. Antes de publicar cambios:

1. Revisar navegación lateral y enlaces internos.
2. Verificar la página en escritorio y móvil.
3. Confirmar que ejemplos, credenciales y datos de clientes no contengan
   secretos reales.
