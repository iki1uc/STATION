# HH/DA – Kandidaten‑Vektor‑System
DA ist der zentrale Kandidaten‑Kern im HH‑System.  
Alle Dateien in diesem Ordner arbeiten nicht mehr zeilenbasiert,  
sondern vektorbasiert.  
Der Übergang von „Textzeilen“ zu „Vektor‑Punkten“ ist hier vollständig umgesetzt.

---

## 1. Prinzip: Zeile → Vektor
Früher:
- Dateien wurden zeilenweise gelesen
- Länge, Wörter, Zeilen = Hauptdaten

Jetzt:
- jede Datei wird als Vektor interpretiert
- Vektor = Länge, Linien, Wörter, RUN‑Punkte, Beam‑Punkte
- DA.tmp ist der Kandidaten‑Vektor

Vektor‑Form:
- LEN   → Anzahl Zeichen
- LINES → Anzahl Zeilen
- WORDS → Anzahl Wörter
- RUN8  → Startpunkt
- RUN32 → Verstärkung
- RUN128 → Expansion

---

## 2. RUN‑Kaskade (Whirl‑Beam‑System)
RUN‑Punkte sind die Vektor‑Stufen:

- RUN‑8   = Startpunkt des Wirbels
- RUN‑32  = RUNC‑Verstärkung
- RUN‑128 = RUNQ‑Expansion

Diese drei Punkte bilden die Whirl‑Beam‑Kaskade.  
DA.tmp wird durch diese RUN‑Punkte aktiviert.

---

## 3. ATTACK.RUN – Aktivierungslogik
ATTACK.RUN ist der Start‑Trigger für den Kandidaten.

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

## 4. Dateien im Ordner HH/DA

### DA.tmp
Kandidatendaten.  
Wird vollständig vektorbasiert verarbeitet.

### BEN.tmp
Rohdaten aus BEN‑Pool.

### C.tmp / X.tmp / Z.tmp
Stationen:
- C = Core
- X = Cross
- Z = Zero

### NE.tmp
Neural‑Daten des Kandidaten.

### ORT.scan
Scan‑Daten aus ORT‑System.

### scan.language
Sprach‑Scan (Tokenisierung).

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

## 5. Pipeline: ZOOM → ORT → HOME

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

DA.tmp ist der Kandidat, der durch diese Pipeline bewertet wird.

---

## 6. Vektor‑Physik (Whirl‑Beam)
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

## 7. Ziel des HH/DA‑Systems
DA.tmp wird zu einem vollständigen Kandidaten‑Vektor:

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

HH/DA ist der Kandidaten‑Kern des gesamten Systems.
