# HDF · iki1uc

Dieses Repository bildet die HDF‑Operationsachse für das gesamte iki1uc‑System.

## Struktur

### 9.room
Grundmatrix 9×9 (d–w), Basis für die 81‑Matrix.

### COMMANDS.room
Zuordnung der 9 Hauptbefehle:
d → TMP.1  
e → TMP.2  
…  
w → TMP.9

### 81.room
Vollständige 81‑Matrix:
d1–d9 → TMP.1.1–TMP.1.9  
…  
w1–w9 → TMP.9.1–TMP.9.9

### one.room
Beispiel‑Aufträge:
#SLIDE → SLIDE.hdf  
#HDFRESPO → HDFRESPO.hdf  
#ID → ID.hdf

### tmp.hdf.resolver.js
Resolver für alle HDF‑Dateien im D:/tmp‑Knotenpunkt.

## Zweck

HDF bildet die operative Achse für:

- SLIDE
- ID
- RESPO
- AXI
- RUN8
- TEM
- D:/tmp als Knotenpunkt

## Index

Die neue `index.html` zeigt:

- 81‑Matrix
- TMP‑Resolver‑Status
- TMP‑Knotenpunkt

## ID

Die neue `ID.html` zeigt:

- ID‑Modus
- ID‑HDF‑Status

