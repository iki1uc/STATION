# SLIDE · iki1uc

SLIDE ist die Bewegungs‑ und Positionsachse des iki1uc‑Systems.
Es verbindet CLOCK, CLOU, SHIFT, SLIDE‑Engine, RESPO und den HDF‑Resolver.

## Module

### SLIDE.js
Bewegungs‑Engine:
shift = value × 1.1  
pos   = value × 0.9  
rot   = value × 0.03  

### shift.js
Roh‑Shift‑Modul für direkte Bewegungsoperationen.

### CLOCK.js
Zeit‑Tick‑Modul für Pipeline‑Schritte.

### CLOU.js
Berechnungs‑Modul für FinalCLOU‑Operationen.

### RESPO.js
Respons‑Modul für Stabilität und Auswertung.

### pipeline4.js
Pipeline:
CLOCK → FINALCLOU → SLIDE → RESPO

### tmp.hdf.resolver.js
Resolver für alle HDF‑Dateien im D:/tmp‑Knotenpunkt.

## Dateien

- SLIDE.html  
- ID.html  
- index.html  
- coordinat.html  
- cor.html  
- nat.html  
- di.html  
- shift.js  
- tmp.hdf.resolver.js  

## Zweck

SLIDE bildet die operative Achse für:

- Bewegung  
- Position  
- Rotation  
- Pipeline‑Berechnung  
- HDF‑Integration  
- iki1uc‑ROOT  
