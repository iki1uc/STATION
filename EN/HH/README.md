# HH – HUMAN/HYPER Kandidaten‑System
HH ist der oberste Kandidaten‑Pool des gesamten Systems.  
Hier werden alle Kandidaten, Stationen, Neural‑Daten, Rohdaten und Scans  
vektorbasiert verarbeitet und für ORT und HOME bereitgestellt.

HH ersetzt vollständig die alte zeilenbasierte Verarbeitung.  
Alle Dateien werden als Vektoren interpretiert.

---

# 1. Prinzip: Zeile → Vektor
Früher:
- Dateien wurden zeilenweise gelesen
- Länge, Wörter, Zeilen = Hauptdaten

Jetzt:
- jede Datei ist ein Vektor
- jeder Vektor besitzt RUN‑Punkte
- jeder Vektor besitzt Beam‑Punkte
- jeder Vektor besitzt Whirl‑Physik

Vektor‑Form:
- LEN   → Anzahl Zeichen
- LINES → Anzahl Zeilen
- WORDS → Anzahl Wörter
- RUN8  → Startpunkt
- RUN32 → Verstärkung
- RUN128 → Expansion

---

# 2. RUN‑Kaskade (Whirl‑Beam‑System)
RUN‑Punkte sind die Vektor‑Stufen:

- RUN‑8   = Startpunkt des Wirbels
- RUN‑32  = RUNC‑Verstärkung
- RUN‑128 = RUNQ‑Expansion

Diese drei Punkte bilden die Whirl‑Beam‑Kaskade.  
Alle HH‑Kandidaten werden durch diese RUN‑Punkte aktiviert.

---

# 3. ATTACK.RUN – Aktivierungslogik
ATTACK.RUN ist der Start‑Trigger für jeden Kandidaten im HH‑System.

ATTACK.RUN aktiviert:
- DA.tmp (Kandidat)
- BEN.tmp (Rohdaten)
- C.tmp / X.tmp / Z.tmp (Stationen)
- NE.tmp (Neural‑Daten)
- ORT.scan (ORT‑Input)
- scan.language (Sprach‑Scan)

ATTACK.RUN startet:
- load.room (Daten‑Lader)
- start.vector (Vektor‑Aktivierung)
- verify.html (Analyse)
- index.html (UI)

ATTACK.RUN ist der Übergang von Zeile → Vektor → RUN.

---

# 4. Ordnerstruktur in HH

## HH/DA – Kandidaten‑Vektor
Enthält:
- DA.tmp
- BEN.tmp
- C.tmp / X.tmp / Z.tmp
- NE.tmp
- ORT.scan
- scan.language
- load.room
- start.vector
- run.tmp
- verify.html
- index.html

DA ist der Hauptkandidat des Systems.

---

## HH/C – Core‑Station
C.tmp enthält die Core‑Station‑Daten.

---

## HH/X – Cross‑Station
X.tmp enthält die Cross‑Station‑Daten.

---

## HH/Z – Zero‑Station
Z.tmp enthält die Zero‑Station‑Daten.

---

## HH/BEN – Rohdaten
BEN.tmp enthält die Rohdaten aus BEN‑Pool.

---

## HH/ORT – ORT‑Input
ORT.scan enthält die ORT‑Scan‑Daten.

---

## HH/LANG – Sprach‑Scan
scan.language enthält die Tokenisierung.

---

# 5. Dateien im HH‑System

### *.tmp
Rohdaten, Kandidaten, Stationen, Neural‑Daten.

### load.room
Lädt alle Dateien und erzeugt ein JSON‑Objekt.

### start.vector
Erzeugt Vektor aus DA.tmp:
- LEN
- LINES
- WORDS
- RUN‑Punkte

### run.tmp
Startsignal für ATTACK.RUN.

### verify.html
Analyse‑UI:
- Vektor
- RUN‑Punkte
- Dateien

### index.html
Kandidaten‑UI:
- Vektor
- Dateien
- RUN‑Beam‑Punkte

---

# 6. Pipeline: ZOOM → ORT → HOME → HH

### ZOOM liefert:
- Achsen
- Farben
- Masken
- Scan‑Vektoren
- Whirl‑Startpunkt

### ORT liefert:
- ORT.scan
- ORT.axis
- ORT.cube
- ORT.respo

### HOME berechnet:
- HOME.score
- HOME.story
- HOME.vector
- HOME.verify

### HH bewertet:
- Kandidaten
- Stationen
- Neural‑Daten
- Rohdaten
- Sprach‑Daten

HH ist der Endpunkt der gesamten Pipeline.

---

# 7. Vektor‑Physik (Whirl‑Beam)
Der Kandidat wird nicht linear bewertet.  
Er wird durch einen Wirbel‑Vektor bewertet:

Whirl‑Beam:
- RUN‑8   → Start
- RUN‑32  → Verstärkung
- RUN‑128 → Expansion

Diese drei Punkte bestimmen:
- Score
- Respo
- Story
- Vector
- Winner

---

# 8. Ziel des HH‑Systems
HH ist der Kandidaten‑Kern des gesamten Systems:

- aktivierbar (ATTACK.RUN)
- analysierbar (verify.html)
- darstellbar (index.html)
- vektorfähig (start.vector)
- pipelinefähig (ZOOM → ORT → HOME)
- scorefähig (HOME.score)
- respo‑fähig (ORT.respo)
- stationfähig (C/X/Z)
- neuralfähig (NE.tmp)
- sprachfähig (scan.language)

HH ist die höchste Bewertungsinstanz des Systems.
