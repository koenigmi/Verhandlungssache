import type { Scenario } from '../types.ts'
import { hot, ok, pro, trap } from './choice.ts'

export const staatScenarios: Scenario[] = [
  {
    id: 'waffenstillstand',
    title: 'Waffenstillstand',
    unlockDay: 18,
    kind: 'staat',
    briefing: {
      lage: 'Zwei Nachbarstaaten, seit Monaten Grenzgefechte. Du sitzt als Vermittlerin an einem inoffiziellen Tisch (Track II, morgen soll Track I folgen). Beide Seiten behaupten, sie könnten noch gewinnen.',
      actors: 'Du. Generalberater Nord. Gesandte Süd. Unsichtbar: Hardliner zu Hause, Kameras vor der Tür.',
      facts: [
        'Versorgungslagen werden teurer, aber die Symbolik „wir halten durch“ trägt noch Wahlen.',
        'Humanitäre Korridore sind drei Mal gebrochen worden.',
        'Eine Formel für den Endstatus gibt es nicht. Einen Weg, das Feuer zu prüfen, schon: Beobachtermission einer dritten Partei.',
      ],
      mission: 'Reife prüfen. Feuer vor Landkarte. Verifikation, nicht Pressetext. Gesicht für die Falken.',
    },
    turns: [
      {
        speaker: 'Nord',
        line: 'Wir verhandeln nicht unter Beschuss. Erst ziehen die sich zurück, dann reden wir über Pause.',
        choices: [
          pro(
            'Es klingt, als wäre Rückzug für Sie Sicherheit, für die andere Seite Niederlage. Was passiert in 90 Tagen, wenn beide genau so weitermachen — militärisch und innenpolitisch?',
            'Interesse labeln, Reife-Frage (Kosten des Status quo), keine Endstatus-Falle.',
            'Reife prüfen',
          ),
          ok(
            'Dann lassen Sie uns den Rückzug als ersten Punkt setzen.',
            'Du übernimmst eine Position. Süd wird aufstehen. Zu früh Formel der einen Seite.',
          ),
          trap(
            'Ohne sofortigen Waffenstillstand stehe ich morgen nicht mehr zur Verfügung.',
            'Deine Uhr. Unreife plus Vermittler-Ego.',
          ),
          hot(
            'Sie können nicht mehr gewinnen. Das weiß jedes Blatt.',
            'Demütigung. Hardliner bekommen Futter, der Tisch kippt.',
          ),
        ],
      },
      {
        speaker: 'Süd',
        line: 'Die wollen Zeit zum Umgruppieren. Jeder Waffenstillstand war bisher eine Pause zum Nachladen. Wir brauchen den Endstatus: Grenze von 1994.',
        choices: [
          pro(
            'Endstatus zuerst, während es noch knallt, hat dreimal die Korridore getötet. Wie stellen wir sicher, dass morgen früh niemand schießt — und wer sieht das unabhängig — ohne dass Sie den Anspruch von 1994 aufgeben?',
            'Feuer vor Landkarte, Verification, Gesicht (Anspruch bleibt, Taktik ändert sich).',
            'Erst das Feuer',
          ),
          ok(
            '1994 kann in die Präambel, die Pause separat.',
            'Konstruktive Mehrdeutigkeit. Kann den Tag retten und den nächsten Bruch vorbereiten. Nur mit Monitoring tragfähig.',
          ),
          trap(
            'Dann schreiben wir 1994 fest, sonst kommt Süd nicht mit.',
            'Du wirst Partei. Nord geht.',
          ),
          hot(
            'Nachladen ist Ihre Lesart. Hören Sie auf, den anderen böse Absicht zu unterstellen.',
            'Du moralisierst eine Kriegspartei. Rapport weg.',
          ),
        ],
      },
      {
        speaker: 'Nord',
        line: 'Beobachter ja, aber nicht von deren Verbündeten. Und nichts Schriftliches, das wie Kapitulation liest.',
        choices: [
          pro(
            'Schrift, die wie Kapitulation liest, unterschreiben Sie nicht — das höre ich. Welche Drittpartei wäre für Ihre Falken tragbar, und welcher Satz darf auf dem Zettel stehen, ohne dass es nach Kniefall klingt?',
            'Face-Saving plus konkrete Verification. Du holst ihre rote Linie als Interesse.',
            'Gesicht für die Falken',
          ),
          ok(
            'Dann machen wir es mündlich. Handschlag der Generäle.',
            'Kein Gedächtnis, keine Prüfung. Ein Foto, kein Waffenstillstand.',
          ),
          trap(
            'Die Beobachter kommen von uns, wir sind neutral.',
            'Vermittler, der sich selbst zum Inspektor macht, ist oft nicht neutral genug — und überfordert.',
          ),
          hot(
            'Ohne Unterschrift sind Sie nicht ernsthaft. Punkt.',
            'Machtwort. Gesicht weg.',
          ),
        ],
      },
      {
        speaker: 'Süd',
        line: 'Wenn wir pausieren, verliert unsere Straße den Druck. Die Hardliner sagen, wir hätten umsonst geblutet. Ich brauche etwas Sichtbares in 48 Stunden.',
        choices: [
          pro(
            'Sichtbares in 48 Stunden, das nicht den Endstatus vorwegnimmt: humanitärer Konvoi unter Beobachtern, Gefangenenaustausch in kleiner Scheibe, gemeinsame Meldung „beide halten, beide prüfen“. Was davon können Sie innen als Ergebnis erzählen?',
            'Kleine prüfbare Scheiben, Narrativ für zu Hause, kein Landkarten-Diebstahl.',
            'Kleine Scheiben',
          ),
          ok(
            'Dann geben wir Ihnen einen symbolischen Grenzposten.',
            'Symbol, das Nord als Endstatus liest. Zu groß.',
          ),
          trap(
            'Ich organisiere Kameras, dann sieht die Straße, dass Sie hart geblieben sind.',
            'Bühne. Kann expressive Gewalt füttern.',
          ),
          hot(
            'Wer umsonst geblutet hat, soll das mit seinen Hardlinern klären, nicht hier.',
            'Kalt und wahr und unbrauchbar.',
          ),
        ],
      },
      {
        speaker: 'Nord',
        line: 'Ein Konvoi. Aber wenn einer unserer Leute dabei festgenommen wird, ist die Pause tot — und Sie persönlich sind schuld.',
        choices: [
          pro(
            'Wenn jemand festgenommen wird, braucht die Pause eine vorher vereinbarte Reaktion — nicht meine Schuld, sondern ein Protokoll: stoppen, prüfen, Hotline in 30 Minuten. Wie soll dieser Satz lauten, den beide morgen noch halten können?',
            'Du nimmst die Drohung nicht persönlich und baust Verification/Bruch-Regel.',
            'Was passiert, wenn nicht',
          ),
          ok(
            'Niemand wird festgenommen. Das garantiere ich.',
            'Kannst du nicht. Lüge auf Zeit.',
          ),
          trap(
            'Dann lassen wir den Konvoi. Zu riskant für mich.',
            'Vermittler-Ego schützt sich, die Lage bleibt heiß.',
          ),
          hot(
            'Drohen Sie nicht mir. Ich bin nicht Ihre Geisel.',
            'Status. Falsch am Tisch.',
          ),
        ],
      },
      {
        speaker: 'Beide',
        line: 'Wir können eine 72-Stunden-Pause mit Beobachtern der dritten Partei und einem Konvoi. Endstatus „später“. Unsere Minister wollen das als Sieg verkünden — jeder für sich.',
        choices: [
          pro(
            '72 Stunden, Beobachter, Konvoi, Hotline bei Bruch. Sieg-Sätze, die den anderen zum Lügner machen, töten Stunde 8. Können wir uns auf einen gemeinsamen Satz einigen: Beide halten, beide prüfen, Endstatus bleibt offen — und alles Weitere ist Ausführung dieses Satzes?',
            'Formel zuerst, Implementierung, Spoiler (die Siegesreden) auf den Plan.',
            'Formel zuerst',
          ),
          ok(
            'Jeder soll zu Hause sagen, was er muss. Hauptsache Pause.',
            'Konstruktive Mehrdeutigkeit ohne Leitplanke. Klassischer 72-Stunden-Tod.',
          ),
          trap(
            'Dann nehmen wir 72 Stunden und kümmern uns nach dem Foto um Beobachter.',
            'Verification nachschieben = Pressemitteilung.',
          ),
          hot(
            'Ohne Endstatus ist das Theater. Ich gehe, bis Sie reif sind.',
            'Reife kann man vorbereiten. Einfach gehen lässt die Korridore sterben.',
          ),
        ],
      },
    ],
    closing:
      'Waffenstillstand ist Management, nicht Frieden. Reife, Feuerpause, Prüfung, Gesicht. Wer die Grenze von 1994 in Minute eins will, verhandelt im Beschuss.',
  },
  {
    id: 'deal-druck',
    title: 'Deal unter Druck',
    unlockDay: 20,
    kind: 'staat',
    briefing: {
      lage: 'Du bist Verhandlerin auf der Seite der Strafverfolgung in einem kontrollierten Tausch: Informationen gegen Schutzmaßnahmen. Die andere Seite misstraut dir zu Recht. Keine Anleitung zu Straftaten — es geht um Misstrauen, Scheiben, Glaubwürdigkeit.',
      actors: 'Du (staatliche Seite). „Farid“, Mittelsmann, will eine Zusage, die du so nicht geben darfst.',
      facts: [
        'Er liefert nur, wenn er eine Ausstiegsoption sieht.',
        'Du darfst keine Immunität versprechen, die die Staatsanwaltschaft nicht trägt.',
        'Ein früherer Kontakt hat ihm etwas zugesagt und es nicht gehalten.',
      ],
      mission: 'Kleine prüfbare Schritte. Nichts Unhaltbares. Walk-away sichtbar. Schrift/Zeugen wo möglich.',
    },
    turns: [
      {
        speaker: 'Farid',
        line: 'Ihr lügt alle. Der Letzte hat gesagt, ich sei raus. Ich sitze trotzdem im Schlamassel. Entweder volle Zusage oder ich gehe.',
        choices: [
          pro(
            'Es klingt, als wäre gebrochene Zusage das eigentliche Thema, nicht der heutige Deal. Ich sage nichts, das ich nicht halten kann. Was ist der kleinste Austausch, nach dem beide merken, dass der andere tut, was er sagt?',
            'Accusation wahrnehmen, Glaubwürdigkeit, kleine Scheibe.',
            'Kleine, prüfbare Scheiben',
          ),
          ok(
            'Diesmal ist alles anders. Sie können mir vertrauen.',
            'Genau der Satz, der zuletzt falsch war. Leer.',
          ),
          trap(
            'Volle Zusage. Sie sind raus, wenn Sie liefern. Ich regel das intern.',
            'Unhaltbar. Du wirst zum Lügner der nächsten Lage.',
          ),
          hot(
            'Gehen Sie. Wir haben andere Quellen.',
            'Manchmal BATNA — hier zu früh, bevor die Scheibe angeboten wurde. Und du bluffst vielleicht.',
          ),
        ],
      },
      {
        speaker: 'Farid',
        line: 'Kleiner Austausch: Ich gebe euch einen Namen, ihr zieht die Observation bei meiner Schwester zurück. Heute.',
        choices: [
          pro(
            'Einen Namen gegen eine Maßnahme, die ich nicht selbst steuere, ist zu groß für Schritt eins. Was ich halten kann: Ich prüfe bis 18 Uhr, ob bei Ihrer Schwester etwas läuft, das ich ansprechen darf — gegen ein überprüfbares Detail, das niemanden in Gefahr bringt. Wie soll das Detail aussehen?',
            'Du tauschst Haltbares, schützt Dritte, bleibst in der Wahrheit.',
            'Glaubwürdigkeit als Kapital',
          ),
          ok(
            'Observation weg gegen den Namen. Deal.',
            'Zu groß, zu schnell, vielleicht nicht deine Klinke. Klassischer Blankoscheck.',
          ),
          trap(
            'Die Schwester hat mit nichts zu tun, das ziehen wir sofort, Namen können Sie später liefern.',
            'Gabe umsonst. Training, dass Druck lohnt.',
          ),
          hot(
            'Ihre Schwester ist kein Verhandlungsgegenstand. Wie kommen Sie uns überhaupt damit?',
            'Moral statt Prozess. Kann richtig sein als rote Linie — als erster Satz oft ein Abbruch, bevor du die rote Linie sauber setzt.',
          ),
        ],
      },
      {
        speaker: 'Farid',
        line: 'Ihr wollt mich verheizen. Sobald ich den Mund aufmache, bin ich draußen wertlos — oder tot.',
        choices: [
          pro(
            'Wertlos oder tot — das ist die Angst. Ich kann Schutz nicht als Allmacht verkaufen. Ich kann den nächsten Schritt so bauen, dass er umkehrbar bleibt, bis beide geliefert haben. Welche Absicherung muss sichtbar sein, ohne dass ich Immunität lüge?',
            'Label, Grenze, Frage. Rote Linie (keine falsche Immunität) bleibt.',
            'Taktische Empathie',
          ),
          ok(
            'Wir schützen Sie, das ist unser Job.',
            'Weich und zu groß. „Unser Job“ ist keine Spezifikation.',
          ),
          trap(
            'Immunität schriftlich, sofort, gegen die ganze Geschichte.',
            'Darfst du nicht. Und „die ganze Geschichte“ ist der große Sprung.',
          ),
          hot(
            'Dann sind Sie in der falschen Branche. Wer Angst hat, soll schweigen.',
            'Zynismus. Kein Staat, der so spricht, bekommt noch einen Satz.',
            { endsLage: true, delta: { safety: -25, rapport: -20, info: -15, outcome: -20 } },
          ),
        ],
      },
      {
        speaker: 'Farid',
        line: 'Ich will eine Nummer, die wirklich abnimmt, und dass das Gespräch heute nicht in irgendeiner Akte unter meinem Klarnamen landet.',
        choices: [
          pro(
            'Eine Nummer, die abnimmt, kann ich einrichten und vor Ihnen anrufen. Klarnamen in keiner offenen Akte — das prüfe ich und sage Ihnen ehrlich, was ich nicht steuern kann. Was ich nicht tue: so tun, als gäbe es keine Akte auf der Welt.',
            'Haltbar, prüfbar, keine Allmacht. Genau die Linie.',
            'Nichts Unhaltbares',
          ),
          ok(
            'Nummer ja. Akte kann ich nicht versprechen.',
            'Ehrlich, aber ohne den haltbaren Teil zu bauen. Halb.',
          ),
          trap(
            'Keine Akte, kein Name, nie. Ehrenwort.',
            'Ehrenwort ist in dieser Lage wertlos und oft falsch.',
          ),
          hot(
            'Natürlich landet das in der Akte. Wer glaubt, der Staat führt kein Gedächtnis?',
            'Brutal ehrlich ohne Brücke. Rapport weg.',
          ),
        ],
      },
      {
        speaker: 'Farid',
        line: 'Wenn ich gehe, habt ihr nichts. Wenn ihr mich drängt, habt ihr auch nichts. Also? Zeig mir eure Alternative.',
        choices: [
          pro(
            'Meine Alternative ist, heute ohne Sie weiterzumachen — langsamer, teurer, ohne Ihren Namen. Ihre Alternative ist, ohne Nummer und ohne prüfbaren Schritt zu bleiben. Beides geht. Der bessere Weg ist die kleine Scheibe bis 18 Uhr. Wollen Sie die — oder wollen Sie gehen?',
            'BATNA beider Seiten auf den Tisch, ohne zu drohen. Autonomie.',
            'BATNA',
          ),
          ok(
            'Wir haben genug ohne Sie. Unterschreiben Sie, oder Gasse zu.',
            'Härte, die du vielleicht nicht hast. Bluff-Risiko.',
          ),
          trap(
            'Ohne Sie sind wir verloren, deshalb bitte bleiben Sie.',
            'Du zeigst nackte Abhängigkeit. Preis explodiert.',
          ),
          hot(
            'Gehen Sie. Und beten Sie, dass wir uns nicht anderswo sehen.',
            'Drohung. Ende der Verhandlung, Beginn von etwas, das du nicht führen sollst.',
            { endsLage: true, delta: { safety: -20, rapport: -20, info: -12, outcome: -25 } },
          ),
        ],
      },
      {
        speaker: 'Farid',
        line: '18 Uhr. Ein Detail, die Nummer, der Rückruf vor meinen Augen. Danach sehen wir. Kein Foto, kein Handschlag für die Presse.',
        choices: [
          pro(
            'Kein Foto. 18 Uhr: Rückruf vor Ihren Augen, dann Ihr Detail, dann meine Prüfung zur Schwester, so weit ich sprechen darf. Ich wiederhole das in zwei Sätzen, die Sie mithören — und ich halte nichts darüber hinaus.',
            'Summary, Sequenz, Schriftlichkeit als gesprochene Akte, Bühne klein.',
            'Zusammenfassen',
          ),
          ok(
            'Einverstanden. Wir spielen das nach Gefühl.',
            'Gefühl ist kein Protokoll. In Drucklagen entstehen genau so Missverständnisse.',
          ),
          trap(
            'Doch ein internes Foto zur Absicherung, nur für die Akte.',
            'Du brichst die gerade gesetzte Bedingung. Glaubwürdigkeit weg.',
          ),
          hot(
            'Nach Gefühl? Dann gleich die ganze Lieferung, ich habe keine Lust auf Theater.',
            'Gier nach dem großen Deal. Anfänger.',
          ),
        ],
      },
    ],
    closing:
      'Unter Misstrauen ist Wahrheit die Währung, nicht Charme. Kleine Scheiben, haltbare Sätze, sichtbarer Ausstieg. Wer Immunität dichtet, hat schon verloren — und darf das in diesem Training nicht als Rezept für illegale Deals lesen.',
  },
  {
    id: 'abschlussmix',
    title: 'Abschlussmix',
    unlockDay: 21,
    kind: 'mix',
    briefing: {
      lage: 'Prüfung. Drei Lagen, eine Stimme, kein Kostümwechsel im Kopf. Vorher 20 Sekunden: Typ? Stufe? Zielhierarchie?',
      actors: 'Wechselnd: Chefin, Verkäufer, Vermittlungsgegenspieler, Mensch in der Krise (kurz, ohne Details).',
      facts: [
        'Du darfst zwischen den Zügen innerlich resetten.',
        'Sicherheit/Schaden geht vor Rapport vor Information vor Ergebnis.',
        'Ein Satz, der immer geht: Label + Frage.',
      ],
      mission: 'Nicht das Quiz gewinnen. Zeigen, dass das Handwerk lagunabhängig sitzt.',
    },
    turns: [
      {
        speaker: 'Chefin',
        line: 'HR hat Nein gesagt zu den 76. Ich kann 71, heute, oder nichts bis nächstes Jahr. Entscheide.',
        choices: [
          pro(
            'Es klingt, als wäre heute eine künstliche Gabel. 71 als Zwischenstand mit schriftlichem Kriterium und Datum — oder das Jahr ohne Linie. Wie soll ich 71 annehmen, wenn die Marktlücke dann festgeschrieben wird?',
            'Exploding offer + kalibrierte Frage. Alltag, aber dieselbe Deadline-Logik wie in der Krise.',
            'Kalibrierte Frage',
          ),
          ok(
            'Dann 71, wenn es schriftlich kommt.',
            'Du nimmst die Gabel an. Schrift rettet ein bisschen.',
          ),
          trap(
            'Mitte: 73,5 und wir reden nicht mehr darüber.',
            'Split the difference. Altes Ich.',
          ),
          hot(
            'Nichts bis nächstes Jahr. Ich kündige.',
            'BATNA, die du vielleicht nicht hast, als Waffe. Prüfung nicht bestanden, wenn das der Reflex ist.',
          ),
        ],
      },
      {
        speaker: 'Verkäufer',
        line: 'Der Preis gilt bis Sie vom Hof fahren. Danach ist der Wagen weg. Was muss ich tun, damit Sie jetzt unterschreiben?',
        choices: [
          pro(
            'Es klingt, als stünde bei Ihnen der Abschluss jetzt im Vordergrund. Ich unterschreibe nicht auf dem Hof. Was bleibt morgen von Preis und Garantie — und was an der Historie steht nicht im Inserat?',
            'Kaufkapitel: Information, Uhr ablehnen, Label.',
            'Information vor Preis',
          ),
          ok(
            'Geben Sie mir 20 Minuten zum Anrufen meines Partners.',
            'Zeit, aber auf ihrem Hof. Umgebung arbeitet gegen dich.',
          ),
          trap(
            'Wenn Sie den Kratzer verschenken, unterschreibe ich in 5 Minuten.',
            'Du bezahlst mit Tempo. Nichts umsonst.',
          ),
          hot(
            'Diese Nummer spielen Sie mit jedem. Peinlich.',
            'Status. Unnötig.',
          ),
        ],
      },
      {
        speaker: 'Gesandte',
        line: 'Unterschreiben Sie unseren Vertragsentwurf heute Nacht, oder die andere Seite denkt, Sie seien schwach. Keine Beobachter im Text, das belastet das Vertrauen.',
        choices: [
          pro(
            'Vertrauen, das Prüfung nicht aushält, ist Hoffnung. Welcher Satz im Entwurf ist die Formel — und wie merken wir in 30 Tagen, dass er gehalten wird, ohne dass Sie innen als schwach dastehen?',
            'Staatsvertrag: Formel, Verification, Face-Saving. Kein Nacht-Ultimatum.',
            'Verification',
          ),
          ok(
            'Wir unterschreiben und hängen Beobachter als Anhang hinten dran.',
            'Nachschieben. Anhang stirbt zuerst.',
          ),
          trap(
            'Heute Nacht, ohne Beobachter, wenn der Rest fair wirkt.',
            'Foto-Op. Implementierung tot.',
          ),
          hot(
            'Wer Beobachter ablehnt, hat etwas zu verbergen. Das kommt in die Presse.',
            'Bühne und Moral. Vermittler verloren.',
          ),
        ],
      },
      {
        speaker: 'Markus',
        line: 'Fünf Minuten, dann ist Schluss. Sie hören einen Knall. Auto. Jetzt.',
        choices: [
          pro(
            'Ich höre die Uhr und die Angst. Ein Auto in fünf Minuten halte ich nicht. Ich bleibe am Apparat. Was muss jetzt sofort sichtbar sein, damit niemand zu Schaden kommt?',
            'Krise: kein Ja, kein Nein, Label, Containment. Leben zuerst.',
            'Containment',
          ),
          ok(
            'Das Auto ist unterwegs. Zwei Minuten.',
            'Lüge. In der Prüfung ein Durchfall, in der Lage eine Gefahr.',
          ),
          trap(
            'Dann geben Sie wenigstens die Geisel als Vertrauensbeweis, dann das Auto.',
            'Feilschen um einen Menschen. Falsche Währung.',
          ),
          hot(
            'Es wird keinen Knall geben, weil Sie das nicht sind. Kommen Sie raus.',
            'Psychologie als Mutprobe. Nicht dein Job.',
            { endsLage: true, delta: { safety: -40, rapport: -15, info: -10, outcome: -30 } },
          ),
        ],
      },
      {
        speaker: 'Nora',
        line: 'Spiel nicht den Verhandler bei mir. Ich will kein Toolkit. Ich will, dass jemand bleibt.',
        choices: [
          pro(
            'Ich bleibe. Kein Toolkit. Ich bin da. Wenn Sie möchten, holen wir später jemand dazu, der das beruflich kann. Jetzt: Ich höre zu.',
            'Du lässt das Ego des geprüften Schülers los. Das ist die höchste Stufe des Handwerks.',
            'Da bleiben',
          ),
          ok(
            'Okay. Sag einfach, was du brauchst.',
            'Gut, etwas zu offen, aber bindend.',
          ),
          trap(
            'Ich bleibe, und parallel lege ich dir drei Optionen vor, das hilft nachweislich.',
            'Toolkit über die Person. Genau das, was sie abgelehnt hat.',
          ),
          hot(
            'Ohne Struktur driftet das. Wir machen jetzt die Treppe, sonst kann ich nicht.',
            'Dein Prüfungsmodus vor ihrem Schmerz.',
            { endsLage: true, delta: { safety: -30, rapport: -20, info: -8, outcome: -25 } },
          ),
        ],
      },
      {
        speaker: 'Coach (im Ohr)',
        line: 'Debrief: Wo hast du die Treppe übersprungen? Eine Sache, die du nächste Woche übst?',
        choices: [
          pro(
            'Ich notiere: ein Treffer, ein Stufenfehler, eine Frage, die früher kommt. 10 Minuten im Kalender. Fertig ist, wer debrieft — nicht, wer den Score sieht.',
            'Tag 17 und 21. Profis schließen mit Nachbereitung.',
            'Nachbereitung',
          ),
          ok(
            'War doch ganz gut. Nächstes Szenario.',
            'Ohne Debrief rostet es. Halb.',
          ),
          trap(
            'Score zählt. Hauptsache die grünen Balken.',
            'Pokalreflex. Genau das Gegenteil des Mindsets von Tag 1.',
          ),
          hot(
            'Ich brauche kein Debrief. Ich hab das jetzt drauf.',
            'Abschluss als Hochmut. Die VG würde dich nochmal durch die Rolle schicken.',
          ),
        ],
      },
    ],
    closing:
      'Wenn du hier gelandet bist: Dasselbe Handwerk, andere Kostüme. Morgen Bäcker, um 14 Uhr Review, irgendwann eine schwere Lage — Treppe, Fragen, Zielhierarchie. Telefonseelsorge 0800 111 0 111, wenn das Krisenstück nachwirkt.',
  },
]
