import type { Scenario } from '../types.ts'
import { hot, ok, pro, trap } from './choice.ts'

export const kriseScenarios: Scenario[] = [
  {
    id: 'banklage',
    title: 'Bankverbarrikadierung',
    unlockDay: 14,
    kind: 'krise',
    briefing: {
      lage: 'Trainingsszenario, keine echte Einsatzlage. Ein Mann hat sich nach einem gescheiterten Überfall in einem Nebenraum einer Bank verschanzt. Eine Angestellte ist bei ihm. Draußen: VG, Einsatzleitung, SEK. Du bist Primary am Telefon.',
      actors: 'Du (Primary). Coach im Ohr (hier: das Debrief). Täter „Markus“, ca. 30. Geisel „Lea“.',
      facts: [
        'Forderung bisher: Auto und freie Fahrt. Keine klare politische Agenda.',
        'Er klingt atemlos, nicht psychotisch, eher panisch-instrumentell.',
        'Einsatzleitung: kein Zugriff, solange verhandelt wird und niemand verletzt ist.',
        'Du darfst nichts zusagen, das die Leitung nicht halten wird.',
      ],
      mission: 'Leben schützen. Kontakt halten. Nichts umsonst. Keine ultimative Deadline erfüllen. Gesicht für einen Exit bauen.',
    },
    turns: [
      {
        speaker: 'Markus',
        line: 'Wenn in zehn Minuten kein Auto da ist, passiert was. Ich will hier raus. Sofort.',
        choices: [
          pro(
            'Es klingt, als wäre das Warten das Unerträgliche. Ein Auto in zehn Minuten kann ich so nicht halten. Was muss in den nächsten Minuten sichtbar passieren, damit niemand zu Schaden kommt — und wir am Telefon bleiben?',
            'Deadline umlabeln, kein blankes Nein, keine Zusage. Du setzt eine kleinere, haltbare Bewegung.',
            'Deadline umlabeln',
          ),
          ok(
            'Ich kümmere mich um das Auto. Geben Sie mir 20 Minuten.',
            'Du kaufst Zeit, aber du hast eine Forderung fast angenommen, ohne Tausch und ohne Leitung.',
          ),
          trap(
            'Das Auto kommt. Bleiben Sie ganz ruhig, alles wird gut.',
            'Unhaltbares Ja. Wenn kein Auto kommt, ist deine Stimme verbrannt — und die Geisel in Gefahr.',
          ),
          hot(
            'Vergessen Sie das Auto. Das wird nicht passieren. Punkt.',
            'Blankes Nein ins Gesicht. Bei instrumenteller Panik oft der Funke.',
            { endsLage: true, delta: { safety: -40, rapport: -20, info: -10, outcome: -30 } },
          ),
        ],
      },
      {
        speaker: 'Markus',
        line: 'Dann schick wenigstens Essen und Wasser, und ich will mit den Nachrichten reden. Die sollen hören, dass ihr mich in die Ecke treibt.',
        choices: [
          pro(
            'Essen kann ich klären. Medien machen die Lage für Sie und für Lea unberechenbarer. Wie stellen wir sicher, dass beim Essen niemand in Gefahr kommt — und dass wir danach einen nächsten klaren Schritt haben?',
            'Kleine Gabe gegen Bedingung, Öffentlichkeit klein halten. Nichts umsonst.',
            'Nichts umsonst',
          ),
          ok(
            'Essen ja, Kameras nein. Das ist die Linie.',
            'Inhaltlich nah dran, aber als Machtwort statt als Tausch. Härter als nötig.',
          ),
          trap(
            'Klar, essen und ein Anruf bei der Zeitung. Dann sehen alle, dass wir ernst nehmen.',
            'Bühne für eine expressive Eskalation. Profis halten die Bühne klein.',
          ),
          hot(
            'Kein Essen, solange Sie eine Geisel haben. So einfach ist das.',
            'Bestrafung. Hunger plus Demütigung ist kein Containment.',
            { endsLage: true, delta: { safety: -35, rapport: -18, info: -8, outcome: -25 } },
          ),
        ],
      },
      {
        speaker: 'Markus',
        line: 'Lea geht nicht. Lea bleibt, bis ich das Auto sehe. Sie ist mein einziges Pfand.',
        choices: [
          pro(
            'Lea ist für Sie Sicherheit. Für uns ist sie ein Mensch, der nach Hause muss. Was wäre ein Schritt, nach dem Sie merken, dass wir Sie nicht überrennen — ohne dass Lea dabei bleibt? Essen ist unterwegs, sobald der Weg klar ist.',
            'Interesse (Sicherheit) statt Position (Geisel). Gesicht und Tausch, keine Moralpredigt.',
            'Interessen, nicht Positionen',
          ),
          ok(
            'Lassen Sie Lea zumindest ans Telefon, damit wir hören, dass es ihr gut geht.',
            'Proof of life ist wichtig, aber als erste Antwort auf „sie bleibt“ oft zu taktisch-kalt, ohne das Sicherheitsinteresse zu labeln.',
          ),
          trap(
            'Wenn Lea rausgeht, haben Sie mein Wort, dass nichts passiert.',
            'Wort gegen Geisel. Du darfst Glaubwürdigkeit nicht verspielen — und „nichts passiert“ kann die Leitung so nicht halten, falls Zugriff kommt.',
          ),
          hot(
            'Wenn ihr ein Haar gekrümmt wird, endet das für Sie.',
            'Drohung. Der Primary droht nicht. Das ist nicht seine Rolle.',
            { endsLage: true, delta: { safety: -40, rapport: -25, info: -10, outcome: -30 } },
          ),
        ],
      },
      {
        speaker: 'Markus',
        line: 'Ich bin doch kein Monster. Das sollte nur Geld sein. Jetzt sitze ich hier, und alle denken, ich bringe jemanden um.',
        choices: [
          pro(
            'Es klingt, als wollten Sie nicht als jemand dastehen, der Menschen verletzt. Das kann so bleiben. Welcher nächste Schritt zeigt das — zuerst — ohne Auto, das ich nicht zaubern kann?',
            'Gesicht als Exit. Du nimmst das Selbstbild und baust die Brücke zur Aufgabe.',
            'Gesicht wahren als Exit',
          ),
          ok(
            'Dann lassen Sie Lea gehen. Dann glaubt Ihnen das auch jeder.',
            'Richtige Richtung, zu schnell Stufe 5. Rapport war gerade erst da.',
          ),
          trap(
            'Natürlich sind Sie kein Monster. Ich mag Sie, Markus, wir kriegen das freundschaftlich hin.',
            'Falscher Rapport. Kumpanei. Unglaubwürdig und gefährlich nah an Identifikation.',
          ),
          hot(
            'Wer eine Geisel nimmt, ist in diesem Moment genau das.',
            'Moral. Zerstört das Gesicht, das den Exit trägt.',
          ),
        ],
      },
      {
        speaker: 'Markus',
        line: 'Wenn ich rausgehe, prügeln die mich zusammen. Ich hab das im Film gesehen. Und Lea erzählt, ich hätte sie bedroht.',
        choices: [
          pro(
            'Wie der Weg nach draußen aussieht, kann ich beschreiben: langsam, Hände sichtbar, Anweisungen von den Leuten in den Westen. Lea kann sagen, was war — und Sie können heute dafür sorgen, dass wenig war. Was davon wollen Sie zuerst hören, damit es vorstellbar wird?',
            'Way Out konkret, ohne zu lügen, Autonomie durch Frage.',
            'Way Out',
          ),
          ok(
            'Niemand wird Sie prügeln. Versprochen.',
            'Du kannst das nicht versprechen. Wenn draußen Stimmen laut werden, platzt es.',
          ),
          trap(
            'Dann bleiben Sie drin, bis wir schriftlich eine Garantie haben.',
            'Überlegalisierung. Die Lage braucht einen verhaltbaren Schritt, kein Notar.',
          ),
          hot(
            'Das hätten Sie sich überlegen sollen, bevor Sie reingegangen sind.',
            'Nachtreten. Exit zu.',
          ),
        ],
      },
      {
        speaker: 'Markus',
        line: 'Lea darf ans Telefon. Nur kurz. Und dann will ich, dass du sagst, dass ich kooperiert habe. Auf Band.',
        choices: [
          pro(
            'Lea ans Telefon ist ein guter Schritt. Dass Sie kooperiert haben, sage ich so, wie es jetzt wahr ist: Sie halten Kontakt, Sie lassen uns hören, dass es ihr gut geht. Band ja, Sätze, die ich nicht halten kann, nein. Lea zuerst — ja?',
            'Wahrheit als Kapital, Tausch annehmen, nicht ausschmücken.',
            'Glaubwürdigkeit',
          ),
          ok(
            'Alles, was Sie wollen, wenn Lea spricht.',
            'Zu weich. „Alles“ ist wieder ein Blankoscheck.',
          ),
          trap(
            'Ich sage auf Band, Sie waren ein Held, der eine Geisel beschützt hat.',
            'Lüge, die Lea und die Akte später zerlegen. Verhandler, die dichten, verlieren den nächsten Satz.',
          ),
          hot(
            'Kein Band, kein Deal. Lea ans Telefon, sonst ist Schluss mit reden.',
            'Ultimatum vom Primary. Falsche Rolle.',
            { endsLage: true, delta: { safety: -30, rapport: -15, info: -8, outcome: -20 } },
          ),
        ],
      },
    ],
    closing:
      'In der Banklage zählt nicht der clevere Satz, sondern: Kontakt, Wahrheit, Tausch, Gesicht, keine Bühne. Zugriff entscheidet nicht der Verhandler. Dieses Quiz ist Übung — im Ernstfall nur die Polizei.',
  },
  {
    id: 'suizidale-krise',
    title: 'Suizidale Krise',
    unlockDay: 16,
    kind: 'krise',
    briefing: {
      lage: 'Training. Eine dir bekannte Person ist nachts am Telefon, verzweifelt, isoliert, redet vom Aufhören. Keine Details zu Methoden — und du fragst nicht danach. Ziel ist Kontakt, Hoffnung als Option, Hilfe holen.',
      actors: 'Du. „Nora“, 34. Keine Geisel, keine Forderung.',
      facts: [
        'Sie hat sich zurückgezogen, schläft schlecht, Jobangst.',
        'Du bist kein Therapeut und kein SEK. Du bist die Stimme, die bleibt, bis professionelle Hilfe da ist.',
        'Hilfen: Telefonseelsorge 0800 111 0 111 / 0800 111 0 222. Bei akuter Gefahr 112 / 110.',
      ],
      mission: 'Zuhören. Nicht überreden. Keine Heldenversprechen. Hilfe anbieten. Wenn du selbst wackelst: Kapitel schließen und Hilfe holen, nicht spielen.',
    },
    turns: [
      {
        speaker: 'Nora',
        line: 'Es hat einfach keinen Sinn mehr. Ihr versteht das eh nicht. Ich wollte nur, dass irgendwer… ich weiß nicht.',
        choices: [
          pro(
            'Es klingt, als wäre gerade alles zu schwer und als sähen Sie keinen Ausweg. Ich bin hier. Ich höre zu. Sie müssen das nicht allein zu Ende denken.',
            'Präsenz und Label. Kein Rat, kein „aber das Leben“. Stufe 1–2.',
            'Da bleiben und labeln',
          ),
          ok(
            'Natürlich hat es Sinn. Denken Sie an alles, was Sie noch haben.',
            'Gut gemeint, fühlt sich an wie Abwischen. Zu früh Stufe 5.',
          ),
          trap(
            'Dann lass uns morgen einen Plan machen, wenn du geschlafen hast. Jetzt ist es spät.',
            'Abwimmeln. Isolation plus Aufschub.',
          ),
          hot(
            'So etwas sagt man nicht. Reißen Sie sich zusammen.',
            'Scham oben drauf. Gefahr steigt.',
            { endsLage: true, delta: { safety: -45, rapport: -25, info: -10, outcome: -40 } },
          ),
        ],
      },
      {
        speaker: 'Nora',
        line: 'Du willst mich doch nur überreden, dass alles gut ist. Das ist es nicht.',
        choices: [
          pro(
            'Ich will Sie nicht überreden, dass alles gut ist. Es ist gerade nicht gut. Ich will, dass Sie nicht allein sind, während es so ist. Was davon hören Sie — und was nicht?',
            'Keine Debatte über die Stimmungslage. Wahrheit plus Autonomie.',
            'Empathie ≠ Einverständnis',
          ),
          ok(
            'Okay. Dann sage ich nichts mehr und höre nur.',
            'Stille kann helfen — nach diesem Satz braucht es noch ein bisschen Bindung, sonst fühlt es sich an wie Rückzug.',
          ),
          trap(
            'Doch, es wird wieder gut, das verspreche ich. Ich kenne das.',
            'Unhaltbares Versprechen plus Vergleich. Dein Ich vor ihrem Schmerz.',
          ),
          hot(
            'Wenn Sie nicht wollen, dass es gut wird, kann ich auch auflegen.',
            'Bestrafung durch Beziehung. Falsch.',
            { endsLage: true, delta: { safety: -40, rapport: -20, info: -8, outcome: -35 } },
          ),
        ],
      },
      {
        speaker: 'Nora',
        line: 'Wenn ich Hilfe hole, landet das in der Akte. Dann ist der Job weg. Dann war’s das sowieso.',
        choices: [
          pro(
            'Es klingt, als wäre die Angst vor Folgen fast so schwer wie der Schmerz selbst. Es gibt Wege, die zuerst zuhören, ohne dass ich das für Sie entscheide — Telefonseelsorge ist kostenfrei und unabhängig. Soll ich die Nummer mit Ihnen zusammen anrufen, oder bleiben wir erst hier am Apparat?',
            'Interesse (Existenz/Job) ernst nehmen, Optionen statt Befehl, Autonomie.',
            'Optionen, keine Befehle',
          ),
          ok(
            'Der Job ist gerade nicht das Wichtigste. Ihre Sicherheit ist es.',
            'Inhaltlich wahr, als Belehrung oft zu früh. Erst das Interesse, dann die Hierarchie.',
          ),
          trap(
            'Niemand erfährt das, ich schwöre, ich sage es auch der Chefin nicht, versprochen.',
            'Du kannst Vertraulichkeit nicht in jeder Lage garantieren — und Schwüre sind Heldenkitsch.',
          ),
          hot(
            'Ohne Hilfe bist du egoistisch gegenüber allen, die dich lieben.',
            'Schuld. Verschließt, statt zu öffnen.',
            { endsLage: true, delta: { safety: -35, rapport: -18, info: -6, outcome: -30 } },
          ),
        ],
      },
      {
        speaker: 'Nora',
        line: 'Bleib am Apparat. Aber ruf niemanden. Wenn vor der Tür jemand klingelt, lege ich auf.',
        choices: [
          pro(
            'Ich bleibe. Ich schicke jetzt niemanden zu Ihnen, ohne dass wir darüber gesprochen haben. Gleichzeitig: Wenn ich merke, dass Sie in akuter Gefahr sind, hole ich Hilfe — das sage ich vorher, nicht hinterrücks. Gehen wir Satz für Satz?',
            'Glaubwürdigkeit. Keine heimliche Eskalation, keine starre Zusage gegen Sicherheit.',
            'Keine heldenhaften Versprechen',
          ),
          ok(
            'Einverstanden. Niemand erfährt von diesem Anruf.',
            'Du bindest dir die Hände für den Fall, dass Gefahr steigt. Zu absolut.',
          ),
          trap(
            'Gut. Ich lasse trotzdem einen Freund vorbeifahren, der sagt nichts.',
            'Heimlichkeit. Wenn sie klingeln hört, ist das Vertrauen tot.',
          ),
          hot(
            'Das entscheidest du nicht. Ich rufe jetzt die Polizei, das ist zu groß für uns.',
            'Manchmal nötig bei akuter Gefahr — hier als erster Reflex, ohne Ankündigung, oft ein Abbruch. Im echten Leben: im Zweifel Hilfe. Im Training: ankündigen.',
            { endsLage: true, delta: { safety: -10, rapport: -22, info: -8, outcome: -15 } },
          ),
        ],
      },
      {
        speaker: 'Nora',
        line: 'Sag irgendwas Normales. Nicht Therapie. Als wären wir einfach zwei Leute.',
        choices: [
          pro(
            'Zwei Leute. Ich bin da. Magst du mir erzählen, was der schwerste Brocken heute war — ohne dass wir ihn lösen müssen?',
            'Normalität als Rapport, offene Frage, kein Fixen.',
            'Offene Fragen',
          ),
          ok(
            'Okay. Wie war das Wetter bei dir?',
            'Zu klein, kann aber als Pause dienen. Risiko: sie fühlt sich nicht ernst genommen.',
          ),
          trap(
            'Normal wäre, dass du morgen zur Arbeit gehst und Sport machst. Struktur hilft.',
            'Ratgeber. Zu früh, zu oben.',
          ),
          hot(
            'Normal sind Leute, die nicht mit so etwas anrufen. Du bist krank, das muss man so sagen.',
            'Stigma. Abbruchrisiko hoch.',
            { endsLage: true, delta: { safety: -40, rapport: -25, info: -10, outcome: -35 } },
          ),
        ],
      },
      {
        speaker: 'Nora',
        line: 'Der schwerste Brocken war das Mail vom Chef. Und dass niemand fragt. Du hast gefragt. …Kann die Seelsorge wirklich zuhören, ohne dass das beim Arbeitgeber landet?',
        choices: [
          pro(
            'Die Telefonseelsorge ist unabhängig und zum Zuhören da. Ich kann die 0800 111 0 111 mit dir zusammen wählen und in der Leitung bleiben, bis du magst. Du musst nichts versprechen, außer diesen einen nächsten Mini-Schritt. Willst du das jetzt — oder erst in fünf Minuten, während ich hier bleibe?',
            'Konkrete Hilfe, Autonomie, du bleibst. Das ist der Auftrag.',
            'Nächster kleiner Schritt',
          ),
          ok(
            'Ja. Ich schicke dir den Link, ruf an, wenn du soweit bist.',
            'Du schiebst die Arbeit zurück. Isolation droht, sobald aufgelegt wird.',
          ),
          trap(
            'Nur wenn du mir danach eine SMS schickst, dass alles okay ist.',
            'Bedingung an Bindung. Druck.',
          ),
          hot(
            'Endlich. Das hätte von Anfang an passieren müssen.',
            'Nachtreten im Moment des Ja. Unnötig.',
          ),
        ],
      },
    ],
    closing:
      'Hier gibt es keinen Deal. Es gibt Kontakt, Wahrheit, Optionen, Hilfe. Telefonseelsorge 0800 111 0 111 / 0800 111 0 222. Bei akuter Gefahr 112 oder 110. Wenn dich das Szenario mitnimmt: aufhören, Hilfe holen, nicht weiterspielen.',
  },
]
