#!/bin/bash
# Script para descargar las imágenes del despliegue
# Ejecutar desde la raíz del proyecto: bash scripts/download-images.sh

set -e

BASE_URL="https://5v3f3y2arcaoi.kimi.page/images"
OUT_DIR="public/images"

echo "Creando directorio $OUT_DIR..."
mkdir -p "$OUT_DIR"

IMAGES=(
  "hero.jpg"
  "gallery-1.jpg"
  "gallery-2.jpg"
  "gallery-3.jpg"
  "gallery-4.jpg"
  "gallery-5.jpg"
  "gallery-6.jpg"
  "gallery-7.jpg"
  "gallery-8.jpg"
  "gallery-9.jpg"
)

for img in "${IMAGES[@]}"; do
  echo "Descargando $img..."
  curl -sL -o "$OUT_DIR/$img" "$BASE_URL/$img"
  echo "  OK ($OUT_DIR/$img)"
done

echo ""
echo "Todas las imágenes descargadas en $OUT_DIR/"
echo "Total: ${#IMAGES[@]} imágenes"
