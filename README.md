# Verhandlungssache

21-Tage-Coach für Verhandlungsführung: Kapitel am Morgen, Lagekammer am Abend. Dieselben Taktiken wie in Polizei-, Militär- und Staatsverhandlungen — geübt an **Gehalt, Kauf, Miete, Job** und an kritischen Lagen.

Kein Einsatzhandbuch. Keine Anleitung zu Straftaten. Suizidale Krise nur als Deeskalation; Hilfe: Telefonseelsorge **0800 111 0 111** / **0800 111 0 222**, bei Gefahr **112** / **110**.

## Am iPhone öffnen

Die App ist eine Website (Safari reicht, kein Offline-Zwang). **Keine eigene Domain kaufen oder eintragen.**

### GitHub Pages ohne Domain

1. Repo auf **Public** stellen (**Settings → General → Change repository visibility**). Privat bleibt die Seite hinter GitHub-Login — am iPhone unbrauchbar.
2. **Settings → Pages**
   - **Source:** GitHub Actions
   - **Custom domain / Benutzerdefinierte Domain:** leer lassen, nicht speichern
3. Beim ersten Deploy fragt GitHub oft, die Umgebung `github-pages` **freizugeben** (grüner Button Approve / Review deployments). Das ist keine Domain, nur eine einmalige Freigabe.
4. Adresse danach automatisch: [https://koenigmi.github.io/Verhandlungssache/](https://koenigmi.github.io/Verhandlungssache/)
5. iPhone-Safari → Teilen → **Zum Home-Bildschirm**

### Schneller ohne Pages: Netlify Drop

Wenn das Domain-Feld blockiert oder Pages hakelig ist: lokal `npm run build`, den Ordner `dist` auf [Netlify Drop](https://app.netlify.com/drop) ziehen. Netlify vergibt selbst eine Adresse wie `irgendwas.netlify.app` — die am iPhone öffnen.

## Lokal

```bash
npm install
npm run dev
```

Build: `npm run build` — Vorschau: `npm run preview`.

## Ablauf

| Block | Tage | Inhalt |
| --- | --- | --- |
| A Handwerk | 1–7 | Mindset, Zuhören, Treppe, Harvard/BATNA, Empathie, kalibrierte Fragen, erstes Telefonat |
| B Alltag | 8–12 | Gehalt, Kauf, Miete/Handwerker, Jobangebot, Hardball |
| C Krise | 13–17 | Instrumentell/expressiv, Geisel, Verbarrikadierung, suizidale Krise, Team |
| D Staat | 18–21 | Waffenstillstand, Frieden/Vertrag, Deals unter Druck, Abschlussmix |

Jeder Tag: Lagebild, Ziel, Modell, Taktiken mit Satzbausteinen, Fallstricke, Alltag-Brücke, Drill. Nach dem Kapitel schaltet die **Lagekammer** frei (Entscheidungs-Quiz mit Coach-Debrief).

Unter **Stand** liegt das One-Sheet und der Schalter „Alle Tage öffnen“.
