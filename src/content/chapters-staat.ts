import type { Chapter } from '../types.ts'

export const staatChapters: Chapter[] = [
  {
    day: 18,
    title: 'Waffenstillstand und Kriegsverhandlung',
    block: 'staat',
    duration: '20 Min.',
    situation:
      'Staaten verhandeln unter Feuer, Misstrauen und Publikum. I. William Zartmans Reife-Theorie: Ernsthafte Gespräche beginnen, wenn beide Seiten einen mutually hurting stalemate spüren — und einen Way Out. Vorher ist vieles Theater oder Taktikpause.',
    goal: 'Du erkennst, ob eine Lage reif ist — und was „Gewalt zuerst stoppen, dann die Formel“ in der Praxis heißt.',
    model:
      'Ripeness = Wahrnehmung eines schmerzhaften Patts plus die Ahnung, dass Verhandeln möglich ist. Ohne Way Out bleibt nur die Qual. Waffenstillstand ist Konfliktmanagement, noch nicht Frieden: Er schafft Raum, kann aber den Druck nehmen, der die Reife erzeugt hat. Deshalb: Verifikation, Monitoring, sequenzierte Schritte, Gesichts-Wahrung für Hardliner. Track I (offiziell) braucht oft Track II (inoffizielle Kanäle), damit Formeln entstehen, bevor Kameras laufen.',
    tactics: [
      {
        name: 'Reife prüfen, nicht erzwingen',
        how: 'Fragen: Kann eine Seite noch an eine militärische Lösung glauben? Tut der Status quo beiden weh? Gibt es eine vorstellbare Formel?',
        say: '„Was passiert in 90 Tagen, wenn wir genau so weitermachen? Für Sie — und für uns?“',
      },
      {
        name: 'Erst das Feuer, dann die Landkarte',
        how: 'Ein Ceasefire mit Monitoring ist oft die erste verhandelbare Scheibe. Wer den Endstatus zuerst will, verhandelt Jahre im Beschuss.',
        say: '„Wie stellen wir sicher, dass morgen früh niemand schießt — und wer sieht das unabhängig?“',
      },
      {
        name: 'Gesicht für die Falken',
        how: 'Ohne eine Geschichte für die eigene Härte unterschreibt niemand. Face-Saving ist nicht Weichheit, es ist Implementierung.',
        say: '„Was muss in der Erklärung stehen, damit Sie das innen tragen können — ohne dass wir unsere rote Linie aufgeben?“',
      },
    ],
    pitfalls: [
      'Einen Waffenstillstand mit Frieden verwechseln und die Spoiler vergessen.',
      'Aus Unreife den Tisch verlassen und nichts tun, das später Reife erzeugen könnte (Kanäle, Humanitäres, Track II).',
      'Öffentliche Maximalpositionen, die man privat nicht mehr zurücknehmen kann.',
    ],
    drill:
      'Lagekammer „Waffenstillstand“. Achte darauf, ob du Endstatus und Feuerpause vermischt — und ob du Verifikation vergisst.',
    everydayBridge:
      'Abteilungskrieg: Beide Seiten glauben noch zu gewinnen. Dann ist Mediation Theater. Erst wenn beide merken, dass der Patt das Quartal frisst, wird ein „Waffenstillstand“ (keine Mails an die Geschäftsführung, gemeinsame Faktenbasis) möglich.',
    scenarioId: 'waffenstillstand',
  },
  {
    day: 19,
    title: 'Frieden und Staatsvertrag',
    block: 'staat',
    duration: '20 Min.',
    situation:
      'Nach der Feuerpause kommt die Formel, dann das Kleingedruckte, dann die Jahre der Umsetzung. Verträge scheitern selten am Foto — sie scheitern an Verification, Spoilern und daran, dass Interessen als Positionen zementiert wurden.',
    goal: 'Du baust ein Abkommen so, dass es den Tag nach der Unterschrift überlebt.',
    model:
      'Sequenz: Formel (das große Tauschgeschäft der Interessen) vor Details. Camp David: Souveränität gegen Sicherheit, nicht „wer besitzt den Sand“. Objektive Kriterien und Monitoring (Dritte, Daten, Inspektionen). Implementierung von Tag 1: Wer zahlt, wer prüft, was passiert bei Bruch, wie steigen Hardliner ohne Gesichtsverlust aus. Schriftlichkeit ist nicht Misstrauen, sie ist Gedächtnis.',
    tactics: [
      {
        name: 'Formel zuerst',
        how: 'Einen Satz, den beide als gerecht empfinden können, bevor Annex 14 über Zolltarife kommt.',
        say: '„Können wir uns auf den Satz einigen: Sie bekommen X-Sicherheit, wir bekommen Y-Souveränität — und alles Weitere ist Ausführung dieses Satzes?“',
      },
      {
        name: 'Verification einbauen, nicht nachschieben',
        how: 'Ein Vertrag ohne Prüfung ist eine Pressemitteilung.',
        say: '„Wie merken wir in 30 Tagen, dass das gehalten wird — und was passiert konkret, wenn nicht?“',
      },
      {
        name: 'Spoiler auf den Plan',
        how: 'Wer nicht am Tisch sitzt, kann den Tisch umwerfen. Einbeziehen, isolieren oder absichern — aber nicht ignorieren.',
        say: '„Wer hat ein Interesse daran, dass das scheitert — und was brauchen die, ohne das Abkommen zu töten?“',
      },
    ],
    pitfalls: [
      'Konstruktive Mehrdeutigkeit, die nur den Unterschriftstag rettet und den nächsten Krieg vorbereitet.',
      'Nur Elite-Deals ohne die, die Waffen tragen oder Wahlen gewinnen.',
      'Im Alltag: Handschlag ohne Mail. Siehe Miete, Tag 10.',
    ],
    drill:
      'Nimm einen realen Vertrag (Arbeitsvertrag, Mietvertrag, Kooperationsvereinbarung). Fehlt die Formel? Fehlt Verification? Fehlt der Spoiler-Plan? Einen Satz nachrüsten.',
    everydayBridge:
      'Gesellschaftsvertrag, Ehe, Team-Charta: Dieselbe Architektur. Interessen, Schrift, Review-Termin, was bei Bruch passiert.',
  },
  {
    day: 20,
    title: 'Deals unter Druck und das One-Sheet',
    block: 'staat',
    duration: '20 Min.',
    situation:
      'Hochrisiko-Deals — verdeckte Ermittlung, Tausch unter Misstrauen, Verhandlungen mit jemandem, der lügen darf — laufen über Information, BATNA und Glaubwürdigkeit. Das ist die professionelle Perspektive von Polizei und Staat. Es ist keine Anleitung zu Straftaten. Parallel: Du baust das One-Sheet, mit dem Profis in jede Lage gehen.',
    goal: 'Du verhandelst unter Misstrauen, ohne naiv zu werden und ohne selbst zum Bluffer zu werden — und du gehst nie wieder unvorbereitet in ein Gespräch.',
    model:
      'Unter Druck gelten dieselben Gesetze härter: Nichts umsonst, nichts Unhaltbares, Information vor Commitment, Ausstieg sichtbarer als der Deal. Illegale Märkte (aus Ermittler-Sicht) zeigen in Reinform, was auch Gehalt und Kauf treibt: Vertrauensmangel, asymmetrisches Wissen, die Angst, der Dumme zu sein. Gegenmittel: kleine überprüfbare Schritte, Dritte/Monitoring wo möglich, klare rote Linien, Walk-away. One-Sheet: eine Seite, nicht ein Roman.',
    tactics: [
      {
        name: 'Kleine, prüfbare Scheiben',
        how: 'Nicht der große Sprung. Ein Schritt, den beide sehen können, dann der nächste.',
        say: '„Was ist der kleinste Austausch, nach dem beide merken, dass der andere tut, was er sagt?“',
      },
      {
        name: 'Glaubwürdigkeit als Kapital',
        how: 'Eine Lüge spart fünf Minuten und kostet die Lage. VG, Diplomatie, Gehalt: gleich.',
        say: '„Das kann ich nicht zusagen. Das kann ich: … Bis wann ich es zurückmelde: …“',
      },
      {
        name: 'Das One-Sheet',
        how: 'Vor jeder Lage eine Seite: Typ (instrumentell/expressiv), Zielhierarchie, meine Interessen, ihre vermuteten, BATNA/WATNA beider, rote Linien, 3 Labels, 5 kalibrierte Fragen, 4 Optionen, Coach, Review-Zeit.',
        say: 'Nicht laut. Das Blatt liegt neben dem Telefon. Nachher: Debrief in denselben Feldern.',
      },
    ],
    pitfalls: [
      'Aus Adrenalin den großen Deal wollen. Das ist, wie in der Geisellage alle Forderungen auf einmal zu erfüllen.',
      'Mit Illegalität kokettieren, „weil es spannend ist“. Dieses Training endet, wo Straftaten beginnen.',
      'One-Sheet schreiben und dann ignorieren, sobald Emotion kommt. Deshalb der Coach.',
    ],
    drill:
      'One-Sheet für deine nächste reale Verhandlung ausfüllen (Vorlage in der App unter Fortschritt). Dann Lagekammer „Deal unter Druck“ — oder, wenn du Alltag brauchst, Gehalt/Autokauf noch einmal mit Blatt.',
    everydayBridge:
      'Gebrauchtwagen ohne Historie, Jobangebot mit unklarem Bonus, Vergleichsangebot, das „bis morgen“ gilt: kleine Scheiben, prüfen, One-Sheet, gehen können.',
    scenarioId: 'deal-druck',
  },
  {
    day: 21,
    title: 'Abschlussprüfung',
    block: 'staat',
    duration: '25 Min.',
    situation:
      'Die Lagekammer mischt Alltag und Ausnahmezustand. Du weißt nicht im Voraus, ob die nächste Stimme ein Gehalt, ein Autohaus oder eine Krise ist. Genau so arbeitet ein Profi: dasselbe Handwerk, andere Einsätze.',
    goal: 'Du beweist, dass die Treppe, die Fragen und die Zielhierarchie sitzen — unabhängig vom Kostüm der Lage.',
    model:
      'Vor dem Spiel: 2 Minuten One-Sheet leer ausfüllen (Typ noch offen). Währenddessen: Sicherheit/Schaden zuerst, dann Rapport, dann Information, dann Ergebnis. Nachher: Debrief wie Tag 17. Wer 21 Tage gemacht hat und ehrlich debrieft, hat mehr als die meisten Manager — und die Grundhaltung, die VG und Diplomatie teilen: Die andere Seite ist ein Mensch mit Interessen, nicht ein Feind, den man besiegen muss, um klug zu sein.',
    tactics: [
      {
        name: 'Reset zwischen den Zügen',
        how: 'Jeder neue Sprecher kann eine neue Typisierung brauchen. Nicht den Autohaus-Modus in die Krise mitnehmen.',
        say: 'Innerlich: „Instrumentell oder expressiv? Auf welcher Stufe stehe ich? Was ist jetzt die Zielhierarchie?“',
      },
      {
        name: 'Ein Satz, der immer geht',
        how: 'Wenn das Gehirn leer ist: Label + Frage.',
        say: '„Es klingt, als stünde gerade viel auf dem Spiel. Was muss als Nächstes wahr sein, damit das nicht schlimmer wird?“',
      },
      {
        name: 'Nach der Prüfung weiterüben',
        how: 'Eine echte Lage pro Woche, 10 Minuten Debrief. Fertigkeit rostet.',
        say: 'Kalender: „Verhandlungs-Debrief“, 10 Min., nach dem schwierigen Gespräch der Woche.',
      },
    ],
    pitfalls: [
      'Die Prüfung gewinnen wollen und deshalb tricksen. Der Score ist ein Spiegel, kein Pokal.',
      'Krisen-Züge mit Alltags-Coolness abtun. Sicherheit bleibt die erste Leiste.',
      'Aufhören, weil das Zertifikat in deinem Kopf fertig ist. Profis bleiben in Übung.',
    ],
    drill:
      'Lagekammer „Abschlussmix“. Danach: drei Sätze ins Debrief — ein Treffer, ein Stufenfehler, eine Frage, die du nächstes Mal früher stellst.',
    everydayBridge:
      'Morgen früh: dasselbe Handwerk beim Bäcker, der die falsche Bestellung bringt, und um 14 Uhr im Review. Kein Unterschied in der Taktik, nur im Einsatz.',
    scenarioId: 'abschlussmix',
  },
]
