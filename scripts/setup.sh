#!/bin/bash
# Script de configuración inicial del proyecto
# Ejecutar: bash scripts/setup.sh

set -e

echo "=== Més Que Un Joc - Setup ==="
echo ""

# Instalar dependencias
echo "Instalando dependencias..."
npm install

# Descargar imágenes
echo "Descargando imágenes..."
bash scripts/download-images.sh

# Compilar
echo "Compilando..."
npm run build

echo ""
echo "=== Setup completo ==="
echo "Para desarrollo: npm run dev"
echo "Para producción: npm run build"
