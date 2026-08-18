# msc-web (Titania Web)

Aplicación web desarrollada en **Angular 14** con compatibilidad para **Node.js 14**.

Los datos de inicio de sesión para oauth: `http://localhost:8080/mscServices/oauth/token`

Auth Type: **Basic Auth**
Username: **titania-web**
Password: **12345**

# Application
Usuario: **admin**
Contraseña: **12345**

---

## 📌 Requisitos Previos

Asegúrate de contar con los siguientes entornos instalados en tu sistema:

- **Node.js**: `v14.15.0` o superior (Recomendado `v14.20.x` / `v14.21.x`)
- **npm**: `v6.x` - `v8.x` (incluido con Node 14)
- **Angular CLI**: `^14.2.7`

> 💡 **Recomendación:** Se sugiere usar [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) para gestionar y alternar entre versiones de Node.js.

---

## 🚀 Configuración e Instalación

### 1. Seleccionar la versión de Node.js con NVM

```bash
# Instalar Node 14 (si aún no está instalado)
nvm install 14.20.1

# Usar Node 14 en la sesión actual
nvm use 14.20.1

### Instalar dependencias
```bash
npm install
```

---

## 💻 Comandos de Ejecución

### Servidor de Desarrollo

Inicia el servidor local y abre la aplicación automáticamente en el navegador:

```bash
npm start
```
O directamente con Angular CLI:
```bash
ng serve --open
```

La aplicación se ejecutará en `http://localhost:4200/`. El navegador recargará automáticamente la página si cambias algún archivo fuente.


