import type { Chapter } from '../types.ts'

export const alltagChapters: Chapter[] = [
  {
    day: 8,
    title: 'Gehaltsverhandlung',
    block: 'alltag',
    duration: '20 Min.',
    situation:
      'Du sitzt mit der Führungskraft. Es geht um Geld, aber verhandelt werden Status, Fairness, Angst vor Präzedenz und die Frage, ob du gehst. Profis verhandeln das Gesamtpaket, nicht nur die Zahl.',
    goal: 'Du verankerst Wert, nicht Bedürftigkeit — und du lässt die andere Seite die Zahl mitbauen.',
    model:
      'Vorbereitung: Marktspanne, drei Vergleichspunkte, BATNA (bleiben / intern wechseln / externes Angebot, das du wirklich ziehen würdest). Im Raum: Accusation Audit, Summary bis „Stimmt“, dann kalibrierte Fragen zum Spielraum. Die erste Zahl setzt den Anker — wer unvorbereitet „Was stellen Sie sich vor?“ beantwortet, verschenkt oft 10–20 %. Nie die Differenz teilen („Dann treffen wir uns in der Mitte“). Mitte ist die Lieblingsfalle von Leuten ohne BATNA.',
    tactics: [
      {
        name: 'Wert vor Zahl',
        how: 'Drei konkrete Wirkungen deiner Arbeit, die die andere Seite schon kennt. Dann erst die Spanne.',
        say: '„Es klingt, als wäre Planbarkeit für Sie zentral. In den letzten 12 Monaten habe ich X, Y, Z geliefert. Wie soll eine Einstufung aussehen, die das intern tragfähig macht?“',
      },
      {
        name: 'Spanne statt Punkt',
        how: 'Zielzone nennen, deren unteres Ende schon über deiner Schmerzgrenze liegt. Objektives Kriterium dazu.',
        say: '„Vergleichbare Rollen in der Region liegen zwischen A und B. Ich ziele auf das obere Drittel, weil … Wie sehen Sie das im Verhältnis zu unserer Gehaltsband?“',
      },
      {
        name: 'Paket öffnen',
        how: 'Wenn die Grundzahl fest ist: Bonus, Titel, Review-Datum, Remote, Weiterbildung, Sabbatical-Regelung. Was für die Firma billig und für dich teuer ist.',
        say: '„Wenn die 8 % in diesem Zyklus nicht tragfähig sind: Wie würden ein Review in sechs Monaten plus ein klarer Titel aussehen, den ich nach außen tragen kann?“',
      },
      {
        name: 'Wie-soll-ich-das-annehmen',
        how: 'Ablehnen ohne Krieg. Die Frage zwingt die andere Seite, dein Problem zu lösen oder die Constraint offenzulegen.',
        say: '„Wie soll ich das annehmen, wenn das 12 % unter dem liegt, was der Markt für diese Verantwortung zahlt — und ich das Team trotzdem halten soll?“',
      },
    ],
    pitfalls: [
      'Mit Privatkosten argumentieren („Die Miete ist gestiegen“). Das ist Bedürftigkeit, kein Wert.',
      'Ultimatum „Sonst gehe ich“ ohne echte BATNA. Bluff, der einmal auffliegt, ist verbrannt.',
      'Ein Gegenangebot am selben Nachmittag annehmen, aus Erleichterung.',
    ],
    drill:
      'Schreibe: Zielgehalt, Schmerzgrenze, BATNA, 3 Wertbelege, Accusation Audit (3 Sätze), 4 Paket-Schrauben, 3 kalibrierte Fragen. Das ist dein One-Sheet für Tag 20, schon jetzt in der Gehaltsversion.',
    everydayBridge:
      'Dieselbe Logik gilt für Honorare, Tagessätze, interne Budgetverhandlungen. Immer: Wert, Kriterium, Paket, Frage — nie: Drohung, Mitte, Privatnot.',
    scenarioId: 'gehalt',
  },
  {
    day: 9,
    title: 'Kaufverhandlung',
    block: 'alltag',
    duration: '20 Min.',
    situation:
      'Autohaus, Elektronik, Handwerker, Dienstleister. Die Gegenseite trainiert Abschlüsse. Du trainierst Information, BATNA und das Recht wegzugehen.',
    goal: 'Du kaufst nicht den ersten Preis und nicht die künstliche Frist — du kaufst ein Paket, das du erklären kannst.',
    model:
      'Ackerman-Muster (aus der Krisen- und Deal-Praxis): Zielpreis definieren. Angebote staffeln (ca. 65 / 85 / 95 / 100 % deines Ziels) — jedes Mal mit Empathie, nicht mit Feilschen um Euros. Zwischen den Stufen: Label, kalibrierte Frage, Stille. Nie die Differenz teilen. Zusätzlich: Preis ist eine Variable neben Garantie, Lieferung, Zubehör, Zahlungsart, Rückgaberecht.',
    tactics: [
      {
        name: 'Erst Information, dann Preis',
        how: 'Mängel, Historie, Vergleichsangebote, was schon wie lange steht. Wer den Preis zuerst nennt, verhandelt blind.',
        say: '„Was muss ich über die Historie wissen, das nicht auf dem Zettel steht?“ — „Wie lange steht das Fahrzeug schon?“ — „Was passiert, wenn ich heute nicht kaufe?“',
      },
      {
        name: 'Der höfliche Schreck',
        how: 'Auf den ersten Preis physisch und verbal leicht zurückweichen (Flinch), dann labeln. Nicht beleidigen.',
        say: 'Kurze Pause. „Das liegt deutlich über dem, womit ich gerechnet habe.“ Stille.',
      },
      {
        name: 'Weggehen als Information',
        how: 'Deine BATNA ist der andere Händler, das andere Modell, Nicht-Kaufen. Wer nicht gehen kann, zahlt die Angststeuer.',
        say: '„Ich gehe das über Nacht durch. Wenn das Ihr letzter Preis ist, muss ich schauen, ob ich damit leben kann.“ Dann wirklich gehen.',
      },
      {
        name: 'Manager-Spiel entzaubern',
        how: '„Ich muss den Chef fragen“ ist oft Good-Cop/Bad-Cop. Du verhandelst das System, nicht den netten Menschen vor dir.',
        say: '„Es klingt, als hätten Sie wenig Spielraum. Was müsste wahr sein, damit Ihr Haus bei Garantie und Preis zusammenkommt — und wer entscheidet das?“',
      },
    ],
    pitfalls: [
      '„Nur heute“ / „Der nächste Kunde steht schon da“. Exploding Offer. Gegenmittel: Zeit kaufen oder gehen.',
      'In der Mitte treffen. Der Profi trifft sich nicht in der Mitte, er trifft sich bei Interessen.',
      'Verliebt in den Gegenstand. Emotionale Bindung vor dem Deal ist der teuerste Anker.',
    ],
    drill:
      'Für einen realen Kauf: Zielpreis, Maximalpreis, 3 Mängel-/Vergleichsfragen, Staffel 4 Angebote, ein Satz zum Weggehen. Übe den Flinch einmal vor dem Spiegel — ernst, nicht theatralisch.',
    everydayBridge:
      'Geiselverhandler geben nichts umsonst und akzeptieren keine künstlichen Deadlines. Du auch nicht, nur weil ein Luftballon am Autodach hängt.',
    scenarioId: 'autokauf',
  },
  {
    day: 10,
    title: 'Miete, Immobilie, Handwerker',
    block: 'alltag',
    duration: '15 Min.',
    situation:
      'Wohnen und Bauen sind Langzeitbeziehungen mit Machtgefälle. Hier zählt, was schriftlich wird, und ob du nach dem Handschlag noch miteinander reden kannst.',
    goal: 'Du verhandelst Konditionen und Beziehung gleichzeitig — und lässt Unklares nicht mündlich stehen.',
    model:
      'Menschen vom Problem trennen: Die Vermieterin ist nicht „die Gier“, der Handwerker nicht „der Pfuscher“. Interessen: auf ihrer Seite oft Leerstandrisiko, Nachbarn, Gewährleistung, Cashflow. Auf deiner: Planbarkeit, Mängel, Auszugsklauseln, Zahlungsplan. Objektive Kriterien: Mietspiegel, Vergleichsmieten, VOB/Leistungsverzeichnis, Fotos, Sachverständige.',
    tactics: [
      {
        name: 'Schrift formt die Wirklichkeit',
        how: 'Was nicht im Vertrag/Angebot steht, existiert später nicht. Jede mündliche Zusage sofort in eine Mail gießen.',
        say: '„Damit wir uns nicht falsch erinnern: Ich schicke gleich in zwei Sätzen, dass die Küche bleibt und die Kaution nach der Mängelliste fällig wird. Passt das so?“',
      },
      {
        name: 'Leerstand und Zeit als Hebel',
        how: 'Bei Vermietung ist leerer Monat teurer als kleiner Nachlass. Höflich sichtbar machen, ohne zu drohen.',
        say: '„Wie stellen wir es an, dass die Wohnung nicht noch einen Monat leer bleibt — und ich trotzdem die Klausel zu den Schönheitsreparaturen tragen kann?“',
      },
      {
        name: 'Nachträge statt Krieg',
        how: 'Beim Bauen: Scope freeze. Alles Neue ist ein Nachtrag mit Preis und Zeit, kein „machen Sie doch noch schnell“.',
        say: '„Das zusätzliche Badfenster will ich. Wie sieht der Nachtrag aus — Preis, Tage, was entfällt dafür?“',
      },
    ],
    pitfalls: [
      'Aus Angst vor Wohnungsverlust jede Klausel schlucken. BATNA: andere Wohnung, Zwischenlösung, Zeit.',
      'Handwerker über den Preis demütigen und sich wundern, wenn die Qualität folgt.',
      '„Das machen wir später schriftlich.“ Später ist nie.',
    ],
    drill:
      'Nimm deinen Mietvertrag oder ein Angebot. Markiere 3 unklare Stellen. Formuliere je eine kalibrierte Frage und einen Satz, der die Klärung in eine Mail zwingt.',
    everydayBridge:
      'Staatsverträge scheitern an Implementierung, nicht am Foto-Op. Dein Mietvertrag auch. Tag 19 baut darauf auf.',
  },
  {
    day: 11,
    title: 'Jobangebot, interne Konflikte, Kündigung',
    block: 'alltag',
    duration: '20 Min.',
    situation:
      'Ein Angebot liegt auf dem Tisch, oder das interne Klima kippt, oder jemand will gehen. Hier verhandelst du Identität: Fairness, Gesicht, Zugehörigkeit. Falsch gespielt, verlierst du das Mandat, auch wenn du die Zahl gewinnst.',
    goal: 'Du trennst die Beziehung vom Paket und holst versteckte Entscheider auf den Tisch.',
    model:
      'Jedes Angebot hat einen unsichtbaren Tisch: HR, Fachvorgesetzte, Budgethalter, Partner zu Hause. Black Swans (Voss): die unbekannte Unbekannte, die den Deal kippt — „der CEO hasst Homeoffice“, „die Stelle ist intern schon versprochen“. Kalibrierte Fragen nach dem Rest des Tisches sind Pflicht. Bei Konflikten: Treppe nicht überspringen, kein CC-an-alle-Krieg.',
    tactics: [
      {
        name: 'Das ganze Angebot lesen',
        how: 'Grundgehalt, Bonus-Schwelle, Vesting, Probezeit, Wettbewerbsverbot, Remote, Titel. Eine glänzende Zahl kann ein schlechtes Paket sein.',
        say: '„Was muss ich über Bonus und Probezeit wissen, das in der Mail nicht steht? Wie wird der Bonus in einem normalen Jahr wirklich ausgezahlt?“',
      },
      {
        name: 'Den Rest des Tisches fragen',
        how: 'Wer noch Ja sagen muss, tötet sonst still den Deal.',
        say: '„Wie tragfähig ist das intern — und wer außer Ihnen muss das noch gut finden?“',
      },
      {
        name: 'Counter ohne Brandstiftung',
        how: 'Dank, Summary, Lücke, Frage. Nie das andere Unternehmen als Waffe gegen Menschen, mit denen du noch arbeiten willst.',
        say: '„Ich will das. Gleichzeitig liegt das Grundgehalt 10 % unter dem, womit ich die Rolle nach außen vertreten kann. Wie schließen wir diese Lücke, ohne dass Ihr Band zerbricht?“',
      },
      {
        name: 'Interne Konflikte: privat, konkret, zukunftig',
        how: 'Kein Tribunal. Eine Lage, eine Wirkung, eine Bitte. Accusation Audit zuerst, wenn du der schwierige Part bist.',
        say: '„Es klingt, als hättest du das Gefühl, ich würde Entscheidungen an dir vorbei ziehen. Stimmt das so? Wie stellen wir sicher, dass das nächste Mal ihr beide am Tisch sitzt?“',
      },
    ],
    pitfalls: [
      'Annehmen aus Höflichkeit und intern weitergären.',
      'Mit dem Zweitangebot prahlen. Das zerstört Rapport und oft das Erstangebot.',
      'Kündigung als Überraschungsschlag. Profis kündigen so, dass Brücken stehen bleiben — außer bei Gefahr.',
    ],
    drill:
      'Falls ein Angebot oder Konflikt real ist: Liste aller Entscheider, 3 versteckte Deal-Killer-Fragen, ein Counter-Satz ohne Drohung. Falls nicht: nimm das letzte Jobangebot in der Erinnerung und schreibe, was du damals nicht gefragt hast.',
    everydayBridge:
      'In der Diplomatie heißen die unsichtbaren Spieler Spoiler. In der Firma heißen sie „der Bereichsleiter, der nicht im Call war“. Tag 19.',
    scenarioId: 'jobangebot',
  },
  {
    day: 12,
    title: 'Alltagsfallen: Hardball erkennen',
    block: 'alltag',
    duration: '15 Min.',
    situation:
      'Autohaus, Callcenter, Online-Checkout, „letzte Chance“. Schmutzige Tricks sind standardisiert. Der Profi benennt sie innerlich und antwortet mit Prozess, nicht mit Empörung.',
    goal: 'Du erkennst die fünf häufigsten Fallen in unter drei Sekunden und hast je eine Gegenbewegung.',
    model:
      'Fisher/Ury: Tricks entwaffnen, indem du sie zum Gegenstand machst — höflich, öffentlich, ohne Gegen-Trick. Voss: Illusion of control behalten, künstliche Knappheit nicht als Realität übernehmen. In der Krise heißt dasselbe: keine ultimative Deadline akzeptieren, nur weil jemand laut zählt.',
    tactics: [
      {
        name: 'Exploding Offer',
        how: '„Nur bis 18 Uhr.“ Du kaufst Zeit oder gehst. Wer hetzt, hat meist keinen zweiten Käufer.',
        say: '„Es klingt, als stünde bei Ihnen der heutige Abschluss im Vordergrund. Ich entscheide nicht unter künstlichem Druck. Was bleibt von dem Angebot morgen früh?“',
      },
      {
        name: 'Good Cop / Bad Cop',
        how: 'Netter Verkäufer, böser Chef. Du verhandelst die Institution.',
        say: '„Sie beide wollen denselben Abschluss. Wie sieht das Paket aus, das Ihr Haus wirklich tragen kann — ohne Theater?“',
      },
      {
        name: 'Falsche Knappheit und Social Proof',
        how: '„Drei Interessenten“, Fake-Reviews, Countdown-Timer. Frage nach Überprüfbarem.',
        say: '„Wie kann ich das prüfen?“ Wenn sie das nicht können, ist es Dekoration.',
      },
      {
        name: 'Ankereffekt',
        how: 'Eine absurde erste Zahl zieht dich mit, auch wenn du sie ablehnst. Gegenanker: Kriterium + eigene Spanne, nicht Empörung.',
        say: '„Ich gehe nicht von 49.000 aus, sondern vom Marktvergleich bei 32–34. Wie kommen wir von Ihrer Zahl dorthin, oder wo liegt der Fehler in meinem Vergleich?“',
      },
      {
        name: ' Reciprocity-Falle',
        how: 'Kaffee, Rabatt-Coupon, „ich tu Ihnen einen Gefallen“. Kleine Gaben erzeugen Schuld. Nimm sie als Höflichkeit, nicht als Vertrag.',
        say: 'Innerlich: „Das ist Marketing, kein Kredit.“ Laut: „Danke. Am Preis ändert das für mich nichts, bis das Paket stimmt.“',
      },
    ],
    pitfalls: [
      'Zurücktricksen. Du steigst in ihr Spiel und verlierst den moralischen Anker, den du später brauchst.',
      'Aus Höflichkeit bleiben, obwohl der Prozess manipulativ ist. Gehen ist eine Taktik.',
      'Jeden harten Verhandler für einen Betrüger halten. Härte ≠ Trick. Trick = verdeckte Prozessmanipulation.',
    ],
    drill:
      'Nächste Werbung oder nächstes Verkaufsgespräch: Namen der Falle notieren (Exploding, Anker, Knappheit, Good Cop, Reciprocity). Eine Gegenfrage laut formulieren.',
    everydayBridge:
      'Dieselben Muster tauchen in Staatsverhandlungen auf (künstliche Krisen, letzte Züge vor Mitternacht). Wer sie im Autohaus sieht, sieht sie später am Verhandlungstisch.',
  },
]
